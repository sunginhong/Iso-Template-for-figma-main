("use strict");

figma.showUI(__html__);
// figma.ui.resize(677, 500);
figma.ui.resize(1320, 923);

figma.ui.onmessage = (msg) => {
    const collection = figma.variables.createVariableCollection("new-collection");
    const modeId = collection.modes[0].modeId;
    const fontStyleBold = figma.variables.createVariable("fontFamily", collection, "STRING");
    fontStyleBold.setValueForMode(modeId, "Bold");
    
};