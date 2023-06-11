export var LinkHint;
(function (LinkHint) {
    LinkHint["Code"] = "code";
    // nick == interpolated == dynamic
    LinkHint["NickLine"] = "nick-line";
    LinkHint["NickTerm"] = "nick-term";
    LinkHint["NickText"] = "nick-text";
    LinkHint["Void"] = "void";
    LinkHint["Size"] = "size";
    LinkHint["SideSize"] = "side-size";
    LinkHint["Line"] = "line";
    LinkHint["Term"] = "term";
    LinkHint["Text"] = "text";
})(LinkHint || (LinkHint = {}));
export var LinkName;
(function (LinkName) {
    LinkName["Wave"] = "link-wave";
    LinkName["Comb"] = "link-comb";
    LinkName["Code"] = "link-code";
    LinkName["Cull"] = "link-cull";
    LinkName["Line"] = "link-path";
    LinkName["Nick"] = "link-nick";
    LinkName["SideSize"] = "link-side-size";
    LinkName["Term"] = "link-term";
    LinkName["Text"] = "link-text";
    LinkName["Tree"] = "link-tree";
    LinkName["Size"] = "link-size";
})(LinkName || (LinkName = {}));
// eslint-disable-next-line sort-exports/sort-exports
export const LINK_TYPE = [
    LinkName.Wave,
    LinkName.Comb,
    LinkName.Code,
    LinkName.Cull,
    LinkName.Line,
    LinkName.Nick,
    LinkName.SideSize,
    LinkName.Text,
    LinkName.Term,
    LinkName.Text,
    LinkName.Tree,
    LinkName.Size,
];
//# sourceMappingURL=form.js.map