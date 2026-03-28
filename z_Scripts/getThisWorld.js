function getThisWorld(tp) {
    const folderPath = tp.file.folder(true);
    const folders = folderPath.split("/");

    // Expected path:
    // Campaigns/<Campaign Name>/...
    const campaignFolder = folders[1];
    if (!campaignFolder) {
        console.log("getThisWorld: Could not determine campaign folder from", folderPath);
        return "";
    }

    const campaignNotePath = `Campaigns/${campaignFolder}/${campaignFolder}.md`;
    const campaignFile = app.vault.getAbstractFileByPath(campaignNotePath);

    if (!campaignFile) {
        console.log("getThisWorld: Campaign note not found at", campaignNotePath);
        return "";
    }

    const cache = app.metadataCache.getFileCache(campaignFile);
    const world = cache?.frontmatter?.world;

    if (!world) {
        console.log("getThisWorld: No 'world' field found in frontmatter for", campaignNotePath);
        return "";
    }

    console.log("getThisWorld: Found world =", world);
    return world;
}

module.exports = getThisWorld;