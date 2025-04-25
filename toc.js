// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded affix "><a href="index.html">HTML- ja CSS-kielen perusteet</a></li><li class="chapter-item expanded affix "><li class="part-title">Työvälineet</li><li class="chapter-item expanded "><a href="tyovalineet/ohjelmat.html"><strong aria-hidden="true">1.</strong> Tarvittavat ohjelmat</a></li><li class="chapter-item expanded "><a href="tyovalineet/vsc.html"><strong aria-hidden="true">2.</strong> Visual Studio Coden asentaminen</a></li><li class="chapter-item expanded affix "><li class="part-title">OSA 1 - HTML ja CSS</li><li class="chapter-item expanded "><a href="osa1/terms.html"><strong aria-hidden="true">3.</strong> HTML-kielen termistöä</a></li><li class="chapter-item expanded "><a href="osa1/elements.html"><strong aria-hidden="true">4.</strong> Yleisimmät HTML-elementit</a></li><li class="chapter-item expanded "><a href="osa1/document.html"><strong aria-hidden="true">5.</strong> HTML-dokumentti</a></li><li class="chapter-item expanded "><a href="osa1/hello.html"><strong aria-hidden="true">6.</strong> Ensimmäinen HTML-sivu</a></li><li class="chapter-item expanded "><a href="osa1/css.html"><strong aria-hidden="true">7.</strong> CSS-tyylit</a></li><li class="chapter-item expanded "><a href="osa1/boxmodel.html"><strong aria-hidden="true">8.</strong> Laatikkomalli</a></li><li class="chapter-item expanded "><a href="osa1/onepage.html"><strong aria-hidden="true">9.</strong> Yhden sivun kotisivut</a></li><li class="chapter-item expanded "><a href="osa1/onepagecss.html"><strong aria-hidden="true">10.</strong> Kotisivupohjan ulkoasu</a></li><li class="chapter-item expanded affix "><li class="part-title">OSA 2 - Johdanto JavaScriptiin</li><li class="chapter-item expanded "><a href="osa2/javascript01.html"><strong aria-hidden="true">11.</strong> JavaScript-ohjelmoinnin perusteet</a></li><li class="chapter-item expanded "><a href="osa2/jsmuuttujat.html"><strong aria-hidden="true">12.</strong> Muuttujat</a></li><li class="chapter-item expanded "><a href="osa2/jsoperaattorit.html"><strong aria-hidden="true">13.</strong> Operaattorit</a></li><li class="chapter-item expanded "><a href="osa2/jsohjaus.html"><strong aria-hidden="true">14.</strong> Ohjausrakenteet</a></li><li class="chapter-item expanded "><a href="osa2/jsfun.html"><strong aria-hidden="true">15.</strong> Funktiot</a></li><li class="chapter-item expanded "><a href="osa2/jsarr.html"><strong aria-hidden="true">16.</strong> Taulukkomuuttujat</a></li><li class="chapter-item expanded affix "><li class="part-title">OSA 3 - Kaaviot</li><li class="chapter-item expanded "><a href="osa3/library.html"><strong aria-hidden="true">17.</strong> JavaScript-kirjastot</a></li><li class="chapter-item expanded "><a href="osa3/github.html"><strong aria-hidden="true">18.</strong> GitHub</a></li><li class="chapter-item expanded "><a href="osa3/mermaid.html"><strong aria-hidden="true">19.</strong> Mermaid-kirjasto</a></li><li class="chapter-item expanded affix "><li class="part-title">OSA 4 - API-rajapinnat</li><li class="chapter-item expanded "><a href="osa4/api01.html"><strong aria-hidden="true">20.</strong> API-rajapinnat lyhyesti</a></li><li class="chapter-item expanded "><a href="osa4/api02.html"><strong aria-hidden="true">21.</strong> Ensimmäinen API-sovellus</a></li><li class="chapter-item expanded affix "><li class="spacer"></li><li class="chapter-item expanded affix "><a href="copyright.html">Tekijät</a></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split("#")[0];
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);
