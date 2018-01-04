export function scss(name : string) : string {
    return `%${name} {
    /* use !important to prevent issues with browser extensions that change fonts */
	font-family: '${name}' !important;
	speak: none;
	font-style: normal;
	font-weight: normal;
	font-variant: normal;
	text-transform: none;
	line-height: 1;
	
	/* Enable Ligatures ================ */
	letter-spacing: 0;
	-webkit-font-feature-settings: "liga";
	-moz-font-feature-settings: "liga=1";
	-moz-font-feature-settings: "liga";
	-ms-font-feature-settings: "liga" 1;
	font-feature-settings: "liga";
	-webkit-font-variant-ligatures: discretionary-ligatures;
	font-variant-ligatures: discretionary-ligatures;
	/* Better Font Rendering =========== */
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}

@mixin ${name}() {
    @extend %${name}
}

.${name} {
    @extend %${name}
}
`
}
