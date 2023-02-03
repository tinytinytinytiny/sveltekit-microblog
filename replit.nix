{ pkgs }: {
	deps = with pkgs; [
    	pkgs.pscale
  		pkgs.pscale
 		pkgs.nodejs-18_x
    	pkgs.nodePackages.typescript-language-server
		nodePackages.svelte-language-server
    	pkgs.yarn
    	pkgs.replitPackages.jest
	];
}