{
    function printLoginState(resourceLoadState) {
        switch (resourceLoadState.state) {
            case "loading":
                console.log("\uD83D\uDE44 " + resourceLoadState.state + "...");
                break;
            case "success":
                console.log("\uD83D\uDE00 " + resourceLoadState.response.body);
                break;
            case "fail":
                console.log("\uD83D\uDE25 " + resourceLoadState.reason);
                break;
            default:
                throw new Error("no case in here");
        }
    }
    printLoginState({ state: "loading" }); // 👀 loading...
    printLoginState({ state: "success", response: { body: "loaded" } }); // 😃 loaded
    printLoginState({ state: "fail", reason: "no network" }); // 😱 no network
}
