
// Collapsible sidebar function based on https://github.com/mrliptontea/PurpleMine2
// Reference PurpleMine2 v2.16.0
// Author: mrliptontea

var PurpleMine = PurpleMine || {};
(PurpleMine = PurpleMine || {}).SidebarToggler = function() {
    "use strict";
    var i, e = {
        en: {
            toggler: "Toggle sidebar"
        },
        ro: {
            toggler: "Deschide/închide bara laterală"
        },
        fr: {
            toggler: "Basculer la barre latérale"
        },
        pl: {
            toggler: "Pokaż/ukryj panel boczny"
        },
        ja: {
            toggler: "サイドバーの切り替え"
        }
    };
    function t() {
        if (i)
            return i;
        (i = this).sidebarVisible = !0,
        this.sidebarHiding = null,
        this.$toggler = null,
        this.$header = $("#header"),
        this.$main = $("#main"),
        this.$sidebar = $("#sidebar"),
        this.lang = document.documentElement.lang,
        void 0 === e[this.lang] && (this.lang = "en"),
        this._ = e[this.lang],
        function() {
            window.localStorage && (i.sidebarVisible = null === localStorage.getItem("PurpleMine:sidebarHidden"));
            0 < i.$sidebar.length && !1 === i.$main.hasClass("nosidebar") && (function() {
                var e = '<a href="javascript:;" class="sidebar-toggler" title="' + i._.toggler + '"></a>';
                i.$toggler = $(e),
                i.$header.append(i.$toggler),
                i.$toggler.on("click", i.toggleSidebar)
            }(),
            function() {
                var t = document.getElementsByTagName("body")[0];
                window.onkeydown = function(e) {
                    t === e.target && 83 === e.keyCode && !1 === e.ctrlKey && !1 === e.altKey && !1 === e.shiftKey && i.toggleSidebar()
                }
            }(),
            !1 === i.sidebarVisible && i.hideSidebar(!0))
        }()
    }
    return t.prototype.toggleSidebar = function() {
        i.sidebarVisible ? i.hideSidebar() : i.showSidebar()
    }
    ,
    t.prototype.hideSidebar = function(e) {
        !0 === e ? this.$sidebar.addClass("sidebar-hiding sidebar-hidden") : (this.$sidebar.addClass("sidebar-hiding"),
        this.sidebarHiding = setTimeout(function() {
            i.$sidebar.addClass("sidebar-hidden")
        }, 500)),
        this.$toggler.addClass("sidebar-hidden"),
        this.sidebarVisible = !1,
        window.localStorage && localStorage.setItem("PurpleMine:sidebarHidden", "x")
    }
    ,
    t.prototype.showSidebar = function() {
        clearTimeout(this.sidebarHiding),
        i.$sidebar.removeClass("sidebar-hidden"),
        setTimeout(function() {
            i.$sidebar.removeClass("sidebar-hiding")
        }, 50),
        this.$toggler.removeClass("sidebar-hidden"),
        this.sidebarVisible = !0,
        window.localStorage && localStorage.removeItem("PurpleMine:sidebarHidden")
    }
    ,
    t
}(),
$(function() {
    "use strict";
    new PurpleMine.SidebarToggler
});
