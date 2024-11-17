"use strict";

var CABLES=CABLES||{};
CABLES.OPS=CABLES.OPS||{};

var Ops=Ops || {};
Ops.Gl=Ops.Gl || {};
Ops.Ui=Ops.Ui || {};
Ops.Anim=Ops.Anim || {};
Ops.Html=Ops.Html || {};
Ops.Math=Ops.Math || {};
Ops.Array=Ops.Array || {};
Ops.Patch=Ops.Patch || {};
Ops.Cables=Ops.Cables || {};
Ops.Boolean=Ops.Boolean || {};
Ops.Gl.GLTF=Ops.Gl.GLTF || {};
Ops.Trigger=Ops.Trigger || {};
Ops.Gl.Phong=Ops.Gl.Phong || {};
Ops.Graphics=Ops.Graphics || {};
Ops.TimeLine=Ops.TimeLine || {};
Ops.WebAudio=Ops.WebAudio || {};
Ops.Gl.Matrix=Ops.Gl.Matrix || {};
Ops.Gl.Meshes=Ops.Gl.Meshes || {};
Ops.Gl.Shader=Ops.Gl.Shader || {};
Ops.Gl.CubeMap=Ops.Gl.CubeMap || {};
Ops.Math.Compare=Ops.Math.Compare || {};
Ops.Patch.PTONYIs=Ops.Patch.PTONYIs || {};
Ops.Gl.ShaderEffects=Ops.Gl.ShaderEffects || {};
Ops.Graphics.Geometry=Ops.Graphics.Geometry || {};



// **************************************************************
// 
// Ops.Patch.PTONYIs.LoadAndPrerenderProgress
// 
// **************************************************************

Ops.Patch.PTONYIs.LoadAndPrerenderProgress = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={"inc_gen_ports_js":"const port_7kb5yl15k=op.inTrigger(\"7kb5yl15k\");\nport_7kb5yl15k.setUiAttribs({title:\"Loading NOT Finished\",});\nport_7kb5yl15k.setUiAttribs({\"values\":[\"\"]});\n\nconst port_5qbapbk05=op.inTrigger(\"5qbapbk05\");\nport_5qbapbk05.setUiAttribs({title:\"Prerendered Frame\",});\nport_5qbapbk05.setUiAttribs({\"values\":[\"\"]});\n\nconst port_ftiar2jdm=op.inTrigger(\"ftiar2jdm\");\nport_ftiar2jdm.setUiAttribs({title:\"Loading Finished\",});\nport_ftiar2jdm.setUiAttribs({\"values\":[\"\"]});\n\nconst port_3ltdw7sun=op.inFloat(\"3ltdw7sun\",1);\nport_3ltdw7sun.setUiAttribs({title:\"Loading Progress\",});\nport_3ltdw7sun.setUiAttribs({\"values\":[\"\"]});\n\nconst port_q3fimze6q=op.inFloat(\"q3fimze6q\",1);\nport_q3fimze6q.setUiAttribs({title:\"Prerender Progress\",});\nport_q3fimze6q.setUiAttribs({\"values\":[\"\"]});\n\nop.initInnerPorts=function(addedOps)\n{\n  for(let i=0;i<addedOps.length;i++)\n  {\n    if(addedOps[i].innerInput)\n    {\nconst innerOut_7kb5yl15k = addedOps[i].outTrigger(\"innerOut_7kb5yl15k\");\ninnerOut_7kb5yl15k.setUiAttribs({title:\"Loading NOT Finished\"});\nport_7kb5yl15k.onTriggered = () => { innerOut_7kb5yl15k.trigger(); };\n\nconst innerOut_5qbapbk05 = addedOps[i].outTrigger(\"innerOut_5qbapbk05\");\ninnerOut_5qbapbk05.setUiAttribs({title:\"Prerendered Frame\"});\nport_5qbapbk05.onTriggered = () => { innerOut_5qbapbk05.trigger(); };\n\nconst innerOut_ftiar2jdm = addedOps[i].outTrigger(\"innerOut_ftiar2jdm\");\ninnerOut_ftiar2jdm.setUiAttribs({title:\"Loading Finished\"});\nport_ftiar2jdm.onTriggered = () => { innerOut_ftiar2jdm.trigger(); };\n\nconst innerOut_3ltdw7sun = addedOps[i].outNumber(\"innerOut_3ltdw7sun\");\ninnerOut_3ltdw7sun.set(port_3ltdw7sun.get() );\ninnerOut_3ltdw7sun.setUiAttribs({title:\"Loading Progress\"});\nport_3ltdw7sun.on(\"change\", (a,v) => { innerOut_3ltdw7sun.set(a); });\n\nconst innerOut_q3fimze6q = addedOps[i].outNumber(\"innerOut_q3fimze6q\");\ninnerOut_q3fimze6q.set(port_q3fimze6q.get() );\ninnerOut_q3fimze6q.setUiAttribs({title:\"Prerender Progress\"});\nport_q3fimze6q.on(\"change\", (a,v) => { innerOut_q3fimze6q.set(a); });\n\n    }\nif(addedOps[i].innerOutput)\n{\n}\n}\n};\n","subpatch_json":"{\"ops\":[{\"id\":\"1iactcq9y\",\"uiAttribs\":{\"subPatch\":\"icqbfw1xp\"},\"storage\":{},\"portsIn\":[{\"name\":\"posX\",\"value\":-1.6},{\"name\":\"posY\",\"value\":0},{\"name\":\"posZ\",\"value\":0},{\"name\":\"scale\",\"value\":1},{\"name\":\"rotX\",\"value\":0},{\"name\":\"rotY\",\"value\":0},{\"name\":\"rotZ\",\"value\":0}],\"portsOut\":[{\"name\":\"trigger\",\"links\":[{\"portIn\":\"render\",\"portOut\":\"trigger\",\"objIn\":\"m91btd474\",\"objOut\":\"1iactcq9y\"}]}],\"objName\":\"Ops.Gl.Matrix.Transform\"},{\"id\":\"m91btd474\",\"uiAttribs\":{\"subPatch\":\"icqbfw1xp\"},\"storage\":{},\"portsIn\":[{\"name\":\"r\",\"value\":0.1},{\"name\":\"g\",\"value\":0.1},{\"name\":\"b\",\"value\":0.1},{\"name\":\"a\",\"value\":1}],\"portsOut\":[{\"name\":\"trigger\",\"links\":[{\"portIn\":\"Render\",\"portOut\":\"trigger\",\"objIn\":\"lsqcx96eo\",\"objOut\":\"m91btd474\"}]}],\"objName\":\"Ops.Gl.ClearColor\"},{\"id\":\"lsqcx96eo\",\"uiAttribs\":{\"subPatch\":\"icqbfw1xp\"},\"storage\":{},\"portsIn\":[{\"name\":\"Enable depth testing\",\"value\":0},{\"name\":\"Depth Test Method index\",\"value\":3},{\"name\":\"Depth Test Method\",\"value\":\"less or equal\"},{\"name\":\"Write to depth buffer\",\"value\":0}],\"portsOut\":[{\"name\":\"Next\",\"links\":[{\"portIn\":\"render\",\"portOut\":\"Next\",\"objIn\":\"ztq3cnkap\",\"objOut\":\"lsqcx96eo\"}]}],\"objName\":\"Ops.Graphics.DepthTest\"},{\"id\":\"org0hi898\",\"uiAttribs\":{\"subPatch\":\"icqbfw1xp\"},\"storage\":{},\"portsIn\":[{\"name\":\"r\",\"value\":1},{\"name\":\"g\",\"value\":1},{\"name\":\"b\",\"value\":1},{\"name\":\"a\",\"value\":1},{\"name\":\"colorizeTexture\",\"value\":0},{\"name\":\"Vertex Colors\",\"value\":0},{\"name\":\"Alpha Mask Source index\",\"value\":0},{\"name\":\"Alpha Mask Source\",\"value\":\"Luminance\"},{\"name\":\"Opacity TexCoords Transform\",\"value\":0},{\"name\":\"Discard Transparent Pixels\",\"value\":0},{\"name\":\"diffuseRepeatX\",\"value\":1},{\"name\":\"diffuseRepeatY\",\"value\":1},{\"name\":\"Tex Offset X\",\"value\":0},{\"name\":\"Tex Offset Y\",\"value\":0},{\"name\":\"Crop TexCoords\",\"value\":0},{\"name\":\"billboard\",\"value\":0}],\"portsOut\":[{\"name\":\"trigger\",\"links\":[{\"portIn\":\"render\",\"portOut\":\"trigger\",\"objIn\":\"si06p7vic\",\"objOut\":\"org0hi898\"}]}],\"objName\":\"Ops.Gl.Shader.BasicMaterial_v3\"},{\"id\":\"rfef3f27c\",\"uiAttribs\":{\"subPatch\":\"icqbfw1xp\"},\"storage\":{},\"portsIn\":[{\"name\":\"render\",\"title\":\"Trigger\"},{\"name\":\"Render Mesh\",\"value\":1,\"title\":\"Render\"},{\"name\":\"width\",\"value\":3},{\"name\":\"height\",\"value\":0.2},{\"name\":\"pivot x index\",\"value\":0},{\"name\":\"pivot x\",\"value\":\"left\"},{\"name\":\"pivot y index\",\"value\":1},{\"name\":\"pivot y\",\"value\":\"center\"},{\"name\":\"axis index\",\"value\":0},{\"name\":\"axis\",\"value\":\"xy\"},{\"name\":\"Flip TexCoord X\",\"value\":0},{\"name\":\"Flip TexCoord Y\",\"value\":1},{\"name\":\"num columns\",\"value\":1},{\"name\":\"num rows\",\"value\":1}],\"objName\":\"Ops.Gl.Meshes.Rectangle_v4\"},{\"id\":\"ztq3cnkap\",\"uiAttribs\":{\"subPatch\":\"icqbfw1xp\"},\"storage\":{},\"portsIn\":[{\"name\":\"r\",\"value\":0.1},{\"name\":\"g\",\"value\":0.1},{\"name\":\"b\",\"value\":0.3},{\"name\":\"a\",\"value\":1},{\"name\":\"colorizeTexture\",\"value\":0},{\"name\":\"Vertex Colors\",\"value\":0},{\"name\":\"Alpha Mask Source index\",\"value\":0},{\"name\":\"Alpha Mask Source\",\"value\":\"Luminance\"},{\"name\":\"Opacity TexCoords Transform\",\"value\":0},{\"name\":\"Discard Transparent Pixels\",\"value\":0},{\"name\":\"diffuseRepeatX\",\"value\":1},{\"name\":\"diffuseRepeatY\",\"value\":1},{\"name\":\"Tex Offset X\",\"value\":0},{\"name\":\"Tex Offset Y\",\"value\":0},{\"name\":\"Crop TexCoords\",\"value\":0},{\"name\":\"billboard\",\"value\":0}],\"portsOut\":[{\"name\":\"trigger\",\"links\":[{\"portIn\":\"render\",\"portOut\":\"trigger\",\"objIn\":\"3lhh71men\",\"objOut\":\"ztq3cnkap\"}]}],\"objName\":\"Ops.Gl.Shader.BasicMaterial_v3\"},{\"id\":\"3lhh71men\",\"uiAttribs\":{\"subPatch\":\"icqbfw1xp\"},\"storage\":{},\"portsIn\":[{\"name\":\"render\",\"title\":\"Trigger\"},{\"name\":\"Render Mesh\",\"value\":1,\"title\":\"Render\"},{\"name\":\"width\",\"value\":3.2},{\"name\":\"height\",\"value\":0.4},{\"name\":\"pivot x index\",\"value\":0},{\"name\":\"pivot x\",\"value\":\"left\"},{\"name\":\"pivot y index\",\"value\":1},{\"name\":\"pivot y\",\"value\":\"center\"},{\"name\":\"axis index\",\"value\":0},{\"name\":\"axis\",\"value\":\"xy\"},{\"name\":\"Flip TexCoord X\",\"value\":0},{\"name\":\"Flip TexCoord Y\",\"value\":1},{\"name\":\"num columns\",\"value\":1},{\"name\":\"num rows\",\"value\":1}],\"portsOut\":[{\"name\":\"trigger\",\"title\":\"Next\",\"links\":[{\"portIn\":\"render\",\"portOut\":\"trigger\",\"objIn\":\"5n5yjwrr3\",\"objOut\":\"3lhh71men\"}]}],\"objName\":\"Ops.Gl.Meshes.Rectangle_v4\"},{\"id\":\"si06p7vic\",\"uiAttribs\":{\"subPatch\":\"icqbfw1xp\"},\"storage\":{},\"portsIn\":[{\"name\":\"scale\",\"value\":1},{\"name\":\"y\",\"value\":1},{\"name\":\"z\",\"value\":1}],\"portsOut\":[{\"name\":\"trigger\",\"links\":[{\"portIn\":\"render\",\"portOut\":\"trigger\",\"objIn\":\"rfef3f27c\",\"objOut\":\"si06p7vic\"}]}],\"objName\":\"Ops.Gl.Matrix.Scale\"},{\"id\":\"ayrhyjh6t\",\"uiAttribs\":{\"subPatch\":\"icqbfw1xp\"},\"storage\":{},\"portsOut\":[{\"name\":\"result\",\"links\":[{\"portIn\":\"number1\",\"portOut\":\"result\",\"objIn\":\"3g5kqgloi\",\"objOut\":\"ayrhyjh6t\"}]}],\"objName\":\"Ops.Math.Sum\"},{\"id\":\"3g5kqgloi\",\"uiAttribs\":{\"subPatch\":\"icqbfw1xp\"},\"storage\":{},\"portsIn\":[{\"name\":\"number2\",\"value\":2}],\"portsOut\":[{\"name\":\"result\",\"links\":[{\"portIn\":\"x\",\"portOut\":\"result\",\"objIn\":\"si06p7vic\",\"objOut\":\"3g5kqgloi\"}]}],\"objName\":\"Ops.Math.Divide\"},{\"id\":\"5n5yjwrr3\",\"uiAttribs\":{\"subPatch\":\"icqbfw1xp\"},\"storage\":{},\"portsIn\":[{\"name\":\"posX\",\"value\":0.1},{\"name\":\"posY\",\"value\":0},{\"name\":\"posZ\",\"value\":0},{\"name\":\"scale\",\"value\":1},{\"name\":\"rotX\",\"value\":0},{\"name\":\"rotY\",\"value\":0},{\"name\":\"rotZ\",\"value\":0}],\"portsOut\":[{\"name\":\"trigger\",\"links\":[{\"portIn\":\"render\",\"portOut\":\"trigger\",\"objIn\":\"org0hi898\",\"objOut\":\"5n5yjwrr3\"}]}],\"objName\":\"Ops.Gl.Matrix.Transform\"},{\"id\":\"v91kzgjmx\",\"uiAttribs\":{\"subPatch\":\"icqbfw1xp\"},\"storage\":{},\"portsOut\":[{\"name\":\"trigger 0\",\"links\":[{\"portIn\":\"Execute\",\"portOut\":\"trigger 0\",\"objIn\":\"2hvko6n08\",\"objOut\":\"v91kzgjmx\"}]},{\"name\":\"trigger 15\",\"links\":[{\"portIn\":\"render\",\"portOut\":\"trigger 15\",\"objIn\":\"1iactcq9y\",\"objOut\":\"v91kzgjmx\"}]}],\"objName\":\"Ops.Trigger.Sequence\"},{\"id\":\"3cz28wuzu\",\"uiAttribs\":{\"subPatch\":\"icqbfw1xp\"},\"storage\":{},\"portsOut\":[{\"name\":\"Result\",\"links\":[{\"portIn\":\"Pass Through\",\"portOut\":\"Result\",\"objIn\":\"2hvko6n08\",\"objOut\":\"3cz28wuzu\"}]}],\"objName\":\"Ops.Boolean.Not\"},{\"id\":\"2hvko6n08\",\"uiAttribs\":{\"subPatch\":\"icqbfw1xp\"},\"storage\":{},\"portsOut\":[{\"name\":\"Trigger out\",\"links\":[{\"portIn\":\"Update\",\"portOut\":\"Trigger out\",\"objIn\":\"yxv75dz3x\",\"objOut\":\"2hvko6n08\"}]}],\"objName\":\"Ops.Trigger.GateTrigger\"},{\"id\":\"nzeuepnpm\",\"uiAttribs\":{\"subPatch\":\"icqbfw1xp\"},\"storage\":{},\"portsOut\":[{\"name\":\"UI\",\"links\":[{\"portIn\":\"Boolean\",\"portOut\":\"UI\",\"objIn\":\"3cz28wuzu\",\"objOut\":\"nzeuepnpm\"}]},{\"name\":\"Overlay Mode\",\"value\":0},{\"name\":\"Remote Viewer\",\"value\":0},{\"name\":\"Is Standalone\",\"value\":0},{\"name\":\"Canvas Mode\",\"value\":0},{\"name\":\"Patch Field Visible\",\"value\":0}],\"objName\":\"Ops.Cables.UIMode\"},{\"id\":\"yxv75dz3x\",\"uiAttribs\":{\"subPatch\":\"icqbfw1xp\"},\"storage\":{},\"portsIn\":[{\"name\":\"CSS Cursors index\",\"value\":17},{\"name\":\"CSS Cursors\",\"value\":\"none\"},{\"name\":\"Set Parent Element\",\"value\":1}],\"objName\":\"Ops.Html.Cursor_v2\"},{\"id\":\"fdnzq8ccq\",\"uiAttribs\":{\"subPatch\":\"icqbfw1xp\"},\"storage\":{},\"portsOut\":[{\"name\":\"innerOut_3ltdw7sun\",\"title\":\"number1\",\"links\":[{\"portIn\":\"number1\",\"portOut\":\"innerOut_3ltdw7sun\",\"objIn\":\"ayrhyjh6t\",\"objOut\":\"fdnzq8ccq\"}]},{\"name\":\"innerOut_q3fimze6q\",\"title\":\"number2\",\"links\":[{\"portIn\":\"number2\",\"portOut\":\"innerOut_q3fimze6q\",\"objIn\":\"ayrhyjh6t\",\"objOut\":\"fdnzq8ccq\"}]},{\"name\":\"innerOut_7kb5yl15k\",\"title\":\"exe\",\"links\":[{\"portIn\":\"exe\",\"portOut\":\"innerOut_7kb5yl15k\",\"objIn\":\"v91kzgjmx\",\"objOut\":\"fdnzq8ccq\"}]},{\"name\":\"innerOut_5qbapbk05\",\"title\":\"exe 1\",\"links\":[{\"portIn\":\"exe 1\",\"portOut\":\"innerOut_5qbapbk05\",\"objIn\":\"v91kzgjmx\",\"objOut\":\"fdnzq8ccq\"}]},{\"name\":\"innerOut_ftiar2jdm\",\"title\":\"exe 3\",\"links\":[{\"portIn\":\"exe 3\",\"portOut\":\"innerOut_ftiar2jdm\",\"objIn\":\"v91kzgjmx\",\"objOut\":\"fdnzq8ccq\"}]}],\"objName\":\"Ops.Ui.SubPatchInput\"},{\"id\":\"k7e9xfpjd\",\"uiAttribs\":{\"subPatch\":\"icqbfw1xp\"},\"storage\":{},\"objName\":\"Ops.Ui.SubPatchOutput\"}]}",};
const port_7kb5yl15k=op.inTrigger("7kb5yl15k");
port_7kb5yl15k.setUiAttribs({title:"Loading NOT Finished",});
port_7kb5yl15k.setUiAttribs({"values":[""]});

const port_5qbapbk05=op.inTrigger("5qbapbk05");
port_5qbapbk05.setUiAttribs({title:"Prerendered Frame",});
port_5qbapbk05.setUiAttribs({"values":[""]});

const port_ftiar2jdm=op.inTrigger("ftiar2jdm");
port_ftiar2jdm.setUiAttribs({title:"Loading Finished",});
port_ftiar2jdm.setUiAttribs({"values":[""]});

const port_3ltdw7sun=op.inFloat("3ltdw7sun",1);
port_3ltdw7sun.setUiAttribs({title:"Loading Progress",});
port_3ltdw7sun.setUiAttribs({"values":[""]});

const port_q3fimze6q=op.inFloat("q3fimze6q",1);
port_q3fimze6q.setUiAttribs({title:"Prerender Progress",});
port_q3fimze6q.setUiAttribs({"values":[""]});

op.initInnerPorts=function(addedOps)
{
  for(let i=0;i<addedOps.length;i++)
  {
    if(addedOps[i].innerInput)
    {
const innerOut_7kb5yl15k = addedOps[i].outTrigger("innerOut_7kb5yl15k");
innerOut_7kb5yl15k.setUiAttribs({title:"Loading NOT Finished"});
port_7kb5yl15k.onTriggered = () => { innerOut_7kb5yl15k.trigger(); };

const innerOut_5qbapbk05 = addedOps[i].outTrigger("innerOut_5qbapbk05");
innerOut_5qbapbk05.setUiAttribs({title:"Prerendered Frame"});
port_5qbapbk05.onTriggered = () => { innerOut_5qbapbk05.trigger(); };

const innerOut_ftiar2jdm = addedOps[i].outTrigger("innerOut_ftiar2jdm");
innerOut_ftiar2jdm.setUiAttribs({title:"Loading Finished"});
port_ftiar2jdm.onTriggered = () => { innerOut_ftiar2jdm.trigger(); };

const innerOut_3ltdw7sun = addedOps[i].outNumber("innerOut_3ltdw7sun");
innerOut_3ltdw7sun.set(port_3ltdw7sun.get() );
innerOut_3ltdw7sun.setUiAttribs({title:"Loading Progress"});
port_3ltdw7sun.on("change", (a,v) => { innerOut_3ltdw7sun.set(a); });

const innerOut_q3fimze6q = addedOps[i].outNumber("innerOut_q3fimze6q");
innerOut_q3fimze6q.set(port_q3fimze6q.get() );
innerOut_q3fimze6q.setUiAttribs({title:"Prerender Progress"});
port_q3fimze6q.on("change", (a,v) => { innerOut_q3fimze6q.set(a); });

    }
if(addedOps[i].innerOutput)
{
}
}
};

const patchId = "bp2sub_" + op.id;

new CABLES.SubPatchOp(op, { "subId": patchId });

initializeSubpatch();

function initializeSubpatch()
{
    if(!attachments || !attachments.subpatch_json) return;

    const p = JSON.parse(attachments.subpatch_json);

    CABLES.Patch.replaceOpIds(p,
        {
            "parentSubPatchId": patchId,
            "prefixHash": patchId,
            "oldIdAsRef": true,
            "doNotUnlinkLostLinks": true
        });

    for (let i = 0; i < p.ops.length; i++)
    {
        p.ops[i].uiAttribs.blueprintSubpatch2 = true;
    }

    op.loadDependencies(p, () =>
    {
        op.patch.deSerialize(p, { "opsCreated": op.initInnerPorts });
        if (CABLES.UI)gui.savedState.setSaved("blueprintloaded", patchId);
        op.patch.emitEvent("subpatchExpose", patchId);
        op.setStorage({ "blueprintVer": 2 });
        op.patch.emitEvent("subpatchExpose", patchId);
    });
}


};

Ops.Patch.PTONYIs.LoadAndPrerenderProgress.prototype = new CABLES.Op();
CABLES.OPS["db4912b5-8db0-4b3c-9f36-ec1dc995d3b8"]={f:Ops.Patch.PTONYIs.LoadAndPrerenderProgress,objName:"Ops.Patch.PTONYIs.LoadAndPrerenderProgress"};




// **************************************************************
// 
// Ops.Patch.PTONYIs.TextDate
// 
// **************************************************************

Ops.Patch.PTONYIs.TextDate = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={"inc_gen_ports_js":"const port_gethk09mv=op.inTrigger(\"gethk09mv\");\nport_gethk09mv.setUiAttribs({title:\"exe\",});\n\nconst port_u73vfcsz7=op.inObject(\"u73vfcsz7\");\nport_u73vfcsz7.setUiAttribs({title:\"Environment Map\",display:\"texture\",objType:\"texture\",objType:\"texture\"});\n\nconst port_5dp87zoyx=op.inFloat(\"5dp87zoyx\",0);\nport_5dp87zoyx.setUiAttribs({title:\"posY\",});\n\nconst port_rrulmt9am=op.inFloat(\"rrulmt9am\",0);\nport_rrulmt9am.setUiAttribs({title:\"posZ\",});\n\nconst port_y2lvmhocd=op.inFloat(\"y2lvmhocd\",0);\nport_y2lvmhocd.setUiAttribs({title:\"rotZ\",});\n\nconst port_4gkczcyw9=op.inFloat(\"4gkczcyw9\",0);\nport_4gkczcyw9.setUiAttribs({title:\"Size\",});\n\nconst port_qqt14xeyr=op.inFloat(\"qqt14xeyr\",1);\nport_qqt14xeyr.setUiAttribs({title:\"A\",display:\"range\",});\n\nop.initInnerPorts=function(addedOps)\n{\n  for(let i=0;i<addedOps.length;i++)\n  {\n    if(addedOps[i].innerInput)\n    {\nconst innerOut_gethk09mv = addedOps[i].outTrigger(\"innerOut_gethk09mv\");\ninnerOut_gethk09mv.setUiAttribs({title:\"exe\"});\nport_gethk09mv.onTriggered = () => { innerOut_gethk09mv.trigger(); };\n\nconst innerOut_u73vfcsz7 = addedOps[i].outTexture(\"innerOut_u73vfcsz7\");\ninnerOut_u73vfcsz7.setUiAttribs({title:\"Environment Map\"});\nport_u73vfcsz7.on(\"change\", (a,v) => { innerOut_u73vfcsz7.setRef(a); });\n\nconst innerOut_5dp87zoyx = addedOps[i].outNumber(\"innerOut_5dp87zoyx\");\ninnerOut_5dp87zoyx.set(port_5dp87zoyx.get() );\ninnerOut_5dp87zoyx.setUiAttribs({title:\"posY\"});\nport_5dp87zoyx.on(\"change\", (a,v) => { innerOut_5dp87zoyx.set(a); });\n\nconst innerOut_rrulmt9am = addedOps[i].outNumber(\"innerOut_rrulmt9am\");\ninnerOut_rrulmt9am.set(port_rrulmt9am.get() );\ninnerOut_rrulmt9am.setUiAttribs({title:\"posZ\"});\nport_rrulmt9am.on(\"change\", (a,v) => { innerOut_rrulmt9am.set(a); });\n\nconst innerOut_y2lvmhocd = addedOps[i].outNumber(\"innerOut_y2lvmhocd\");\ninnerOut_y2lvmhocd.set(port_y2lvmhocd.get() );\ninnerOut_y2lvmhocd.setUiAttribs({title:\"rotZ\"});\nport_y2lvmhocd.on(\"change\", (a,v) => { innerOut_y2lvmhocd.set(a); });\n\nconst innerOut_4gkczcyw9 = addedOps[i].outNumber(\"innerOut_4gkczcyw9\");\ninnerOut_4gkczcyw9.set(port_4gkczcyw9.get() );\ninnerOut_4gkczcyw9.setUiAttribs({title:\"Size\"});\nport_4gkczcyw9.on(\"change\", (a,v) => { innerOut_4gkczcyw9.set(a); });\n\nconst innerOut_qqt14xeyr = addedOps[i].outNumber(\"innerOut_qqt14xeyr\");\ninnerOut_qqt14xeyr.set(port_qqt14xeyr.get() );\ninnerOut_qqt14xeyr.setUiAttribs({title:\"A\"});\nport_qqt14xeyr.on(\"change\", (a,v) => { innerOut_qqt14xeyr.set(a); });\n\n    }\nif(addedOps[i].innerOutput)\n{\n}\n}\n};\n","subpatch_json":"{\"ops\":[{\"id\":\"entafgi3d\",\"uiAttribs\":{\"subPatch\":\"7ksf6rjbb\"},\"storage\":{},\"portsIn\":[{\"name\":\"data\",\"value\":\"\"},{\"name\":\"glb File\",\"value\":\"/assets/6722a3ec67bbb32772043167/xmas_date.glb\",\"display\":\"file\"},{\"name\":\"Draw\",\"value\":0},{\"name\":\"Camera index\",\"value\":0},{\"name\":\"Camera\",\"value\":\"None\"},{\"name\":\"Animation\",\"value\":\"\"},{\"name\":\"Center index\",\"value\":1},{\"name\":\"Center\",\"value\":\"XYZ\"},{\"name\":\"Rescale\",\"value\":1},{\"name\":\"Rescale Size\",\"value\":2.5},{\"name\":\"Time\",\"value\":0},{\"name\":\"Sync to timeline\",\"value\":0},{\"name\":\"Loop\",\"value\":1},{\"name\":\"Normals Format index\",\"value\":0},{\"name\":\"Normals Format\",\"value\":\"XYZ\"},{\"name\":\"Vertices Format index\",\"value\":0},{\"name\":\"Vertices Format\",\"value\":\"XYZ\"},{\"name\":\"Calc Normals index\",\"value\":0},{\"name\":\"Calc Normals\",\"value\":\"Auto\"},{\"name\":\"Hide Nodes\",\"value\":0},{\"name\":\"Use Material Properties\",\"value\":0},{\"name\":\"Active\",\"value\":1}],\"portsOut\":[{\"name\":\"Render Before\",\"links\":[{\"portIn\":\"Update\",\"portOut\":\"Render Before\",\"objIn\":\"kccrr40lu\",\"objOut\":\"entafgi3d\"}]},{\"name\":\"Generator\",\"value\":\"Khronos glTF Blender I/O v4.2.70\"},{\"name\":\"GLTF Version\",\"value\":2},{\"name\":\"Anim Length\",\"value\":0},{\"name\":\"Anim Time\",\"value\":0},{\"name\":\"Loading\",\"value\":false}],\"objName\":\"Ops.Gl.GLTF.GltfScene_v4\"},{\"id\":\"01x2iaoi2\",\"uiAttribs\":{\"subPatch\":\"7ksf6rjbb\"},\"storage\":{},\"portsIn\":[{\"name\":\"R\",\"value\":1},{\"name\":\"G\",\"value\":1},{\"name\":\"B\",\"value\":1},{\"name\":\"Enable\",\"value\":0},{\"name\":\"Albedo\",\"value\":0.707},{\"name\":\"Roughness\",\"value\":0.835},{\"name\":\"Active\",\"value\":0},{\"name\":\"Fresnel Intensity\",\"value\":0.7},{\"name\":\"Fresnel Width\",\"value\":1},{\"name\":\"Fresnel Exponent\",\"value\":6},{\"name\":\"Fresnel R\",\"value\":1},{\"name\":\"Fresnel G\",\"value\":1},{\"name\":\"Fresnel B\",\"value\":1},{\"name\":\"Emissive Active\",\"value\":0},{\"name\":\"Color Intensity\",\"value\":0.3},{\"name\":\"Emissive R\",\"value\":0.7212903265996136},{\"name\":\"Emissive G\",\"value\":0.6841467029775379},{\"name\":\"Emissive B\",\"value\":0.25474433168098076},{\"name\":\"Shininess\",\"value\":4},{\"name\":\"Specular Amount\",\"value\":0.5},{\"name\":\"Specular Model index\",\"value\":0},{\"name\":\"Specular Model\",\"value\":\"Blinn\"},{\"name\":\"Energy Conservation\",\"value\":0},{\"name\":\"Double Sided Material\",\"value\":0},{\"name\":\"Falloff Mode index\",\"value\":0},{\"name\":\"Falloff Mode\",\"value\":\"A\"},{\"name\":\"Colorize Texture\",\"value\":0},{\"name\":\"Diffuse Repeat X\",\"value\":1},{\"name\":\"Diffuse Repeat Y\",\"value\":1},{\"name\":\"Texture Offset X\",\"value\":0},{\"name\":\"Texture Offset Y\",\"value\":0},{\"name\":\"Specular Intensity\",\"value\":1},{\"name\":\"Normal Map Intensity\",\"value\":0.5},{\"name\":\"AO Intensity\",\"value\":1},{\"name\":\"AO UV Channel index\",\"value\":0},{\"name\":\"AO UV Channel\",\"value\":\"1\"},{\"name\":\"Emissive Intensity\",\"value\":1},{\"name\":\"Emissive Mask Intensity\",\"value\":1},{\"name\":\"Env Map Intensity\",\"value\":0.7},{\"name\":\"Env Map Blend index\",\"value\":0},{\"name\":\"Env Map Blend\",\"value\":\"Add\"},{\"name\":\"Env Mask Intensity\",\"value\":1},{\"name\":\"Alpha Mask Source index\",\"value\":0},{\"name\":\"Alpha Mask Source\",\"value\":\"Luminance\"},{\"name\":\"Discard Transparent Pixels\",\"value\":0}],\"portsOut\":[{\"name\":\"Trigger Out\",\"links\":[{\"portIn\":\"render\",\"portOut\":\"Trigger Out\",\"objIn\":\"31bjlib0h\",\"objOut\":\"01x2iaoi2\"}]}],\"objName\":\"Ops.Gl.Phong.PhongMaterial_v6\"},{\"id\":\"kccrr40lu\",\"uiAttribs\":{\"subPatch\":\"7ksf6rjbb\"},\"storage\":{},\"portsIn\":[{\"name\":\"Name\",\"value\":\"Text\"},{\"name\":\"Submesh\",\"value\":0}],\"portsOut\":[{\"name\":\"Geometry\",\"links\":[{\"portIn\":\"Geometry\",\"portOut\":\"Geometry\",\"objIn\":\"pjh2yrjtn\",\"objOut\":\"kccrr40lu\"}]},{\"name\":\"Found\",\"value\":1}],\"objName\":\"Ops.Gl.GLTF.GltfGeometry\"},{\"id\":\"pjh2yrjtn\",\"uiAttribs\":{\"subPatch\":\"7ksf6rjbb\"},\"storage\":{},\"portsOut\":[{\"name\":\"Result\",\"links\":[{\"portIn\":\"Geometry\",\"portOut\":\"Result\",\"objIn\":\"9flfpqdrm\",\"objOut\":\"pjh2yrjtn\"}]}],\"objName\":\"Ops.Graphics.Geometry.DivideGeometry\"},{\"id\":\"mkbkxiiau\",\"uiAttribs\":{\"subPatch\":\"7ksf6rjbb\"},\"storage\":{},\"portsIn\":[{\"name\":\"Distance\",\"value\":3},{\"name\":\"Absolute\",\"value\":0},{\"name\":\"add x\",\"value\":1},{\"name\":\"add y\",\"value\":1},{\"name\":\"add z\",\"value\":1},{\"name\":\"mul x\",\"value\":1},{\"name\":\"mul y\",\"value\":1},{\"name\":\"mul z\",\"value\":1},{\"name\":\"x\",\"value\":0},{\"name\":\"y\",\"value\":0},{\"name\":\"z\",\"value\":0}],\"portsOut\":[{\"name\":\"Next\",\"links\":[{\"portIn\":\"render\",\"portOut\":\"Next\",\"objIn\":\"9flfpqdrm\",\"objOut\":\"mkbkxiiau\"}]}],\"objName\":\"Ops.Gl.ShaderEffects.ExplodeDividedMesh_v2\"},{\"id\":\"9flfpqdrm\",\"uiAttribs\":{\"subPatch\":\"7ksf6rjbb\"},\"storage\":{},\"portsIn\":[{\"name\":\"Render Mesh\",\"value\":1},{\"name\":\"Add Vertex Numbers\",\"value\":1}],\"objName\":\"Ops.Gl.RenderGeometry_v2\"},{\"id\":\"31bjlib0h\",\"uiAttribs\":{\"subPatch\":\"7ksf6rjbb\"},\"storage\":{},\"portsIn\":[{\"name\":\"posX\",\"value\":0},{\"name\":\"scale\",\"value\":0.4},{\"name\":\"rotX\",\"value\":90},{\"name\":\"rotY\",\"value\":0}],\"portsOut\":[{\"name\":\"trigger\",\"links\":[{\"portIn\":\"Render\",\"portOut\":\"trigger\",\"objIn\":\"mkbkxiiau\",\"objOut\":\"31bjlib0h\"}]}],\"objName\":\"Ops.Gl.Matrix.TransformView\"},{\"id\":\"6e59qtb9c\",\"uiAttribs\":{\"subPatch\":\"7ksf6rjbb\"},\"storage\":{},\"portsOut\":[{\"name\":\"innerOut_gethk09mv\",\"title\":\"exe\",\"links\":[{\"portIn\":\"Trigger In\",\"portOut\":\"innerOut_gethk09mv\",\"objIn\":\"01x2iaoi2\",\"objOut\":\"6e59qtb9c\"},{\"portIn\":\"Render\",\"portOut\":\"innerOut_gethk09mv\",\"objIn\":\"entafgi3d\",\"objOut\":\"6e59qtb9c\"}]},{\"name\":\"innerOut_u73vfcsz7\",\"title\":\"Environment Map\",\"links\":[{\"portIn\":\"Environment Map\",\"portOut\":\"innerOut_u73vfcsz7\",\"objIn\":\"01x2iaoi2\",\"objOut\":\"6e59qtb9c\"}]},{\"name\":\"innerOut_5dp87zoyx\",\"title\":\"posY\",\"links\":[{\"portIn\":\"posY\",\"portOut\":\"innerOut_5dp87zoyx\",\"objIn\":\"31bjlib0h\",\"objOut\":\"6e59qtb9c\"}]},{\"name\":\"innerOut_rrulmt9am\",\"title\":\"posZ\",\"links\":[{\"portIn\":\"posZ\",\"portOut\":\"innerOut_rrulmt9am\",\"objIn\":\"31bjlib0h\",\"objOut\":\"6e59qtb9c\"}]},{\"name\":\"innerOut_y2lvmhocd\",\"title\":\"rotZ\",\"links\":[{\"portIn\":\"rotZ\",\"portOut\":\"innerOut_y2lvmhocd\",\"objIn\":\"31bjlib0h\",\"objOut\":\"6e59qtb9c\"}]},{\"name\":\"innerOut_4gkczcyw9\",\"title\":\"Size\",\"links\":[{\"portIn\":\"Size\",\"portOut\":\"innerOut_4gkczcyw9\",\"objIn\":\"mkbkxiiau\",\"objOut\":\"6e59qtb9c\"}]},{\"name\":\"innerOut_qqt14xeyr\",\"title\":\"A\",\"links\":[{\"portIn\":\"A\",\"portOut\":\"innerOut_qqt14xeyr\",\"objIn\":\"01x2iaoi2\",\"objOut\":\"6e59qtb9c\"}]}],\"objName\":\"Ops.Ui.SubPatchInput\"},{\"id\":\"5kmi0bt7j\",\"uiAttribs\":{\"subPatch\":\"7ksf6rjbb\"},\"storage\":{},\"objName\":\"Ops.Ui.SubPatchOutput\"},{\"id\":\"ytmrd51bs\",\"uiAttribs\":{\"subPatch\":\"7ksf6rjbb\"},\"storage\":{},\"portsOut\":[{\"name\":\"Was Triggered\",\"value\":1}],\"objName\":\"Ops.Trigger.TriggerOnce\"}]}",};
const port_gethk09mv=op.inTrigger("gethk09mv");
port_gethk09mv.setUiAttribs({title:"exe",});

const port_u73vfcsz7=op.inObject("u73vfcsz7");
port_u73vfcsz7.setUiAttribs({title:"Environment Map",display:"texture",objType:"texture",objType:"texture"});

const port_5dp87zoyx=op.inFloat("5dp87zoyx",0);
port_5dp87zoyx.setUiAttribs({title:"posY",});

const port_rrulmt9am=op.inFloat("rrulmt9am",0);
port_rrulmt9am.setUiAttribs({title:"posZ",});

const port_y2lvmhocd=op.inFloat("y2lvmhocd",0);
port_y2lvmhocd.setUiAttribs({title:"rotZ",});

const port_4gkczcyw9=op.inFloat("4gkczcyw9",0);
port_4gkczcyw9.setUiAttribs({title:"Size",});

const port_qqt14xeyr=op.inFloat("qqt14xeyr",1);
port_qqt14xeyr.setUiAttribs({title:"A",display:"range",});

op.initInnerPorts=function(addedOps)
{
  for(let i=0;i<addedOps.length;i++)
  {
    if(addedOps[i].innerInput)
    {
const innerOut_gethk09mv = addedOps[i].outTrigger("innerOut_gethk09mv");
innerOut_gethk09mv.setUiAttribs({title:"exe"});
port_gethk09mv.onTriggered = () => { innerOut_gethk09mv.trigger(); };

const innerOut_u73vfcsz7 = addedOps[i].outTexture("innerOut_u73vfcsz7");
innerOut_u73vfcsz7.setUiAttribs({title:"Environment Map"});
port_u73vfcsz7.on("change", (a,v) => { innerOut_u73vfcsz7.setRef(a); });

const innerOut_5dp87zoyx = addedOps[i].outNumber("innerOut_5dp87zoyx");
innerOut_5dp87zoyx.set(port_5dp87zoyx.get() );
innerOut_5dp87zoyx.setUiAttribs({title:"posY"});
port_5dp87zoyx.on("change", (a,v) => { innerOut_5dp87zoyx.set(a); });

const innerOut_rrulmt9am = addedOps[i].outNumber("innerOut_rrulmt9am");
innerOut_rrulmt9am.set(port_rrulmt9am.get() );
innerOut_rrulmt9am.setUiAttribs({title:"posZ"});
port_rrulmt9am.on("change", (a,v) => { innerOut_rrulmt9am.set(a); });

const innerOut_y2lvmhocd = addedOps[i].outNumber("innerOut_y2lvmhocd");
innerOut_y2lvmhocd.set(port_y2lvmhocd.get() );
innerOut_y2lvmhocd.setUiAttribs({title:"rotZ"});
port_y2lvmhocd.on("change", (a,v) => { innerOut_y2lvmhocd.set(a); });

const innerOut_4gkczcyw9 = addedOps[i].outNumber("innerOut_4gkczcyw9");
innerOut_4gkczcyw9.set(port_4gkczcyw9.get() );
innerOut_4gkczcyw9.setUiAttribs({title:"Size"});
port_4gkczcyw9.on("change", (a,v) => { innerOut_4gkczcyw9.set(a); });

const innerOut_qqt14xeyr = addedOps[i].outNumber("innerOut_qqt14xeyr");
innerOut_qqt14xeyr.set(port_qqt14xeyr.get() );
innerOut_qqt14xeyr.setUiAttribs({title:"A"});
port_qqt14xeyr.on("change", (a,v) => { innerOut_qqt14xeyr.set(a); });

    }
if(addedOps[i].innerOutput)
{
}
}
};

const patchId = "bp2sub_" + op.id;

new CABLES.SubPatchOp(op, { "subId": patchId });

initializeSubpatch();

function initializeSubpatch()
{
    if(!attachments || !attachments.subpatch_json) return;

    const p = JSON.parse(attachments.subpatch_json);

    CABLES.Patch.replaceOpIds(p,
        {
            "parentSubPatchId": patchId,
            "prefixHash": patchId,
            "oldIdAsRef": true,
            "doNotUnlinkLostLinks": true
        });

    for (let i = 0; i < p.ops.length; i++)
    {
        p.ops[i].uiAttribs.blueprintSubpatch2 = true;
    }

    op.loadDependencies(p, () =>
    {
        op.patch.deSerialize(p, { "opsCreated": op.initInnerPorts });
        if (CABLES.UI)gui.savedState.setSaved("blueprintloaded", patchId);
        op.patch.emitEvent("subpatchExpose", patchId);
        op.setStorage({ "blueprintVer": 2 });
        op.patch.emitEvent("subpatchExpose", patchId);
    });
}


};

Ops.Patch.PTONYIs.TextDate.prototype = new CABLES.Op();
CABLES.OPS["569c891f-fca7-4c07-826a-802f71530a90"]={f:Ops.Patch.PTONYIs.TextDate,objName:"Ops.Patch.PTONYIs.TextDate"};




// **************************************************************
// 
// Ops.Patch.PTONYIs.TextMinus5
// 
// **************************************************************

Ops.Patch.PTONYIs.TextMinus5 = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={"inc_gen_ports_js":"const port_rlqxv0o0l=op.inTrigger(\"rlqxv0o0l\");\nport_rlqxv0o0l.setUiAttribs({title:\"render\",});\n\nconst port_zbpm2zqjv=op.inObject(\"zbpm2zqjv\");\nport_zbpm2zqjv.setUiAttribs({title:\"Environment Map\",display:\"texture\",objType:\"texture\",objType:\"texture\"});\n\nconst port_ogc7ic65a=op.inFloat(\"ogc7ic65a\",0);\nport_ogc7ic65a.setUiAttribs({title:\"posZ\",});\n\nop.initInnerPorts=function(addedOps)\n{\n  for(let i=0;i<addedOps.length;i++)\n  {\n    if(addedOps[i].innerInput)\n    {\nconst innerOut_rlqxv0o0l = addedOps[i].outTrigger(\"innerOut_rlqxv0o0l\");\ninnerOut_rlqxv0o0l.setUiAttribs({title:\"render\"});\nport_rlqxv0o0l.onTriggered = () => { innerOut_rlqxv0o0l.trigger(); };\n\nconst innerOut_zbpm2zqjv = addedOps[i].outTexture(\"innerOut_zbpm2zqjv\");\ninnerOut_zbpm2zqjv.setUiAttribs({title:\"Environment Map\"});\nport_zbpm2zqjv.on(\"change\", (a,v) => { innerOut_zbpm2zqjv.setRef(a); });\n\nconst innerOut_ogc7ic65a = addedOps[i].outNumber(\"innerOut_ogc7ic65a\");\ninnerOut_ogc7ic65a.set(port_ogc7ic65a.get() );\ninnerOut_ogc7ic65a.setUiAttribs({title:\"posZ\"});\nport_ogc7ic65a.on(\"change\", (a,v) => { innerOut_ogc7ic65a.set(a); });\n\n    }\nif(addedOps[i].innerOutput)\n{\n}\n}\n};\n","subpatch_json":"{\"ops\":[{\"id\":\"k5rix40m9\",\"uiAttribs\":{\"subPatch\":\"js0e835d8\"},\"storage\":{},\"portsIn\":[{\"name\":\"R\",\"value\":0.4627450980392157},{\"name\":\"G\",\"value\":0},{\"name\":\"B\",\"value\":0.10980392156862756},{\"name\":\"A\",\"value\":1},{\"name\":\"Enable\",\"value\":0},{\"name\":\"Albedo\",\"value\":0.707},{\"name\":\"Roughness\",\"value\":0.835},{\"name\":\"Active\",\"value\":0},{\"name\":\"Fresnel Intensity\",\"value\":0.7},{\"name\":\"Fresnel Width\",\"value\":1},{\"name\":\"Fresnel Exponent\",\"value\":6},{\"name\":\"Fresnel R\",\"value\":1},{\"name\":\"Fresnel G\",\"value\":1},{\"name\":\"Fresnel B\",\"value\":1},{\"name\":\"Emissive Active\",\"value\":0},{\"name\":\"Color Intensity\",\"value\":0.3},{\"name\":\"Emissive R\",\"value\":0.5282214379295629},{\"name\":\"Emissive G\",\"value\":0.8476936933216106},{\"name\":\"Emissive B\",\"value\":0.9990146912254221},{\"name\":\"Shininess\",\"value\":4},{\"name\":\"Specular Amount\",\"value\":0.5},{\"name\":\"Specular Model index\",\"value\":0},{\"name\":\"Specular Model\",\"value\":\"Blinn\"},{\"name\":\"Energy Conservation\",\"value\":0},{\"name\":\"Double Sided Material\",\"value\":0},{\"name\":\"Falloff Mode index\",\"value\":0},{\"name\":\"Falloff Mode\",\"value\":\"A\"},{\"name\":\"Colorize Texture\",\"value\":0},{\"name\":\"Diffuse Repeat X\",\"value\":1},{\"name\":\"Diffuse Repeat Y\",\"value\":1},{\"name\":\"Texture Offset X\",\"value\":0},{\"name\":\"Texture Offset Y\",\"value\":0},{\"name\":\"Specular Intensity\",\"value\":1},{\"name\":\"Normal Map Intensity\",\"value\":0.5},{\"name\":\"AO Intensity\",\"value\":1},{\"name\":\"AO UV Channel index\",\"value\":0},{\"name\":\"AO UV Channel\",\"value\":\"1\"},{\"name\":\"Emissive Intensity\",\"value\":1},{\"name\":\"Emissive Mask Intensity\",\"value\":1},{\"name\":\"Env Map Intensity\",\"value\":0.7},{\"name\":\"Env Map Blend index\",\"value\":0},{\"name\":\"Env Map Blend\",\"value\":\"Add\"},{\"name\":\"Env Mask Intensity\",\"value\":1},{\"name\":\"Alpha Mask Source index\",\"value\":0},{\"name\":\"Alpha Mask Source\",\"value\":\"Luminance\"},{\"name\":\"Discard Transparent Pixels\",\"value\":0}],\"portsOut\":[{\"name\":\"Trigger Out\",\"links\":[{\"portIn\":\"Trigger In\",\"portOut\":\"Trigger Out\",\"objIn\":\"xu8oqcogx\",\"objOut\":\"k5rix40m9\"}]},{\"name\":\"Shader\",\"links\":[{\"portIn\":\"Shader\",\"portOut\":\"Shader\",\"objIn\":\"jbeegewzm\",\"objOut\":\"k5rix40m9\"}]}],\"objName\":\"Ops.Gl.Phong.PhongMaterial_v6\"},{\"id\":\"qg6j6k1u4\",\"uiAttribs\":{\"subPatch\":\"js0e835d8\"},\"storage\":{},\"portsIn\":[{\"name\":\"Material Name\",\"value\":\"Letter_White\"}],\"portsOut\":[{\"name\":\"Material\",\"links\":[{\"portIn\":\"Materials\",\"portOut\":\"Material\",\"objIn\":\"cb04qioqe\",\"objOut\":\"qg6j6k1u4\"}]}],\"objName\":\"Ops.Gl.GLTF.GltfSetMaterial\"},{\"id\":\"cb04qioqe\",\"uiAttribs\":{\"subPatch\":\"js0e835d8\"},\"storage\":{},\"portsIn\":[{\"name\":\"data\",\"value\":\"\"},{\"name\":\"glb File\",\"value\":\"/assets/6722a3ec67bbb32772043167/minus5_logo6.glb\",\"display\":\"file\"},{\"name\":\"Draw\",\"value\":1},{\"name\":\"Camera index\",\"value\":0},{\"name\":\"Camera\",\"value\":\"None\"},{\"name\":\"Animation\",\"value\":\"\"},{\"name\":\"Center index\",\"value\":1},{\"name\":\"Center\",\"value\":\"XYZ\"},{\"name\":\"Rescale\",\"value\":1},{\"name\":\"Rescale Size\",\"value\":2.5},{\"name\":\"Time\",\"value\":0},{\"name\":\"Sync to timeline\",\"value\":0},{\"name\":\"Loop\",\"value\":1},{\"name\":\"Normals Format index\",\"value\":0},{\"name\":\"Normals Format\",\"value\":\"XYZ\"},{\"name\":\"Vertices Format index\",\"value\":0},{\"name\":\"Vertices Format\",\"value\":\"XYZ\"},{\"name\":\"Calc Normals index\",\"value\":0},{\"name\":\"Calc Normals\",\"value\":\"Auto\"},{\"name\":\"Hide Nodes\",\"value\":0},{\"name\":\"Use Material Properties\",\"value\":0},{\"name\":\"Active\",\"value\":1}],\"portsOut\":[{\"name\":\"Generator\",\"value\":\"Khronos glTF Blender I/O v4.2.70\"},{\"name\":\"GLTF Version\",\"value\":2},{\"name\":\"Anim Length\",\"value\":0},{\"name\":\"Anim Time\",\"value\":0},{\"name\":\"Loading\",\"value\":false}],\"objName\":\"Ops.Gl.GLTF.GltfScene_v4\"},{\"id\":\"jbeegewzm\",\"uiAttribs\":{\"subPatch\":\"js0e835d8\"},\"storage\":{},\"portsIn\":[{\"name\":\"Material Name\",\"value\":\"Letter_Red\"}],\"portsOut\":[{\"name\":\"Material\",\"links\":[{\"portIn\":\"Materials\",\"portOut\":\"Material\",\"objIn\":\"cb04qioqe\",\"objOut\":\"jbeegewzm\"}]}],\"objName\":\"Ops.Gl.GLTF.GltfSetMaterial\"},{\"id\":\"xu8oqcogx\",\"uiAttribs\":{\"subPatch\":\"js0e835d8\"},\"storage\":{},\"portsIn\":[{\"name\":\"R\",\"value\":1},{\"name\":\"G\",\"value\":1},{\"name\":\"B\",\"value\":1},{\"name\":\"A\",\"value\":1},{\"name\":\"Enable\",\"value\":0},{\"name\":\"Albedo\",\"value\":0.707},{\"name\":\"Roughness\",\"value\":0.835},{\"name\":\"Active\",\"value\":0},{\"name\":\"Fresnel Intensity\",\"value\":0.7},{\"name\":\"Fresnel Width\",\"value\":1},{\"name\":\"Fresnel Exponent\",\"value\":6},{\"name\":\"Fresnel R\",\"value\":1},{\"name\":\"Fresnel G\",\"value\":1},{\"name\":\"Fresnel B\",\"value\":1},{\"name\":\"Emissive Active\",\"value\":0},{\"name\":\"Color Intensity\",\"value\":0.3},{\"name\":\"Emissive R\",\"value\":0.8072820106272394},{\"name\":\"Emissive G\",\"value\":0.14839177844102358},{\"name\":\"Emissive B\",\"value\":0.8939437938661141},{\"name\":\"Shininess\",\"value\":4},{\"name\":\"Specular Amount\",\"value\":0.5},{\"name\":\"Specular Model index\",\"value\":0},{\"name\":\"Specular Model\",\"value\":\"Blinn\"},{\"name\":\"Energy Conservation\",\"value\":0},{\"name\":\"Double Sided Material\",\"value\":0},{\"name\":\"Falloff Mode index\",\"value\":0},{\"name\":\"Falloff Mode\",\"value\":\"A\"},{\"name\":\"Colorize Texture\",\"value\":0},{\"name\":\"Diffuse Repeat X\",\"value\":1},{\"name\":\"Diffuse Repeat Y\",\"value\":1},{\"name\":\"Texture Offset X\",\"value\":0},{\"name\":\"Texture Offset Y\",\"value\":0},{\"name\":\"Specular Intensity\",\"value\":1},{\"name\":\"Normal Map Intensity\",\"value\":0.5},{\"name\":\"AO Intensity\",\"value\":1},{\"name\":\"AO UV Channel index\",\"value\":0},{\"name\":\"AO UV Channel\",\"value\":1},{\"name\":\"Emissive Intensity\",\"value\":1},{\"name\":\"Emissive Mask Intensity\",\"value\":1},{\"name\":\"Env Map Intensity\",\"value\":0.7},{\"name\":\"Env Map Blend index\",\"value\":0},{\"name\":\"Env Map Blend\",\"value\":\"Add\"},{\"name\":\"Env Mask Intensity\",\"value\":1},{\"name\":\"Alpha Mask Source index\",\"value\":0},{\"name\":\"Alpha Mask Source\",\"value\":\"Luminance\"},{\"name\":\"Discard Transparent Pixels\",\"value\":0}],\"portsOut\":[{\"name\":\"Trigger Out\",\"links\":[{\"portIn\":\"Render\",\"portOut\":\"Trigger Out\",\"objIn\":\"cb04qioqe\",\"objOut\":\"xu8oqcogx\"}]},{\"name\":\"Shader\",\"links\":[{\"portIn\":\"Shader\",\"portOut\":\"Shader\",\"objIn\":\"qg6j6k1u4\",\"objOut\":\"xu8oqcogx\"}]}],\"objName\":\"Ops.Gl.Phong.PhongMaterial_v6\"},{\"id\":\"w0bnsm9h7\",\"uiAttribs\":{\"subPatch\":\"js0e835d8\"},\"storage\":{},\"portsIn\":[{\"name\":\"posX\",\"value\":0},{\"name\":\"posY\",\"value\":0},{\"name\":\"scale\",\"value\":0.8},{\"name\":\"rotX\",\"value\":90},{\"name\":\"rotY\",\"value\":0},{\"name\":\"rotZ\",\"value\":0}],\"portsOut\":[{\"name\":\"trigger\",\"links\":[{\"portIn\":\"Trigger In\",\"portOut\":\"trigger\",\"objIn\":\"k5rix40m9\",\"objOut\":\"w0bnsm9h7\"}]}],\"objName\":\"Ops.Gl.Matrix.TransformView\"},{\"id\":\"xlib85tjv\",\"uiAttribs\":{\"subPatch\":\"js0e835d8\"},\"storage\":{},\"portsOut\":[{\"name\":\"innerOut_rlqxv0o0l\",\"title\":\"render\",\"links\":[{\"portIn\":\"render\",\"portOut\":\"innerOut_rlqxv0o0l\",\"objIn\":\"w0bnsm9h7\",\"objOut\":\"xlib85tjv\"}]},{\"name\":\"innerOut_zbpm2zqjv\",\"title\":\"Environment Map\",\"links\":[{\"portIn\":\"Environment Map\",\"portOut\":\"innerOut_zbpm2zqjv\",\"objIn\":\"k5rix40m9\",\"objOut\":\"xlib85tjv\"},{\"portIn\":\"Environment Map\",\"portOut\":\"innerOut_zbpm2zqjv\",\"objIn\":\"xu8oqcogx\",\"objOut\":\"xlib85tjv\"}]},{\"name\":\"innerOut_ogc7ic65a\",\"title\":\"posZ\",\"links\":[{\"portIn\":\"posZ\",\"portOut\":\"innerOut_ogc7ic65a\",\"objIn\":\"w0bnsm9h7\",\"objOut\":\"xlib85tjv\"}]}],\"objName\":\"Ops.Ui.SubPatchInput\"},{\"id\":\"upz6ukaxb\",\"uiAttribs\":{\"subPatch\":\"js0e835d8\"},\"storage\":{},\"objName\":\"Ops.Ui.SubPatchOutput\"}]}",};
const port_rlqxv0o0l=op.inTrigger("rlqxv0o0l");
port_rlqxv0o0l.setUiAttribs({title:"render",});

const port_zbpm2zqjv=op.inObject("zbpm2zqjv");
port_zbpm2zqjv.setUiAttribs({title:"Environment Map",display:"texture",objType:"texture",objType:"texture"});

const port_ogc7ic65a=op.inFloat("ogc7ic65a",0);
port_ogc7ic65a.setUiAttribs({title:"posZ",});

op.initInnerPorts=function(addedOps)
{
  for(let i=0;i<addedOps.length;i++)
  {
    if(addedOps[i].innerInput)
    {
const innerOut_rlqxv0o0l = addedOps[i].outTrigger("innerOut_rlqxv0o0l");
innerOut_rlqxv0o0l.setUiAttribs({title:"render"});
port_rlqxv0o0l.onTriggered = () => { innerOut_rlqxv0o0l.trigger(); };

const innerOut_zbpm2zqjv = addedOps[i].outTexture("innerOut_zbpm2zqjv");
innerOut_zbpm2zqjv.setUiAttribs({title:"Environment Map"});
port_zbpm2zqjv.on("change", (a,v) => { innerOut_zbpm2zqjv.setRef(a); });

const innerOut_ogc7ic65a = addedOps[i].outNumber("innerOut_ogc7ic65a");
innerOut_ogc7ic65a.set(port_ogc7ic65a.get() );
innerOut_ogc7ic65a.setUiAttribs({title:"posZ"});
port_ogc7ic65a.on("change", (a,v) => { innerOut_ogc7ic65a.set(a); });

    }
if(addedOps[i].innerOutput)
{
}
}
};

const patchId = "bp2sub_" + op.id;

new CABLES.SubPatchOp(op, { "subId": patchId });

initializeSubpatch();

function initializeSubpatch()
{
    if(!attachments || !attachments.subpatch_json) return;

    const p = JSON.parse(attachments.subpatch_json);

    CABLES.Patch.replaceOpIds(p,
        {
            "parentSubPatchId": patchId,
            "prefixHash": patchId,
            "oldIdAsRef": true,
            "doNotUnlinkLostLinks": true
        });

    for (let i = 0; i < p.ops.length; i++)
    {
        p.ops[i].uiAttribs.blueprintSubpatch2 = true;
    }

    op.loadDependencies(p, () =>
    {
        op.patch.deSerialize(p, { "opsCreated": op.initInnerPorts });
        if (CABLES.UI)gui.savedState.setSaved("blueprintloaded", patchId);
        op.patch.emitEvent("subpatchExpose", patchId);
        op.setStorage({ "blueprintVer": 2 });
        op.patch.emitEvent("subpatchExpose", patchId);
    });
}


};

Ops.Patch.PTONYIs.TextMinus5.prototype = new CABLES.Op();
CABLES.OPS["51b51964-6e1a-4077-852b-7b4ee1fdd1a4"]={f:Ops.Patch.PTONYIs.TextMinus5,objName:"Ops.Patch.PTONYIs.TextMinus5"};




// **************************************************************
// 
// Ops.Patch.PTONYIs.TextInvites
// 
// **************************************************************

Ops.Patch.PTONYIs.TextInvites = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={"inc_gen_ports_js":"const port_57n60p3j7=op.inTrigger(\"57n60p3j7\");\nport_57n60p3j7.setUiAttribs({title:\"render\",});\n\nconst port_usq9qv6cb=op.inObject(\"usq9qv6cb\");\nport_usq9qv6cb.setUiAttribs({title:\"Environment Map\",display:\"texture\",objType:\"texture\",objType:\"texture\"});\n\nconst port_i16l32pnx=op.inFloat(\"i16l32pnx\",0);\nport_i16l32pnx.setUiAttribs({title:\"posY\",});\n\nconst port_w8wwdrfxs=op.inFloat(\"w8wwdrfxs\",0);\nport_w8wwdrfxs.setUiAttribs({title:\"posZ\",});\n\nop.initInnerPorts=function(addedOps)\n{\n  for(let i=0;i<addedOps.length;i++)\n  {\n    if(addedOps[i].innerInput)\n    {\nconst innerOut_57n60p3j7 = addedOps[i].outTrigger(\"innerOut_57n60p3j7\");\ninnerOut_57n60p3j7.setUiAttribs({title:\"render\"});\nport_57n60p3j7.onTriggered = () => { innerOut_57n60p3j7.trigger(); };\n\nconst innerOut_usq9qv6cb = addedOps[i].outTexture(\"innerOut_usq9qv6cb\");\ninnerOut_usq9qv6cb.setUiAttribs({title:\"Environment Map\"});\nport_usq9qv6cb.on(\"change\", (a,v) => { innerOut_usq9qv6cb.setRef(a); });\n\nconst innerOut_i16l32pnx = addedOps[i].outNumber(\"innerOut_i16l32pnx\");\ninnerOut_i16l32pnx.set(port_i16l32pnx.get() );\ninnerOut_i16l32pnx.setUiAttribs({title:\"posY\"});\nport_i16l32pnx.on(\"change\", (a,v) => { innerOut_i16l32pnx.set(a); });\n\nconst innerOut_w8wwdrfxs = addedOps[i].outNumber(\"innerOut_w8wwdrfxs\");\ninnerOut_w8wwdrfxs.set(port_w8wwdrfxs.get() );\ninnerOut_w8wwdrfxs.setUiAttribs({title:\"posZ\"});\nport_w8wwdrfxs.on(\"change\", (a,v) => { innerOut_w8wwdrfxs.set(a); });\n\n    }\nif(addedOps[i].innerOutput)\n{\n}\n}\n};\n","subpatch_json":"{\"ops\":[{\"id\":\"s2yj9rhpj\",\"uiAttribs\":{\"subPatch\":\"8kf6e4jiv\"},\"storage\":{},\"portsIn\":[{\"name\":\"posX\",\"value\":0},{\"name\":\"scale\",\"value\":0.85},{\"name\":\"rotX\",\"value\":90},{\"name\":\"rotY\",\"value\":0},{\"name\":\"rotZ\",\"value\":0}],\"portsOut\":[{\"name\":\"trigger\",\"links\":[{\"portIn\":\"Trigger In\",\"portOut\":\"trigger\",\"objIn\":\"zaotjfzai\",\"objOut\":\"s2yj9rhpj\"}]}],\"objName\":\"Ops.Gl.Matrix.TransformView\"},{\"id\":\"zaotjfzai\",\"uiAttribs\":{\"subPatch\":\"8kf6e4jiv\"},\"storage\":{},\"portsIn\":[{\"name\":\"R\",\"value\":1},{\"name\":\"G\",\"value\":1},{\"name\":\"B\",\"value\":1},{\"name\":\"A\",\"value\":1},{\"name\":\"Enable\",\"value\":0},{\"name\":\"Albedo\",\"value\":0.707},{\"name\":\"Roughness\",\"value\":0.835},{\"name\":\"Active\",\"value\":0},{\"name\":\"Fresnel Intensity\",\"value\":0.7},{\"name\":\"Fresnel Width\",\"value\":1},{\"name\":\"Fresnel Exponent\",\"value\":6},{\"name\":\"Fresnel R\",\"value\":1},{\"name\":\"Fresnel G\",\"value\":1},{\"name\":\"Fresnel B\",\"value\":1},{\"name\":\"Emissive Active\",\"value\":0},{\"name\":\"Color Intensity\",\"value\":0.3},{\"name\":\"Emissive R\",\"value\":0.2457495156374654},{\"name\":\"Emissive G\",\"value\":0.8348990233742559},{\"name\":\"Emissive B\",\"value\":0.24610864241616714},{\"name\":\"Shininess\",\"value\":4},{\"name\":\"Specular Amount\",\"value\":0.5},{\"name\":\"Specular Model index\",\"value\":0},{\"name\":\"Specular Model\",\"value\":\"Blinn\"},{\"name\":\"Energy Conservation\",\"value\":0},{\"name\":\"Double Sided Material\",\"value\":0},{\"name\":\"Falloff Mode index\",\"value\":0},{\"name\":\"Falloff Mode\",\"value\":\"A\"},{\"name\":\"Colorize Texture\",\"value\":0},{\"name\":\"Diffuse Repeat X\",\"value\":1},{\"name\":\"Diffuse Repeat Y\",\"value\":1},{\"name\":\"Texture Offset X\",\"value\":0},{\"name\":\"Texture Offset Y\",\"value\":0},{\"name\":\"Specular Intensity\",\"value\":1},{\"name\":\"Normal Map Intensity\",\"value\":0.5},{\"name\":\"AO Intensity\",\"value\":1},{\"name\":\"AO UV Channel index\",\"value\":0},{\"name\":\"AO UV Channel\",\"value\":1},{\"name\":\"Emissive Intensity\",\"value\":1},{\"name\":\"Emissive Mask Intensity\",\"value\":1},{\"name\":\"Env Map Intensity\",\"value\":0.7},{\"name\":\"Env Map Blend index\",\"value\":0},{\"name\":\"Env Map Blend\",\"value\":\"Add\"},{\"name\":\"Env Mask Intensity\",\"value\":1},{\"name\":\"Alpha Mask Source index\",\"value\":0},{\"name\":\"Alpha Mask Source\",\"value\":\"Luminance\"},{\"name\":\"Discard Transparent Pixels\",\"value\":0}],\"portsOut\":[{\"name\":\"Trigger Out\",\"links\":[{\"portIn\":\"Render\",\"portOut\":\"Trigger Out\",\"objIn\":\"7bu3v8fuw\",\"objOut\":\"zaotjfzai\"}]}],\"objName\":\"Ops.Gl.Phong.PhongMaterial_v6\"},{\"id\":\"7bu3v8fuw\",\"uiAttribs\":{\"subPatch\":\"8kf6e4jiv\"},\"storage\":{},\"portsIn\":[{\"name\":\"data\",\"value\":\"\"},{\"name\":\"glb File\",\"value\":\"/assets/6722a3ec67bbb32772043167/xmas_invites.glb\",\"display\":\"file\"},{\"name\":\"Draw\",\"value\":1},{\"name\":\"Camera index\",\"value\":0},{\"name\":\"Camera\",\"value\":\"None\"},{\"name\":\"Animation\",\"value\":\"\"},{\"name\":\"Center index\",\"value\":1},{\"name\":\"Center\",\"value\":\"XYZ\"},{\"name\":\"Rescale\",\"value\":1},{\"name\":\"Rescale Size\",\"value\":2.5},{\"name\":\"Time\",\"value\":0},{\"name\":\"Sync to timeline\",\"value\":0},{\"name\":\"Loop\",\"value\":1},{\"name\":\"Normals Format index\",\"value\":0},{\"name\":\"Normals Format\",\"value\":\"XYZ\"},{\"name\":\"Vertices Format index\",\"value\":0},{\"name\":\"Vertices Format\",\"value\":\"XYZ\"},{\"name\":\"Calc Normals index\",\"value\":0},{\"name\":\"Calc Normals\",\"value\":\"Auto\"},{\"name\":\"Hide Nodes\",\"value\":0},{\"name\":\"Use Material Properties\",\"value\":0},{\"name\":\"Active\",\"value\":1}],\"portsOut\":[{\"name\":\"Generator\",\"value\":\"Khronos glTF Blender I/O v4.2.70\"},{\"name\":\"GLTF Version\",\"value\":2},{\"name\":\"Anim Length\",\"value\":0},{\"name\":\"Anim Time\",\"value\":0},{\"name\":\"Loading\",\"value\":false}],\"objName\":\"Ops.Gl.GLTF.GltfScene_v4\"},{\"id\":\"zr3mry1lb\",\"uiAttribs\":{\"subPatch\":\"8kf6e4jiv\"},\"storage\":{},\"portsOut\":[{\"name\":\"innerOut_57n60p3j7\",\"title\":\"render\",\"links\":[{\"portIn\":\"render\",\"portOut\":\"innerOut_57n60p3j7\",\"objIn\":\"s2yj9rhpj\",\"objOut\":\"zr3mry1lb\"}]},{\"name\":\"innerOut_usq9qv6cb\",\"title\":\"Environment Map\",\"links\":[{\"portIn\":\"Environment Map\",\"portOut\":\"innerOut_usq9qv6cb\",\"objIn\":\"zaotjfzai\",\"objOut\":\"zr3mry1lb\"}]},{\"name\":\"innerOut_i16l32pnx\",\"title\":\"posY\",\"links\":[{\"portIn\":\"posY\",\"portOut\":\"innerOut_i16l32pnx\",\"objIn\":\"s2yj9rhpj\",\"objOut\":\"zr3mry1lb\"}]},{\"name\":\"innerOut_w8wwdrfxs\",\"title\":\"posZ\",\"links\":[{\"portIn\":\"posZ\",\"portOut\":\"innerOut_w8wwdrfxs\",\"objIn\":\"s2yj9rhpj\",\"objOut\":\"zr3mry1lb\"}]}],\"objName\":\"Ops.Ui.SubPatchInput\"},{\"id\":\"160ko0xpw\",\"uiAttribs\":{\"subPatch\":\"8kf6e4jiv\"},\"storage\":{},\"objName\":\"Ops.Ui.SubPatchOutput\"}]}",};
const port_57n60p3j7=op.inTrigger("57n60p3j7");
port_57n60p3j7.setUiAttribs({title:"render",});

const port_usq9qv6cb=op.inObject("usq9qv6cb");
port_usq9qv6cb.setUiAttribs({title:"Environment Map",display:"texture",objType:"texture",objType:"texture"});

const port_i16l32pnx=op.inFloat("i16l32pnx",0);
port_i16l32pnx.setUiAttribs({title:"posY",});

const port_w8wwdrfxs=op.inFloat("w8wwdrfxs",0);
port_w8wwdrfxs.setUiAttribs({title:"posZ",});

op.initInnerPorts=function(addedOps)
{
  for(let i=0;i<addedOps.length;i++)
  {
    if(addedOps[i].innerInput)
    {
const innerOut_57n60p3j7 = addedOps[i].outTrigger("innerOut_57n60p3j7");
innerOut_57n60p3j7.setUiAttribs({title:"render"});
port_57n60p3j7.onTriggered = () => { innerOut_57n60p3j7.trigger(); };

const innerOut_usq9qv6cb = addedOps[i].outTexture("innerOut_usq9qv6cb");
innerOut_usq9qv6cb.setUiAttribs({title:"Environment Map"});
port_usq9qv6cb.on("change", (a,v) => { innerOut_usq9qv6cb.setRef(a); });

const innerOut_i16l32pnx = addedOps[i].outNumber("innerOut_i16l32pnx");
innerOut_i16l32pnx.set(port_i16l32pnx.get() );
innerOut_i16l32pnx.setUiAttribs({title:"posY"});
port_i16l32pnx.on("change", (a,v) => { innerOut_i16l32pnx.set(a); });

const innerOut_w8wwdrfxs = addedOps[i].outNumber("innerOut_w8wwdrfxs");
innerOut_w8wwdrfxs.set(port_w8wwdrfxs.get() );
innerOut_w8wwdrfxs.setUiAttribs({title:"posZ"});
port_w8wwdrfxs.on("change", (a,v) => { innerOut_w8wwdrfxs.set(a); });

    }
if(addedOps[i].innerOutput)
{
}
}
};

const patchId = "bp2sub_" + op.id;

new CABLES.SubPatchOp(op, { "subId": patchId });

initializeSubpatch();

function initializeSubpatch()
{
    if(!attachments || !attachments.subpatch_json) return;

    const p = JSON.parse(attachments.subpatch_json);

    CABLES.Patch.replaceOpIds(p,
        {
            "parentSubPatchId": patchId,
            "prefixHash": patchId,
            "oldIdAsRef": true,
            "doNotUnlinkLostLinks": true
        });

    for (let i = 0; i < p.ops.length; i++)
    {
        p.ops[i].uiAttribs.blueprintSubpatch2 = true;
    }

    op.loadDependencies(p, () =>
    {
        op.patch.deSerialize(p, { "opsCreated": op.initInnerPorts });
        if (CABLES.UI)gui.savedState.setSaved("blueprintloaded", patchId);
        op.patch.emitEvent("subpatchExpose", patchId);
        op.setStorage({ "blueprintVer": 2 });
        op.patch.emitEvent("subpatchExpose", patchId);
    });
}


};

Ops.Patch.PTONYIs.TextInvites.prototype = new CABLES.Op();
CABLES.OPS["95b90aeb-173b-4c3a-aa08-5e62e90ea74e"]={f:Ops.Patch.PTONYIs.TextInvites,objName:"Ops.Patch.PTONYIs.TextInvites"};




// **************************************************************
// 
// Ops.Patch.PTONYIs.TextYou
// 
// **************************************************************

Ops.Patch.PTONYIs.TextYou = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={"inc_gen_ports_js":"const port_pv7krqr0j=op.inTrigger(\"pv7krqr0j\");\nport_pv7krqr0j.setUiAttribs({title:\"render\",});\n\nconst port_pd5jyastz=op.inObject(\"pd5jyastz\");\nport_pd5jyastz.setUiAttribs({title:\"Environment Map\",display:\"texture\",objType:\"texture\",objType:\"texture\"});\n\nconst port_2f7nsov8e=op.inFloat(\"2f7nsov8e\",0);\nport_2f7nsov8e.setUiAttribs({title:\"posY\",});\n\nconst port_whvfgk3ik=op.inFloat(\"whvfgk3ik\",0);\nport_whvfgk3ik.setUiAttribs({title:\"posZ\",});\n\nop.initInnerPorts=function(addedOps)\n{\n  for(let i=0;i<addedOps.length;i++)\n  {\n    if(addedOps[i].innerInput)\n    {\nconst innerOut_pv7krqr0j = addedOps[i].outTrigger(\"innerOut_pv7krqr0j\");\ninnerOut_pv7krqr0j.setUiAttribs({title:\"render\"});\nport_pv7krqr0j.onTriggered = () => { innerOut_pv7krqr0j.trigger(); };\n\nconst innerOut_pd5jyastz = addedOps[i].outTexture(\"innerOut_pd5jyastz\");\ninnerOut_pd5jyastz.setUiAttribs({title:\"Environment Map\"});\nport_pd5jyastz.on(\"change\", (a,v) => { innerOut_pd5jyastz.setRef(a); });\n\nconst innerOut_2f7nsov8e = addedOps[i].outNumber(\"innerOut_2f7nsov8e\");\ninnerOut_2f7nsov8e.set(port_2f7nsov8e.get() );\ninnerOut_2f7nsov8e.setUiAttribs({title:\"posY\"});\nport_2f7nsov8e.on(\"change\", (a,v) => { innerOut_2f7nsov8e.set(a); });\n\nconst innerOut_whvfgk3ik = addedOps[i].outNumber(\"innerOut_whvfgk3ik\");\ninnerOut_whvfgk3ik.set(port_whvfgk3ik.get() );\ninnerOut_whvfgk3ik.setUiAttribs({title:\"posZ\"});\nport_whvfgk3ik.on(\"change\", (a,v) => { innerOut_whvfgk3ik.set(a); });\n\n    }\nif(addedOps[i].innerOutput)\n{\n}\n}\n};\n","subpatch_json":"{\"ops\":[{\"id\":\"gmf1az13j\",\"uiAttribs\":{\"subPatch\":\"l74jqci35\"},\"storage\":{},\"portsIn\":[{\"name\":\"posX\",\"value\":0},{\"name\":\"scale\",\"value\":0.7},{\"name\":\"rotX\",\"value\":90},{\"name\":\"rotY\",\"value\":0},{\"name\":\"rotZ\",\"value\":0}],\"portsOut\":[{\"name\":\"trigger\",\"links\":[{\"portIn\":\"Trigger In\",\"portOut\":\"trigger\",\"objIn\":\"qx2eckbzy\",\"objOut\":\"gmf1az13j\"}]}],\"objName\":\"Ops.Gl.Matrix.TransformView\"},{\"id\":\"qx2eckbzy\",\"uiAttribs\":{\"subPatch\":\"l74jqci35\"},\"storage\":{},\"portsIn\":[{\"name\":\"R\",\"value\":1},{\"name\":\"G\",\"value\":1},{\"name\":\"B\",\"value\":1},{\"name\":\"A\",\"value\":1},{\"name\":\"Enable\",\"value\":0},{\"name\":\"Albedo\",\"value\":0.707},{\"name\":\"Roughness\",\"value\":0.835},{\"name\":\"Active\",\"value\":0},{\"name\":\"Fresnel Intensity\",\"value\":0.7},{\"name\":\"Fresnel Width\",\"value\":1},{\"name\":\"Fresnel Exponent\",\"value\":6},{\"name\":\"Fresnel R\",\"value\":1},{\"name\":\"Fresnel G\",\"value\":1},{\"name\":\"Fresnel B\",\"value\":1},{\"name\":\"Emissive Active\",\"value\":0},{\"name\":\"Color Intensity\",\"value\":0.3},{\"name\":\"Emissive R\",\"value\":0.9630550327328549},{\"name\":\"Emissive G\",\"value\":0.3524793193482392},{\"name\":\"Emissive B\",\"value\":0.9750277200617958},{\"name\":\"Shininess\",\"value\":4},{\"name\":\"Specular Amount\",\"value\":0.5},{\"name\":\"Specular Model index\",\"value\":0},{\"name\":\"Specular Model\",\"value\":\"Blinn\"},{\"name\":\"Energy Conservation\",\"value\":0},{\"name\":\"Double Sided Material\",\"value\":0},{\"name\":\"Falloff Mode index\",\"value\":0},{\"name\":\"Falloff Mode\",\"value\":\"A\"},{\"name\":\"Colorize Texture\",\"value\":0},{\"name\":\"Diffuse Repeat X\",\"value\":1},{\"name\":\"Diffuse Repeat Y\",\"value\":1},{\"name\":\"Texture Offset X\",\"value\":0},{\"name\":\"Texture Offset Y\",\"value\":0},{\"name\":\"Specular Intensity\",\"value\":1},{\"name\":\"Normal Map Intensity\",\"value\":0.5},{\"name\":\"AO Intensity\",\"value\":1},{\"name\":\"AO UV Channel index\",\"value\":0},{\"name\":\"AO UV Channel\",\"value\":1},{\"name\":\"Emissive Intensity\",\"value\":1},{\"name\":\"Emissive Mask Intensity\",\"value\":1},{\"name\":\"Env Map Intensity\",\"value\":0.7},{\"name\":\"Env Map Blend index\",\"value\":0},{\"name\":\"Env Map Blend\",\"value\":\"Add\"},{\"name\":\"Env Mask Intensity\",\"value\":1},{\"name\":\"Alpha Mask Source index\",\"value\":0},{\"name\":\"Alpha Mask Source\",\"value\":\"Luminance\"},{\"name\":\"Discard Transparent Pixels\",\"value\":0}],\"portsOut\":[{\"name\":\"Trigger Out\",\"links\":[{\"portIn\":\"Render\",\"portOut\":\"Trigger Out\",\"objIn\":\"zimeeprax\",\"objOut\":\"qx2eckbzy\"}]}],\"objName\":\"Ops.Gl.Phong.PhongMaterial_v6\"},{\"id\":\"zimeeprax\",\"uiAttribs\":{\"subPatch\":\"l74jqci35\"},\"storage\":{},\"portsIn\":[{\"name\":\"data\",\"value\":\"\"},{\"name\":\"glb File\",\"value\":\"/assets/6722a3ec67bbb32772043167/xmas_you.glb\",\"display\":\"file\"},{\"name\":\"Draw\",\"value\":1},{\"name\":\"Camera index\",\"value\":0},{\"name\":\"Camera\",\"value\":\"None\"},{\"name\":\"Animation\",\"value\":\"\"},{\"name\":\"Center index\",\"value\":1},{\"name\":\"Center\",\"value\":\"XYZ\"},{\"name\":\"Rescale\",\"value\":1},{\"name\":\"Rescale Size\",\"value\":2.5},{\"name\":\"Time\",\"value\":0},{\"name\":\"Sync to timeline\",\"value\":0},{\"name\":\"Loop\",\"value\":1},{\"name\":\"Normals Format index\",\"value\":0},{\"name\":\"Normals Format\",\"value\":\"XYZ\"},{\"name\":\"Vertices Format index\",\"value\":0},{\"name\":\"Vertices Format\",\"value\":\"XYZ\"},{\"name\":\"Calc Normals index\",\"value\":0},{\"name\":\"Calc Normals\",\"value\":\"Auto\"},{\"name\":\"Hide Nodes\",\"value\":0},{\"name\":\"Use Material Properties\",\"value\":0},{\"name\":\"Active\",\"value\":1}],\"portsOut\":[{\"name\":\"Generator\",\"value\":\"Khronos glTF Blender I/O v4.2.70\"},{\"name\":\"GLTF Version\",\"value\":2},{\"name\":\"Anim Length\",\"value\":0},{\"name\":\"Anim Time\",\"value\":0},{\"name\":\"Loading\",\"value\":false}],\"objName\":\"Ops.Gl.GLTF.GltfScene_v4\"},{\"id\":\"uee2mnm1p\",\"uiAttribs\":{\"subPatch\":\"l74jqci35\"},\"storage\":{},\"portsOut\":[{\"name\":\"innerOut_pv7krqr0j\",\"title\":\"render\",\"links\":[{\"portIn\":\"render\",\"portOut\":\"innerOut_pv7krqr0j\",\"objIn\":\"gmf1az13j\",\"objOut\":\"uee2mnm1p\"}]},{\"name\":\"innerOut_pd5jyastz\",\"title\":\"Environment Map\",\"links\":[{\"portIn\":\"Environment Map\",\"portOut\":\"innerOut_pd5jyastz\",\"objIn\":\"qx2eckbzy\",\"objOut\":\"uee2mnm1p\"}]},{\"name\":\"innerOut_2f7nsov8e\",\"title\":\"posY\",\"links\":[{\"portIn\":\"posY\",\"portOut\":\"innerOut_2f7nsov8e\",\"objIn\":\"gmf1az13j\",\"objOut\":\"uee2mnm1p\"}]},{\"name\":\"innerOut_whvfgk3ik\",\"title\":\"posZ\",\"links\":[{\"portIn\":\"posZ\",\"portOut\":\"innerOut_whvfgk3ik\",\"objIn\":\"gmf1az13j\",\"objOut\":\"uee2mnm1p\"}]}],\"objName\":\"Ops.Ui.SubPatchInput\"},{\"id\":\"j7cim0279\",\"uiAttribs\":{\"subPatch\":\"l74jqci35\"},\"storage\":{},\"objName\":\"Ops.Ui.SubPatchOutput\"}]}",};
const port_pv7krqr0j=op.inTrigger("pv7krqr0j");
port_pv7krqr0j.setUiAttribs({title:"render",});

const port_pd5jyastz=op.inObject("pd5jyastz");
port_pd5jyastz.setUiAttribs({title:"Environment Map",display:"texture",objType:"texture",objType:"texture"});

const port_2f7nsov8e=op.inFloat("2f7nsov8e",0);
port_2f7nsov8e.setUiAttribs({title:"posY",});

const port_whvfgk3ik=op.inFloat("whvfgk3ik",0);
port_whvfgk3ik.setUiAttribs({title:"posZ",});

op.initInnerPorts=function(addedOps)
{
  for(let i=0;i<addedOps.length;i++)
  {
    if(addedOps[i].innerInput)
    {
const innerOut_pv7krqr0j = addedOps[i].outTrigger("innerOut_pv7krqr0j");
innerOut_pv7krqr0j.setUiAttribs({title:"render"});
port_pv7krqr0j.onTriggered = () => { innerOut_pv7krqr0j.trigger(); };

const innerOut_pd5jyastz = addedOps[i].outTexture("innerOut_pd5jyastz");
innerOut_pd5jyastz.setUiAttribs({title:"Environment Map"});
port_pd5jyastz.on("change", (a,v) => { innerOut_pd5jyastz.setRef(a); });

const innerOut_2f7nsov8e = addedOps[i].outNumber("innerOut_2f7nsov8e");
innerOut_2f7nsov8e.set(port_2f7nsov8e.get() );
innerOut_2f7nsov8e.setUiAttribs({title:"posY"});
port_2f7nsov8e.on("change", (a,v) => { innerOut_2f7nsov8e.set(a); });

const innerOut_whvfgk3ik = addedOps[i].outNumber("innerOut_whvfgk3ik");
innerOut_whvfgk3ik.set(port_whvfgk3ik.get() );
innerOut_whvfgk3ik.setUiAttribs({title:"posZ"});
port_whvfgk3ik.on("change", (a,v) => { innerOut_whvfgk3ik.set(a); });

    }
if(addedOps[i].innerOutput)
{
}
}
};

const patchId = "bp2sub_" + op.id;

new CABLES.SubPatchOp(op, { "subId": patchId });

initializeSubpatch();

function initializeSubpatch()
{
    if(!attachments || !attachments.subpatch_json) return;

    const p = JSON.parse(attachments.subpatch_json);

    CABLES.Patch.replaceOpIds(p,
        {
            "parentSubPatchId": patchId,
            "prefixHash": patchId,
            "oldIdAsRef": true,
            "doNotUnlinkLostLinks": true
        });

    for (let i = 0; i < p.ops.length; i++)
    {
        p.ops[i].uiAttribs.blueprintSubpatch2 = true;
    }

    op.loadDependencies(p, () =>
    {
        op.patch.deSerialize(p, { "opsCreated": op.initInnerPorts });
        if (CABLES.UI)gui.savedState.setSaved("blueprintloaded", patchId);
        op.patch.emitEvent("subpatchExpose", patchId);
        op.setStorage({ "blueprintVer": 2 });
        op.patch.emitEvent("subpatchExpose", patchId);
    });
}


};

Ops.Patch.PTONYIs.TextYou.prototype = new CABLES.Op();
CABLES.OPS["ca65337c-0ee6-4a45-96d7-9f3f8044bb29"]={f:Ops.Patch.PTONYIs.TextYou,objName:"Ops.Patch.PTONYIs.TextYou"};




// **************************************************************
// 
// Ops.Patch.PTONYIs.TextXMasParty
// 
// **************************************************************

Ops.Patch.PTONYIs.TextXMasParty = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={"inc_gen_ports_js":"const port_hszvjg9cr=op.inTrigger(\"hszvjg9cr\");\nport_hszvjg9cr.setUiAttribs({title:\"render\",});\n\nconst port_a8h9qdte9=op.inObject(\"a8h9qdte9\");\nport_a8h9qdte9.setUiAttribs({title:\"Environment Map\",display:\"texture\",objType:\"texture\",objType:\"texture\"});\n\nconst port_p9pouj2cr=op.inFloat(\"p9pouj2cr\",0);\nport_p9pouj2cr.setUiAttribs({title:\"posZ\",});\n\nop.initInnerPorts=function(addedOps)\n{\n  for(let i=0;i<addedOps.length;i++)\n  {\n    if(addedOps[i].innerInput)\n    {\nconst innerOut_hszvjg9cr = addedOps[i].outTrigger(\"innerOut_hszvjg9cr\");\ninnerOut_hszvjg9cr.setUiAttribs({title:\"render\"});\nport_hszvjg9cr.onTriggered = () => { innerOut_hszvjg9cr.trigger(); };\n\nconst innerOut_a8h9qdte9 = addedOps[i].outTexture(\"innerOut_a8h9qdte9\");\ninnerOut_a8h9qdte9.setUiAttribs({title:\"Environment Map\"});\nport_a8h9qdte9.on(\"change\", (a,v) => { innerOut_a8h9qdte9.setRef(a); });\n\nconst innerOut_p9pouj2cr = addedOps[i].outNumber(\"innerOut_p9pouj2cr\");\ninnerOut_p9pouj2cr.set(port_p9pouj2cr.get() );\ninnerOut_p9pouj2cr.setUiAttribs({title:\"posZ\"});\nport_p9pouj2cr.on(\"change\", (a,v) => { innerOut_p9pouj2cr.set(a); });\n\n    }\nif(addedOps[i].innerOutput)\n{\n}\n}\n};\n","subpatch_json":"{\"ops\":[{\"id\":\"9zm5v5urt\",\"uiAttribs\":{\"subPatch\":\"abihwnaac\"},\"storage\":{},\"portsIn\":[{\"name\":\"posX\",\"value\":0},{\"name\":\"posY\",\"value\":0},{\"name\":\"scale\",\"value\":0.9},{\"name\":\"rotX\",\"value\":90},{\"name\":\"rotY\",\"value\":0},{\"name\":\"rotZ\",\"value\":0}],\"portsOut\":[{\"name\":\"trigger\",\"links\":[{\"portIn\":\"Trigger In\",\"portOut\":\"trigger\",\"objIn\":\"3okw2p9f1\",\"objOut\":\"9zm5v5urt\"}]}],\"objName\":\"Ops.Gl.Matrix.TransformView\"},{\"id\":\"3okw2p9f1\",\"uiAttribs\":{\"subPatch\":\"abihwnaac\"},\"storage\":{},\"portsIn\":[{\"name\":\"R\",\"value\":1},{\"name\":\"G\",\"value\":1},{\"name\":\"B\",\"value\":1},{\"name\":\"A\",\"value\":1},{\"name\":\"Enable\",\"value\":0},{\"name\":\"Albedo\",\"value\":0.707},{\"name\":\"Roughness\",\"value\":0.835},{\"name\":\"Active\",\"value\":0},{\"name\":\"Fresnel Intensity\",\"value\":0.7},{\"name\":\"Fresnel Width\",\"value\":1},{\"name\":\"Fresnel Exponent\",\"value\":6},{\"name\":\"Fresnel R\",\"value\":1},{\"name\":\"Fresnel G\",\"value\":1},{\"name\":\"Fresnel B\",\"value\":1},{\"name\":\"Emissive Active\",\"value\":0},{\"name\":\"Color Intensity\",\"value\":0.3},{\"name\":\"Emissive R\",\"value\":0.9734973215895206},{\"name\":\"Emissive G\",\"value\":0.52992114133274},{\"name\":\"Emissive B\",\"value\":0.7241104579307294},{\"name\":\"Shininess\",\"value\":4},{\"name\":\"Specular Amount\",\"value\":0.5},{\"name\":\"Specular Model index\",\"value\":0},{\"name\":\"Specular Model\",\"value\":\"Blinn\"},{\"name\":\"Energy Conservation\",\"value\":0},{\"name\":\"Double Sided Material\",\"value\":0},{\"name\":\"Falloff Mode index\",\"value\":0},{\"name\":\"Falloff Mode\",\"value\":\"A\"},{\"name\":\"Colorize Texture\",\"value\":0},{\"name\":\"Diffuse Repeat X\",\"value\":1},{\"name\":\"Diffuse Repeat Y\",\"value\":1},{\"name\":\"Texture Offset X\",\"value\":0},{\"name\":\"Texture Offset Y\",\"value\":0},{\"name\":\"Specular Intensity\",\"value\":1},{\"name\":\"Normal Map Intensity\",\"value\":0.5},{\"name\":\"AO Intensity\",\"value\":1},{\"name\":\"AO UV Channel index\",\"value\":0},{\"name\":\"AO UV Channel\",\"value\":1},{\"name\":\"Emissive Intensity\",\"value\":1},{\"name\":\"Emissive Mask Intensity\",\"value\":1},{\"name\":\"Env Map Intensity\",\"value\":0.7},{\"name\":\"Env Map Blend index\",\"value\":0},{\"name\":\"Env Map Blend\",\"value\":\"Add\"},{\"name\":\"Env Mask Intensity\",\"value\":1},{\"name\":\"Alpha Mask Source index\",\"value\":0},{\"name\":\"Alpha Mask Source\",\"value\":\"Luminance\"},{\"name\":\"Discard Transparent Pixels\",\"value\":0}],\"portsOut\":[{\"name\":\"Trigger Out\",\"links\":[{\"portIn\":\"Render\",\"portOut\":\"Trigger Out\",\"objIn\":\"piygjmbah\",\"objOut\":\"3okw2p9f1\"}]}],\"objName\":\"Ops.Gl.Phong.PhongMaterial_v6\"},{\"id\":\"piygjmbah\",\"uiAttribs\":{\"subPatch\":\"abihwnaac\"},\"storage\":{},\"portsIn\":[{\"name\":\"data\",\"value\":\"\"},{\"name\":\"glb File\",\"value\":\"/assets/6722a3ec67bbb32772043167/xmas_party.glb\",\"display\":\"file\"},{\"name\":\"Draw\",\"value\":1},{\"name\":\"Camera index\",\"value\":0},{\"name\":\"Camera\",\"value\":\"None\"},{\"name\":\"Animation\",\"value\":\"\"},{\"name\":\"Center index\",\"value\":1},{\"name\":\"Center\",\"value\":\"XYZ\"},{\"name\":\"Rescale\",\"value\":1},{\"name\":\"Rescale Size\",\"value\":2.5},{\"name\":\"Time\",\"value\":0},{\"name\":\"Sync to timeline\",\"value\":0},{\"name\":\"Loop\",\"value\":1},{\"name\":\"Normals Format index\",\"value\":0},{\"name\":\"Normals Format\",\"value\":\"XYZ\"},{\"name\":\"Vertices Format index\",\"value\":0},{\"name\":\"Vertices Format\",\"value\":\"XYZ\"},{\"name\":\"Calc Normals index\",\"value\":0},{\"name\":\"Calc Normals\",\"value\":\"Auto\"},{\"name\":\"Hide Nodes\",\"value\":0},{\"name\":\"Use Material Properties\",\"value\":0},{\"name\":\"Active\",\"value\":1}],\"portsOut\":[{\"name\":\"Generator\",\"value\":\"Khronos glTF Blender I/O v4.2.70\"},{\"name\":\"GLTF Version\",\"value\":2},{\"name\":\"Anim Length\",\"value\":0},{\"name\":\"Anim Time\",\"value\":0},{\"name\":\"Loading\",\"value\":false}],\"objName\":\"Ops.Gl.GLTF.GltfScene_v4\"},{\"id\":\"a1udop223\",\"uiAttribs\":{\"subPatch\":\"abihwnaac\"},\"storage\":{},\"portsOut\":[{\"name\":\"innerOut_hszvjg9cr\",\"title\":\"render\",\"links\":[{\"portIn\":\"render\",\"portOut\":\"innerOut_hszvjg9cr\",\"objIn\":\"9zm5v5urt\",\"objOut\":\"a1udop223\"}]},{\"name\":\"innerOut_a8h9qdte9\",\"title\":\"Environment Map\",\"links\":[{\"portIn\":\"Environment Map\",\"portOut\":\"innerOut_a8h9qdte9\",\"objIn\":\"3okw2p9f1\",\"objOut\":\"a1udop223\"}]},{\"name\":\"innerOut_p9pouj2cr\",\"title\":\"posZ\",\"links\":[{\"portIn\":\"posZ\",\"portOut\":\"innerOut_p9pouj2cr\",\"objIn\":\"9zm5v5urt\",\"objOut\":\"a1udop223\"}]}],\"objName\":\"Ops.Ui.SubPatchInput\"},{\"id\":\"sec2clupe\",\"uiAttribs\":{\"subPatch\":\"abihwnaac\"},\"storage\":{},\"objName\":\"Ops.Ui.SubPatchOutput\"}]}",};
const port_hszvjg9cr=op.inTrigger("hszvjg9cr");
port_hszvjg9cr.setUiAttribs({title:"render",});

const port_a8h9qdte9=op.inObject("a8h9qdte9");
port_a8h9qdte9.setUiAttribs({title:"Environment Map",display:"texture",objType:"texture",objType:"texture"});

const port_p9pouj2cr=op.inFloat("p9pouj2cr",0);
port_p9pouj2cr.setUiAttribs({title:"posZ",});

op.initInnerPorts=function(addedOps)
{
  for(let i=0;i<addedOps.length;i++)
  {
    if(addedOps[i].innerInput)
    {
const innerOut_hszvjg9cr = addedOps[i].outTrigger("innerOut_hszvjg9cr");
innerOut_hszvjg9cr.setUiAttribs({title:"render"});
port_hszvjg9cr.onTriggered = () => { innerOut_hszvjg9cr.trigger(); };

const innerOut_a8h9qdte9 = addedOps[i].outTexture("innerOut_a8h9qdte9");
innerOut_a8h9qdte9.setUiAttribs({title:"Environment Map"});
port_a8h9qdte9.on("change", (a,v) => { innerOut_a8h9qdte9.setRef(a); });

const innerOut_p9pouj2cr = addedOps[i].outNumber("innerOut_p9pouj2cr");
innerOut_p9pouj2cr.set(port_p9pouj2cr.get() );
innerOut_p9pouj2cr.setUiAttribs({title:"posZ"});
port_p9pouj2cr.on("change", (a,v) => { innerOut_p9pouj2cr.set(a); });

    }
if(addedOps[i].innerOutput)
{
}
}
};

const patchId = "bp2sub_" + op.id;

new CABLES.SubPatchOp(op, { "subId": patchId });

initializeSubpatch();

function initializeSubpatch()
{
    if(!attachments || !attachments.subpatch_json) return;

    const p = JSON.parse(attachments.subpatch_json);

    CABLES.Patch.replaceOpIds(p,
        {
            "parentSubPatchId": patchId,
            "prefixHash": patchId,
            "oldIdAsRef": true,
            "doNotUnlinkLostLinks": true
        });

    for (let i = 0; i < p.ops.length; i++)
    {
        p.ops[i].uiAttribs.blueprintSubpatch2 = true;
    }

    op.loadDependencies(p, () =>
    {
        op.patch.deSerialize(p, { "opsCreated": op.initInnerPorts });
        if (CABLES.UI)gui.savedState.setSaved("blueprintloaded", patchId);
        op.patch.emitEvent("subpatchExpose", patchId);
        op.setStorage({ "blueprintVer": 2 });
        op.patch.emitEvent("subpatchExpose", patchId);
    });
}


};

Ops.Patch.PTONYIs.TextXMasParty.prototype = new CABLES.Op();
CABLES.OPS["3d571d9b-58b9-4f5c-991e-32c71bef6976"]={f:Ops.Patch.PTONYIs.TextXMasParty,objName:"Ops.Patch.PTONYIs.TextXMasParty"};




// **************************************************************
// 
// Ops.Patch.PTONYIs.TextDJ
// 
// **************************************************************

Ops.Patch.PTONYIs.TextDJ = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={"inc_gen_ports_js":"const port_7pd74jtca=op.inTrigger(\"7pd74jtca\");\nport_7pd74jtca.setUiAttribs({title:\"render\",});\n\nconst port_jwp9je322=op.inObject(\"jwp9je322\");\nport_jwp9je322.setUiAttribs({title:\"Environment Map\",display:\"texture\",objType:\"texture\",objType:\"texture\"});\n\nconst port_163bury6u=op.inFloat(\"163bury6u\",0);\nport_163bury6u.setUiAttribs({title:\"posZ\",});\n\nconst port_wqlf7ku6t=op.inFloat(\"wqlf7ku6t\",0);\nport_wqlf7ku6t.setUiAttribs({title:\"rotY\",});\n\nconst port_gzmzu8rdi=op.inFloat(\"gzmzu8rdi\",0);\nport_gzmzu8rdi.setUiAttribs({title:\"rotZ\",});\n\nop.initInnerPorts=function(addedOps)\n{\n  for(let i=0;i<addedOps.length;i++)\n  {\n    if(addedOps[i].innerInput)\n    {\nconst innerOut_7pd74jtca = addedOps[i].outTrigger(\"innerOut_7pd74jtca\");\ninnerOut_7pd74jtca.setUiAttribs({title:\"render\"});\nport_7pd74jtca.onTriggered = () => { innerOut_7pd74jtca.trigger(); };\n\nconst innerOut_jwp9je322 = addedOps[i].outTexture(\"innerOut_jwp9je322\");\ninnerOut_jwp9je322.setUiAttribs({title:\"Environment Map\"});\nport_jwp9je322.on(\"change\", (a,v) => { innerOut_jwp9je322.setRef(a); });\n\nconst innerOut_163bury6u = addedOps[i].outNumber(\"innerOut_163bury6u\");\ninnerOut_163bury6u.set(port_163bury6u.get() );\ninnerOut_163bury6u.setUiAttribs({title:\"posZ\"});\nport_163bury6u.on(\"change\", (a,v) => { innerOut_163bury6u.set(a); });\n\nconst innerOut_wqlf7ku6t = addedOps[i].outNumber(\"innerOut_wqlf7ku6t\");\ninnerOut_wqlf7ku6t.set(port_wqlf7ku6t.get() );\ninnerOut_wqlf7ku6t.setUiAttribs({title:\"rotY\"});\nport_wqlf7ku6t.on(\"change\", (a,v) => { innerOut_wqlf7ku6t.set(a); });\n\nconst innerOut_gzmzu8rdi = addedOps[i].outNumber(\"innerOut_gzmzu8rdi\");\ninnerOut_gzmzu8rdi.set(port_gzmzu8rdi.get() );\ninnerOut_gzmzu8rdi.setUiAttribs({title:\"rotZ\"});\nport_gzmzu8rdi.on(\"change\", (a,v) => { innerOut_gzmzu8rdi.set(a); });\n\n    }\nif(addedOps[i].innerOutput)\n{\n}\n}\n};\n","subpatch_json":"{\"ops\":[{\"id\":\"ja3sv5006\",\"uiAttribs\":{\"subPatch\":\"k8blp10gk\"},\"storage\":{},\"portsIn\":[{\"name\":\"posX\",\"value\":0},{\"name\":\"posY\",\"value\":0},{\"name\":\"scale\",\"value\":1},{\"name\":\"rotX\",\"value\":90}],\"portsOut\":[{\"name\":\"trigger\",\"links\":[{\"portIn\":\"Trigger In\",\"portOut\":\"trigger\",\"objIn\":\"lqfup6oe5\",\"objOut\":\"ja3sv5006\"}]}],\"objName\":\"Ops.Gl.Matrix.TransformView\"},{\"id\":\"lqfup6oe5\",\"uiAttribs\":{\"subPatch\":\"k8blp10gk\"},\"storage\":{},\"portsIn\":[{\"name\":\"R\",\"value\":1},{\"name\":\"G\",\"value\":1},{\"name\":\"B\",\"value\":1},{\"name\":\"A\",\"value\":1},{\"name\":\"Enable\",\"value\":0},{\"name\":\"Albedo\",\"value\":0.707},{\"name\":\"Roughness\",\"value\":0.835},{\"name\":\"Active\",\"value\":0},{\"name\":\"Fresnel Intensity\",\"value\":0.7},{\"name\":\"Fresnel Width\",\"value\":1},{\"name\":\"Fresnel Exponent\",\"value\":6},{\"name\":\"Fresnel R\",\"value\":1},{\"name\":\"Fresnel G\",\"value\":1},{\"name\":\"Fresnel B\",\"value\":1},{\"name\":\"Emissive Active\",\"value\":0},{\"name\":\"Color Intensity\",\"value\":0.3},{\"name\":\"Emissive R\",\"value\":0.4199322647775201},{\"name\":\"Emissive G\",\"value\":0.17117717229699836},{\"name\":\"Emissive B\",\"value\":0.08624593460806285},{\"name\":\"Shininess\",\"value\":4},{\"name\":\"Specular Amount\",\"value\":0.5},{\"name\":\"Specular Model index\",\"value\":0},{\"name\":\"Specular Model\",\"value\":\"Blinn\"},{\"name\":\"Energy Conservation\",\"value\":0},{\"name\":\"Double Sided Material\",\"value\":0},{\"name\":\"Falloff Mode index\",\"value\":0},{\"name\":\"Falloff Mode\",\"value\":\"A\"},{\"name\":\"Colorize Texture\",\"value\":0},{\"name\":\"Diffuse Repeat X\",\"value\":1},{\"name\":\"Diffuse Repeat Y\",\"value\":1},{\"name\":\"Texture Offset X\",\"value\":0},{\"name\":\"Texture Offset Y\",\"value\":0},{\"name\":\"Specular Intensity\",\"value\":1},{\"name\":\"Normal Map Intensity\",\"value\":0.5},{\"name\":\"AO Intensity\",\"value\":1},{\"name\":\"AO UV Channel index\",\"value\":0},{\"name\":\"AO UV Channel\",\"value\":1},{\"name\":\"Emissive Intensity\",\"value\":1},{\"name\":\"Emissive Mask Intensity\",\"value\":1},{\"name\":\"Env Map Intensity\",\"value\":0.7},{\"name\":\"Env Map Blend index\",\"value\":0},{\"name\":\"Env Map Blend\",\"value\":\"Add\"},{\"name\":\"Env Mask Intensity\",\"value\":1},{\"name\":\"Alpha Mask Source index\",\"value\":0},{\"name\":\"Alpha Mask Source\",\"value\":\"Luminance\"},{\"name\":\"Discard Transparent Pixels\",\"value\":0}],\"portsOut\":[{\"name\":\"Trigger Out\",\"links\":[{\"portIn\":\"Render\",\"portOut\":\"Trigger Out\",\"objIn\":\"19kfqgon8\",\"objOut\":\"lqfup6oe5\"}]}],\"objName\":\"Ops.Gl.Phong.PhongMaterial_v6\"},{\"id\":\"19kfqgon8\",\"uiAttribs\":{\"subPatch\":\"k8blp10gk\"},\"storage\":{},\"portsIn\":[{\"name\":\"data\",\"value\":\"\"},{\"name\":\"glb File\",\"value\":\"/assets/6722a3ec67bbb32772043167/xmas_dj.glb\",\"display\":\"file\"},{\"name\":\"Draw\",\"value\":1},{\"name\":\"Camera index\",\"value\":0},{\"name\":\"Camera\",\"value\":\"None\"},{\"name\":\"Animation\",\"value\":\"\"},{\"name\":\"Center index\",\"value\":1},{\"name\":\"Center\",\"value\":\"XYZ\"},{\"name\":\"Rescale\",\"value\":1},{\"name\":\"Rescale Size\",\"value\":2.5},{\"name\":\"Time\",\"value\":0},{\"name\":\"Sync to timeline\",\"value\":0},{\"name\":\"Loop\",\"value\":1},{\"name\":\"Normals Format index\",\"value\":0},{\"name\":\"Normals Format\",\"value\":\"XYZ\"},{\"name\":\"Vertices Format index\",\"value\":0},{\"name\":\"Vertices Format\",\"value\":\"XYZ\"},{\"name\":\"Calc Normals index\",\"value\":0},{\"name\":\"Calc Normals\",\"value\":\"Auto\"},{\"name\":\"Hide Nodes\",\"value\":0},{\"name\":\"Use Material Properties\",\"value\":0},{\"name\":\"Active\",\"value\":1}],\"portsOut\":[{\"name\":\"Generator\",\"value\":\"Khronos glTF Blender I/O v4.2.70\"},{\"name\":\"GLTF Version\",\"value\":2},{\"name\":\"Anim Length\",\"value\":0},{\"name\":\"Anim Time\",\"value\":0},{\"name\":\"Loading\",\"value\":false}],\"objName\":\"Ops.Gl.GLTF.GltfScene_v4\"},{\"id\":\"q78glavgo\",\"uiAttribs\":{\"subPatch\":\"k8blp10gk\"},\"storage\":{},\"portsOut\":[{\"name\":\"innerOut_7pd74jtca\",\"title\":\"render\",\"links\":[{\"portIn\":\"render\",\"portOut\":\"innerOut_7pd74jtca\",\"objIn\":\"ja3sv5006\",\"objOut\":\"q78glavgo\"}]},{\"name\":\"innerOut_jwp9je322\",\"title\":\"Environment Map\",\"links\":[{\"portIn\":\"Environment Map\",\"portOut\":\"innerOut_jwp9je322\",\"objIn\":\"lqfup6oe5\",\"objOut\":\"q78glavgo\"}]},{\"name\":\"innerOut_163bury6u\",\"title\":\"posZ\",\"links\":[{\"portIn\":\"posZ\",\"portOut\":\"innerOut_163bury6u\",\"objIn\":\"ja3sv5006\",\"objOut\":\"q78glavgo\"}]},{\"name\":\"innerOut_wqlf7ku6t\",\"title\":\"rotY\",\"links\":[{\"portIn\":\"rotY\",\"portOut\":\"innerOut_wqlf7ku6t\",\"objIn\":\"ja3sv5006\",\"objOut\":\"q78glavgo\"}]},{\"name\":\"innerOut_gzmzu8rdi\",\"title\":\"rotZ\",\"links\":[{\"portIn\":\"rotZ\",\"portOut\":\"innerOut_gzmzu8rdi\",\"objIn\":\"ja3sv5006\",\"objOut\":\"q78glavgo\"}]}],\"objName\":\"Ops.Ui.SubPatchInput\"},{\"id\":\"8do98ltdn\",\"uiAttribs\":{\"subPatch\":\"k8blp10gk\"},\"storage\":{},\"objName\":\"Ops.Ui.SubPatchOutput\"}]}",};
const port_7pd74jtca=op.inTrigger("7pd74jtca");
port_7pd74jtca.setUiAttribs({title:"render",});

const port_jwp9je322=op.inObject("jwp9je322");
port_jwp9je322.setUiAttribs({title:"Environment Map",display:"texture",objType:"texture",objType:"texture"});

const port_163bury6u=op.inFloat("163bury6u",0);
port_163bury6u.setUiAttribs({title:"posZ",});

const port_wqlf7ku6t=op.inFloat("wqlf7ku6t",0);
port_wqlf7ku6t.setUiAttribs({title:"rotY",});

const port_gzmzu8rdi=op.inFloat("gzmzu8rdi",0);
port_gzmzu8rdi.setUiAttribs({title:"rotZ",});

op.initInnerPorts=function(addedOps)
{
  for(let i=0;i<addedOps.length;i++)
  {
    if(addedOps[i].innerInput)
    {
const innerOut_7pd74jtca = addedOps[i].outTrigger("innerOut_7pd74jtca");
innerOut_7pd74jtca.setUiAttribs({title:"render"});
port_7pd74jtca.onTriggered = () => { innerOut_7pd74jtca.trigger(); };

const innerOut_jwp9je322 = addedOps[i].outTexture("innerOut_jwp9je322");
innerOut_jwp9je322.setUiAttribs({title:"Environment Map"});
port_jwp9je322.on("change", (a,v) => { innerOut_jwp9je322.setRef(a); });

const innerOut_163bury6u = addedOps[i].outNumber("innerOut_163bury6u");
innerOut_163bury6u.set(port_163bury6u.get() );
innerOut_163bury6u.setUiAttribs({title:"posZ"});
port_163bury6u.on("change", (a,v) => { innerOut_163bury6u.set(a); });

const innerOut_wqlf7ku6t = addedOps[i].outNumber("innerOut_wqlf7ku6t");
innerOut_wqlf7ku6t.set(port_wqlf7ku6t.get() );
innerOut_wqlf7ku6t.setUiAttribs({title:"rotY"});
port_wqlf7ku6t.on("change", (a,v) => { innerOut_wqlf7ku6t.set(a); });

const innerOut_gzmzu8rdi = addedOps[i].outNumber("innerOut_gzmzu8rdi");
innerOut_gzmzu8rdi.set(port_gzmzu8rdi.get() );
innerOut_gzmzu8rdi.setUiAttribs({title:"rotZ"});
port_gzmzu8rdi.on("change", (a,v) => { innerOut_gzmzu8rdi.set(a); });

    }
if(addedOps[i].innerOutput)
{
}
}
};

const patchId = "bp2sub_" + op.id;

new CABLES.SubPatchOp(op, { "subId": patchId });

initializeSubpatch();

function initializeSubpatch()
{
    if(!attachments || !attachments.subpatch_json) return;

    const p = JSON.parse(attachments.subpatch_json);

    CABLES.Patch.replaceOpIds(p,
        {
            "parentSubPatchId": patchId,
            "prefixHash": patchId,
            "oldIdAsRef": true,
            "doNotUnlinkLostLinks": true
        });

    for (let i = 0; i < p.ops.length; i++)
    {
        p.ops[i].uiAttribs.blueprintSubpatch2 = true;
    }

    op.loadDependencies(p, () =>
    {
        op.patch.deSerialize(p, { "opsCreated": op.initInnerPorts });
        if (CABLES.UI)gui.savedState.setSaved("blueprintloaded", patchId);
        op.patch.emitEvent("subpatchExpose", patchId);
        op.setStorage({ "blueprintVer": 2 });
        op.patch.emitEvent("subpatchExpose", patchId);
    });
}


};

Ops.Patch.PTONYIs.TextDJ.prototype = new CABLES.Op();
CABLES.OPS["45fa6e24-a38f-4765-ae34-215535b89c32"]={f:Ops.Patch.PTONYIs.TextDJ,objName:"Ops.Patch.PTONYIs.TextDJ"};




// **************************************************************
// 
// Ops.Patch.PTONYIs.BackgroundSphere
// 
// **************************************************************

Ops.Patch.PTONYIs.BackgroundSphere = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={"inc_gen_ports_js":"const port_gtsg9sqdl=op.inTrigger(\"gtsg9sqdl\");\nport_gtsg9sqdl.setUiAttribs({title:\"Trigger In\",});\n\nconst port_fb2a24ai3=op.inFloat(\"fb2a24ai3\",1);\nport_fb2a24ai3.setUiAttribs({title:\"number2\",});\n\nconst port_y2a823ldz=op.outTrigger(\"y2a823ldz\");\nport_y2a823ldz.setUiAttribs({title:\"Trigger Out\",});\n\nconst port_tta42hr4g=op.outObject(\"tta42hr4g\");\nport_tta42hr4g.setUiAttribs({title:\"cubemap\",display:\"texture\",objType:\"texture\",objType:\"texture\"});\n\nop.initInnerPorts=function(addedOps)\n{\n  for(let i=0;i<addedOps.length;i++)\n  {\n    if(addedOps[i].innerInput)\n    {\nconst innerOut_gtsg9sqdl = addedOps[i].outTrigger(\"innerOut_gtsg9sqdl\");\ninnerOut_gtsg9sqdl.setUiAttribs({title:\"Trigger In\"});\nport_gtsg9sqdl.onTriggered = () => { innerOut_gtsg9sqdl.trigger(); };\n\nconst innerOut_fb2a24ai3 = addedOps[i].outNumber(\"innerOut_fb2a24ai3\");\ninnerOut_fb2a24ai3.set(port_fb2a24ai3.get() );\ninnerOut_fb2a24ai3.setUiAttribs({title:\"number2\"});\nport_fb2a24ai3.on(\"change\", (a,v) => { innerOut_fb2a24ai3.set(a); });\n\n    }\nif(addedOps[i].innerOutput)\n{\nconst innerIn_y2a823ldz = addedOps[i].inTrigger(\"innerIn_y2a823ldz\");\ninnerIn_y2a823ldz.setUiAttribs({title:\"Trigger Out\"});\ninnerIn_y2a823ldz.onTriggered = () => { port_y2a823ldz.trigger(); };\n\nconst innerIn_tta42hr4g = addedOps[i].inObject(\"innerIn_tta42hr4g\");\ninnerIn_tta42hr4g.setUiAttribs({title:\"cubemap\"});\ninnerIn_tta42hr4g.on(\"change\", (a,v) => { port_tta42hr4g.setRef(a); });\n\n}\n}\n};\n","subpatch_json":"{\"ops\":[{\"id\":\"hakhaqon3\",\"uiAttribs\":{\"subPatch\":\"y7jgk0h1z\"},\"storage\":{},\"portsIn\":[{\"name\":\"R\",\"value\":0.9294117647058824},{\"name\":\"G\",\"value\":0.04313725490196077},{\"name\":\"B\",\"value\":0.2509803921568628},{\"name\":\"A\",\"value\":1,\"animated\":true,\"anim\":{\"keys\":[{\"t\":0,\"v\":0,\"e\":0},{\"t\":1,\"v\":1,\"e\":0}],\"loop\":false}},{\"name\":\"Enable\",\"value\":0},{\"name\":\"Albedo\",\"value\":0.707},{\"name\":\"Roughness\",\"value\":0.835},{\"name\":\"Active\",\"value\":0},{\"name\":\"Fresnel Intensity\",\"value\":0.7},{\"name\":\"Fresnel Width\",\"value\":1},{\"name\":\"Fresnel Exponent\",\"value\":6},{\"name\":\"Fresnel R\",\"value\":1},{\"name\":\"Fresnel G\",\"value\":1},{\"name\":\"Fresnel B\",\"value\":1},{\"name\":\"Emissive Active\",\"value\":0},{\"name\":\"Color Intensity\",\"value\":0.3},{\"name\":\"Emissive R\",\"value\":0.7911984677136801},{\"name\":\"Emissive G\",\"value\":0.9159502418920342},{\"name\":\"Emissive B\",\"value\":0.5031322986999072},{\"name\":\"Shininess\",\"value\":4},{\"name\":\"Specular Amount\",\"value\":0.5},{\"name\":\"Specular Model index\",\"value\":0},{\"name\":\"Specular Model\",\"value\":\"Blinn\"},{\"name\":\"Energy Conservation\",\"value\":0},{\"name\":\"Double Sided Material\",\"value\":0},{\"name\":\"Falloff Mode index\",\"value\":0},{\"name\":\"Falloff Mode\",\"value\":\"A\"},{\"name\":\"Colorize Texture\",\"value\":0},{\"name\":\"Diffuse Repeat X\",\"value\":1},{\"name\":\"Diffuse Repeat Y\",\"value\":1},{\"name\":\"Texture Offset X\",\"value\":0},{\"name\":\"Texture Offset Y\",\"value\":0},{\"name\":\"Specular Intensity\",\"value\":1},{\"name\":\"Normal Map Intensity\",\"value\":0.5},{\"name\":\"AO Intensity\",\"value\":1},{\"name\":\"AO UV Channel index\",\"value\":0},{\"name\":\"AO UV Channel\",\"value\":1},{\"name\":\"Emissive Intensity\",\"value\":1},{\"name\":\"Emissive Mask Intensity\",\"value\":1},{\"name\":\"Env Map Intensity\",\"value\":1},{\"name\":\"Env Map Blend index\",\"value\":0},{\"name\":\"Env Map Blend\",\"value\":\"Add\"},{\"name\":\"Env Mask Intensity\",\"value\":1},{\"name\":\"Alpha Mask Source index\",\"value\":0},{\"name\":\"Alpha Mask Source\",\"value\":\"Luminance\"},{\"name\":\"Discard Transparent Pixels\",\"value\":0}],\"portsOut\":[{\"name\":\"Trigger Out\",\"links\":[{\"portIn\":\"render\",\"portOut\":\"Trigger Out\",\"objIn\":\"m1h8xn81a\",\"objOut\":\"hakhaqon3\"},{\"portIn\":\"render\",\"portOut\":\"Trigger Out\",\"objIn\":\"uzw9i7mxn\",\"objOut\":\"hakhaqon3\"}]}],\"objName\":\"Ops.Gl.Phong.PhongMaterial_v6\"},{\"id\":\"19u620cnh\",\"uiAttribs\":{\"subPatch\":\"y7jgk0h1z\"},\"storage\":{},\"portsIn\":[{\"name\":\"Width\",\"value\":1},{\"name\":\"Length\",\"value\":1},{\"name\":\"Height\",\"value\":2},{\"name\":\"Smooth\",\"value\":0},{\"name\":\"Draw\",\"value\":0}],\"portsOut\":[{\"name\":\"trigger\",\"links\":[{\"portIn\":\"exe\",\"portOut\":\"trigger\",\"objIn\":\"uix4p51nv\",\"objOut\":\"19u620cnh\"}]},{\"name\":\"geometry\",\"links\":[{\"portIn\":\"geom\",\"portOut\":\"geometry\",\"objIn\":\"uix4p51nv\",\"objOut\":\"19u620cnh\"}]}],\"objName\":\"Ops.Gl.Meshes.Pyramid_v2\"},{\"id\":\"uix4p51nv\",\"uiAttribs\":{\"subPatch\":\"y7jgk0h1z\"},\"storage\":{},\"portsIn\":[{\"name\":\"Scale\",\"value\":0.08},{\"name\":\"Limit Instances\",\"value\":0},{\"name\":\"Limit\",\"value\":100},{\"name\":\"Rotation Type index\",\"value\":0},{\"name\":\"Rotation Type\",\"value\":\"Euler\"},{\"name\":\"Billboarding index\",\"value\":0},{\"name\":\"Billboarding\",\"value\":\"Off\"},{\"name\":\"Material blend mode index\",\"value\":0},{\"name\":\"Material blend mode\",\"value\":\"Multiply\"},{\"name\":\"Colors\",\"value\":0},{\"name\":\"TexCoords\",\"value\":0}],\"portsOut\":[{\"name\":\"Num\",\"value\":1026}],\"objName\":\"Ops.Gl.MeshInstancer_v4\"},{\"id\":\"uzw9i7mxn\",\"uiAttribs\":{\"subPatch\":\"y7jgk0h1z\"},\"storage\":{},\"portsIn\":[{\"name\":\"Iterations\",\"value\":4},{\"name\":\"Flat\",\"value\":0},{\"name\":\"Draw\",\"value\":0}],\"portsOut\":[{\"name\":\"Geometry\",\"links\":[{\"portIn\":\"Geometry\",\"portOut\":\"Geometry\",\"objIn\":\"7od21hj5f\",\"objOut\":\"uzw9i7mxn\"}]}],\"objName\":\"Ops.Gl.Meshes.TriangleSphere\"},{\"id\":\"7od21hj5f\",\"uiAttribs\":{\"subPatch\":\"y7jgk0h1z\"},\"storage\":{},\"portsOut\":[{\"name\":\"Vertices\",\"links\":[{\"portIn\":\"positions\",\"portOut\":\"Vertices\",\"objIn\":\"uix4p51nv\",\"objOut\":\"7od21hj5f\"},{\"portIn\":\"array\",\"portOut\":\"Vertices\",\"objIn\":\"y342sj16h\",\"objOut\":\"7od21hj5f\"},{\"portIn\":\"array\",\"portOut\":\"Vertices\",\"objIn\":\"0c60m9v8p\",\"objOut\":\"7od21hj5f\"}]}],\"objName\":\"Ops.Graphics.Geometry.GeometryAttributes\"},{\"id\":\"m1h8xn81a\",\"uiAttribs\":{\"subPatch\":\"y7jgk0h1z\"},\"storage\":{},\"portsIn\":[{\"name\":\"posX\",\"value\":0},{\"name\":\"posY\",\"value\":0},{\"name\":\"posZ\",\"value\":0},{\"name\":\"scale\",\"value\":9},{\"name\":\"rotZ\",\"value\":0}],\"portsOut\":[{\"name\":\"trigger\",\"links\":[{\"portIn\":\"Render\",\"portOut\":\"trigger\",\"objIn\":\"19u620cnh\",\"objOut\":\"m1h8xn81a\"}]}],\"objName\":\"Ops.Gl.Matrix.TransformView\"},{\"id\":\"jcciu9muj\",\"uiAttribs\":{\"subPatch\":\"y7jgk0h1z\"},\"storage\":{},\"portsIn\":[{\"name\":\"Y\",\"value\":0}],\"portsOut\":[{\"name\":\"Array\",\"links\":[{\"portIn\":\"Rotations\",\"portOut\":\"Array\",\"objIn\":\"uix4p51nv\",\"objOut\":\"jcciu9muj\"}]},{\"name\":\"Total points\",\"value\":3078},{\"name\":\"Array length\",\"value\":9234}],\"objName\":\"Ops.Array.Array3\"},{\"id\":\"y342sj16h\",\"uiAttribs\":{\"subPatch\":\"y7jgk0h1z\"},\"storage\":{},\"portsOut\":[{\"name\":\"length\",\"links\":[{\"portIn\":\"Num Triplets\",\"portOut\":\"length\",\"objIn\":\"jcciu9muj\",\"objOut\":\"y342sj16h\"}]}],\"objName\":\"Ops.Array.ArrayLength_v2\"},{\"id\":\"yhiwypeqh\",\"uiAttribs\":{\"subPatch\":\"y7jgk0h1z\"},\"storage\":{},\"portsOut\":[{\"name\":\"innerOut_gtsg9sqdl\",\"title\":\"Trigger In\",\"links\":[{\"portIn\":\"Trigger In\",\"portOut\":\"innerOut_gtsg9sqdl\",\"objIn\":\"hakhaqon3\",\"objOut\":\"yhiwypeqh\"},{\"portIn\":\"Render\",\"portOut\":\"innerOut_gtsg9sqdl\",\"objIn\":\"m28ykzgdn\",\"objOut\":\"yhiwypeqh\"}]},{\"name\":\"innerOut_fb2a24ai3\",\"title\":\"number2\",\"links\":[{\"portIn\":\"number2\",\"portOut\":\"innerOut_fb2a24ai3\",\"objIn\":\"ol4svarav\",\"objOut\":\"yhiwypeqh\"}]}],\"objName\":\"Ops.Ui.SubPatchInput\"},{\"id\":\"nrelxn3es\",\"uiAttribs\":{\"subPatch\":\"y7jgk0h1z\"},\"storage\":{},\"portsIn\":[{\"name\":\"innerIn_tta42hr4g\",\"title\":\"cubemap\"}],\"objName\":\"Ops.Ui.SubPatchOutput\"},{\"id\":\"gra13snx4\",\"uiAttribs\":{\"subPatch\":\"y7jgk0h1z\"},\"storage\":{},\"portsOut\":[{\"name\":\"time\",\"links\":[{\"portIn\":\"number1\",\"portOut\":\"time\",\"objIn\":\"691rnb73f\",\"objOut\":\"gra13snx4\"}]}],\"objName\":\"Ops.TimeLine.TimeLineTime\"},{\"id\":\"7hc51jsia\",\"uiAttribs\":{\"subPatch\":\"y7jgk0h1z\"},\"storage\":{},\"portsOut\":[{\"name\":\"time\",\"links\":[{\"portIn\":\"number1\",\"portOut\":\"time\",\"objIn\":\"wzam2eog8\",\"objOut\":\"7hc51jsia\"}]}],\"objName\":\"Ops.TimeLine.TimeLineTime\"},{\"id\":\"691rnb73f\",\"uiAttribs\":{\"subPatch\":\"y7jgk0h1z\"},\"storage\":{},\"portsIn\":[{\"name\":\"number2\",\"value\":20}],\"portsOut\":[{\"name\":\"result\",\"links\":[{\"portIn\":\"rotX\",\"portOut\":\"result\",\"objIn\":\"m1h8xn81a\",\"objOut\":\"691rnb73f\"},{\"portIn\":\"rotY\",\"portOut\":\"result\",\"objIn\":\"m1h8xn81a\",\"objOut\":\"691rnb73f\"}]}],\"objName\":\"Ops.Math.Multiply\"},{\"id\":\"wzam2eog8\",\"uiAttribs\":{\"subPatch\":\"y7jgk0h1z\"},\"storage\":{},\"portsIn\":[{\"name\":\"number2\",\"value\":40}],\"portsOut\":[{\"name\":\"result\",\"links\":[{\"portIn\":\"X\",\"portOut\":\"result\",\"objIn\":\"jcciu9muj\",\"objOut\":\"wzam2eog8\"},{\"portIn\":\"Z\",\"portOut\":\"result\",\"objIn\":\"jcciu9muj\",\"objOut\":\"wzam2eog8\"}]}],\"objName\":\"Ops.Math.Multiply\"},{\"id\":\"m28ykzgdn\",\"uiAttribs\":{\"subPatch\":\"y7jgk0h1z\"},\"storage\":{},\"portsIn\":[{\"name\":\"Size index\",\"value\":3},{\"name\":\"Size\",\"value\":\"256\"},{\"name\":\"Pixel Format index\",\"value\":4},{\"name\":\"Pixel Format\",\"value\":\"RGBA 8bit ubyte\"},{\"name\":\"MSAA index\",\"value\":0},{\"name\":\"MSAA\",\"value\":\"none\"}],\"portsOut\":[{\"name\":\"Next\",\"links\":[{\"portIn\":\"Trigger In\",\"portOut\":\"Next\",\"objIn\":\"hakhaqon3\",\"objOut\":\"m28ykzgdn\"}]},{\"name\":\"cubemap\",\"links\":[{\"portIn\":\"innerIn_tta42hr4g\",\"portOut\":\"cubemap\",\"objIn\":\"nrelxn3es\",\"objOut\":\"m28ykzgdn\"}]}],\"objName\":\"Ops.Gl.CubeMap.RenderToCubemap_v3\"},{\"id\":\"0c60m9v8p\",\"uiAttribs\":{\"subPatch\":\"y7jgk0h1z\"},\"storage\":{},\"portsOut\":[{\"name\":\"length\",\"links\":[{\"portIn\":\"number1\",\"portOut\":\"length\",\"objIn\":\"j18jidcpr\",\"objOut\":\"0c60m9v8p\"}]}],\"objName\":\"Ops.Array.ArrayLength_v2\"},{\"id\":\"vm5bherpd\",\"uiAttribs\":{\"subPatch\":\"y7jgk0h1z\"},\"storage\":{},\"portsOut\":[{\"name\":\"Array\",\"links\":[{\"portIn\":\"Scale Array\",\"portOut\":\"Array\",\"objIn\":\"uix4p51nv\",\"objOut\":\"vm5bherpd\"}]},{\"name\":\"Total points\",\"value\":1026},{\"name\":\"Array length\",\"value\":3078}],\"objName\":\"Ops.Array.Array3\"},{\"id\":\"ol4svarav\",\"uiAttribs\":{\"subPatch\":\"y7jgk0h1z\"},\"storage\":{},\"portsIn\":[{\"name\":\"number1\",\"value\":1}],\"portsOut\":[{\"name\":\"result\",\"links\":[{\"portIn\":\"val\",\"portOut\":\"result\",\"objIn\":\"lwly2ljxs\",\"objOut\":\"ol4svarav\"}]}],\"objName\":\"Ops.Math.Multiply\"},{\"id\":\"j18jidcpr\",\"uiAttribs\":{\"subPatch\":\"y7jgk0h1z\"},\"portsIn\":[{\"name\":\"number2\",\"value\":3}],\"portsOut\":[{\"name\":\"result\",\"links\":[{\"portIn\":\"Num Triplets\",\"portOut\":\"result\",\"objIn\":\"vm5bherpd\",\"objOut\":\"j18jidcpr\"}]}],\"storage\":{\"ref\":\"j18jidcpr\"},\"objName\":\"Ops.Math.Divide\"},{\"id\":\"lwly2ljxs\",\"uiAttribs\":{\"subPatch\":\"y7jgk0h1z\"},\"portsIn\":[{\"name\":\"min\",\"value\":0},{\"name\":\"max\",\"value\":1},{\"name\":\"ignore outside values\",\"value\":0}],\"portsOut\":[{\"name\":\"result\",\"links\":[{\"portIn\":\"X\",\"portOut\":\"result\",\"objIn\":\"vm5bherpd\",\"objOut\":\"lwly2ljxs\"},{\"portIn\":\"Y\",\"portOut\":\"result\",\"objIn\":\"vm5bherpd\",\"objOut\":\"lwly2ljxs\"},{\"portIn\":\"Z\",\"portOut\":\"result\",\"objIn\":\"vm5bherpd\",\"objOut\":\"lwly2ljxs\"}]}],\"storage\":{\"ref\":\"lwly2ljxs\"},\"objName\":\"Ops.Math.Clamp\"}]}",};
const port_gtsg9sqdl=op.inTrigger("gtsg9sqdl");
port_gtsg9sqdl.setUiAttribs({title:"Trigger In",});

const port_fb2a24ai3=op.inFloat("fb2a24ai3",1);
port_fb2a24ai3.setUiAttribs({title:"number2",});

const port_y2a823ldz=op.outTrigger("y2a823ldz");
port_y2a823ldz.setUiAttribs({title:"Trigger Out",});

const port_tta42hr4g=op.outObject("tta42hr4g");
port_tta42hr4g.setUiAttribs({title:"cubemap",display:"texture",objType:"texture",objType:"texture"});

op.initInnerPorts=function(addedOps)
{
  for(let i=0;i<addedOps.length;i++)
  {
    if(addedOps[i].innerInput)
    {
const innerOut_gtsg9sqdl = addedOps[i].outTrigger("innerOut_gtsg9sqdl");
innerOut_gtsg9sqdl.setUiAttribs({title:"Trigger In"});
port_gtsg9sqdl.onTriggered = () => { innerOut_gtsg9sqdl.trigger(); };

const innerOut_fb2a24ai3 = addedOps[i].outNumber("innerOut_fb2a24ai3");
innerOut_fb2a24ai3.set(port_fb2a24ai3.get() );
innerOut_fb2a24ai3.setUiAttribs({title:"number2"});
port_fb2a24ai3.on("change", (a,v) => { innerOut_fb2a24ai3.set(a); });

    }
if(addedOps[i].innerOutput)
{
const innerIn_y2a823ldz = addedOps[i].inTrigger("innerIn_y2a823ldz");
innerIn_y2a823ldz.setUiAttribs({title:"Trigger Out"});
innerIn_y2a823ldz.onTriggered = () => { port_y2a823ldz.trigger(); };

const innerIn_tta42hr4g = addedOps[i].inObject("innerIn_tta42hr4g");
innerIn_tta42hr4g.setUiAttribs({title:"cubemap"});
innerIn_tta42hr4g.on("change", (a,v) => { port_tta42hr4g.setRef(a); });

}
}
};

const patchId = "bp2sub_" + op.id;

new CABLES.SubPatchOp(op, { "subId": patchId });

initializeSubpatch();

function initializeSubpatch()
{
    if(!attachments || !attachments.subpatch_json) return;

    const p = JSON.parse(attachments.subpatch_json);

    CABLES.Patch.replaceOpIds(p,
        {
            "parentSubPatchId": patchId,
            "prefixHash": patchId,
            "oldIdAsRef": true,
            "doNotUnlinkLostLinks": true
        });

    for (let i = 0; i < p.ops.length; i++)
    {
        p.ops[i].uiAttribs.blueprintSubpatch2 = true;
    }

    op.loadDependencies(p, () =>
    {
        op.patch.deSerialize(p, { "opsCreated": op.initInnerPorts });
        if (CABLES.UI)gui.savedState.setSaved("blueprintloaded", patchId);
        op.patch.emitEvent("subpatchExpose", patchId);
        op.setStorage({ "blueprintVer": 2 });
        op.patch.emitEvent("subpatchExpose", patchId);
    });
}


};

Ops.Patch.PTONYIs.BackgroundSphere.prototype = new CABLES.Op();
CABLES.OPS["5c4cc3aa-42d9-49fc-a68d-5531794c15b8"]={f:Ops.Patch.PTONYIs.BackgroundSphere,objName:"Ops.Patch.PTONYIs.BackgroundSphere"};




// **************************************************************
// 
// Ops.Patch.PTONYIs.TextWheel
// 
// **************************************************************

Ops.Patch.PTONYIs.TextWheel = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={"inc_gen_ports_js":"const port_2g7rpzzph=op.inTrigger(\"2g7rpzzph\");\nport_2g7rpzzph.setUiAttribs({title:\"render\",});\n\nconst port_o9qq3xl8r=op.inObject(\"o9qq3xl8r\");\nport_o9qq3xl8r.setUiAttribs({title:\"Environment Map\",display:\"texture\",objType:\"texture\",objType:\"texture\"});\n\nconst port_kjsc4k0rj=op.inFloat(\"kjsc4k0rj\",0.6);\nport_kjsc4k0rj.setUiAttribs({title:\"scale\",});\n\nconst port_0xiykw6zy=op.inFloat(\"0xiykw6zy\",1);\nport_0xiykw6zy.setUiAttribs({title:\"number1\",});\n\nop.initInnerPorts=function(addedOps)\n{\n  for(let i=0;i<addedOps.length;i++)\n  {\n    if(addedOps[i].innerInput)\n    {\nconst innerOut_2g7rpzzph = addedOps[i].outTrigger(\"innerOut_2g7rpzzph\");\ninnerOut_2g7rpzzph.setUiAttribs({title:\"render\"});\nport_2g7rpzzph.onTriggered = () => { innerOut_2g7rpzzph.trigger(); };\n\nconst innerOut_o9qq3xl8r = addedOps[i].outTexture(\"innerOut_o9qq3xl8r\");\ninnerOut_o9qq3xl8r.setUiAttribs({title:\"Environment Map\"});\nport_o9qq3xl8r.on(\"change\", (a,v) => { innerOut_o9qq3xl8r.setRef(a); });\n\nconst innerOut_kjsc4k0rj = addedOps[i].outNumber(\"innerOut_kjsc4k0rj\");\ninnerOut_kjsc4k0rj.set(port_kjsc4k0rj.get() );\ninnerOut_kjsc4k0rj.setUiAttribs({title:\"scale\"});\nport_kjsc4k0rj.on(\"change\", (a,v) => { innerOut_kjsc4k0rj.set(a); });\n\nconst innerOut_0xiykw6zy = addedOps[i].outNumber(\"innerOut_0xiykw6zy\");\ninnerOut_0xiykw6zy.set(port_0xiykw6zy.get() );\ninnerOut_0xiykw6zy.setUiAttribs({title:\"number1\"});\nport_0xiykw6zy.on(\"change\", (a,v) => { innerOut_0xiykw6zy.set(a); });\n\n    }\nif(addedOps[i].innerOutput)\n{\n}\n}\n};\n","subpatch_json":"{\"ops\":[{\"id\":\"g8zogtm2y\",\"uiAttribs\":{\"subPatch\":\"d2b1q79ed\"},\"storage\":{},\"portsIn\":[{\"name\":\"posX\",\"value\":0},{\"name\":\"posY\",\"value\":0},{\"name\":\"posZ\",\"value\":0},{\"name\":\"rotY\",\"value\":0},{\"name\":\"rotZ\",\"value\":0}],\"portsOut\":[{\"name\":\"trigger\",\"links\":[{\"portIn\":\"Trigger In\",\"portOut\":\"trigger\",\"objIn\":\"h7uou244z\",\"objOut\":\"g8zogtm2y\"}]}],\"objName\":\"Ops.Gl.Matrix.TransformView\"},{\"id\":\"h7uou244z\",\"uiAttribs\":{\"subPatch\":\"d2b1q79ed\"},\"storage\":{},\"portsIn\":[{\"name\":\"R\",\"value\":1},{\"name\":\"G\",\"value\":1},{\"name\":\"B\",\"value\":1},{\"name\":\"A\",\"value\":1},{\"name\":\"Enable\",\"value\":0},{\"name\":\"Albedo\",\"value\":0.707},{\"name\":\"Roughness\",\"value\":0.835},{\"name\":\"Active\",\"value\":0},{\"name\":\"Fresnel Intensity\",\"value\":0.7},{\"name\":\"Fresnel Width\",\"value\":1},{\"name\":\"Fresnel Exponent\",\"value\":6},{\"name\":\"Fresnel R\",\"value\":1},{\"name\":\"Fresnel G\",\"value\":1},{\"name\":\"Fresnel B\",\"value\":1},{\"name\":\"Emissive Active\",\"value\":0},{\"name\":\"Color Intensity\",\"value\":0.3},{\"name\":\"Emissive R\",\"value\":0.767218608914124},{\"name\":\"Emissive G\",\"value\":0.6882633189240721},{\"name\":\"Emissive B\",\"value\":0.9446988727677663},{\"name\":\"Shininess\",\"value\":4},{\"name\":\"Specular Amount\",\"value\":0.5},{\"name\":\"Specular Model index\",\"value\":0},{\"name\":\"Specular Model\",\"value\":\"Blinn\"},{\"name\":\"Energy Conservation\",\"value\":0},{\"name\":\"Double Sided Material\",\"value\":0},{\"name\":\"Falloff Mode index\",\"value\":0},{\"name\":\"Falloff Mode\",\"value\":\"A\"},{\"name\":\"Colorize Texture\",\"value\":0},{\"name\":\"Diffuse Repeat X\",\"value\":1},{\"name\":\"Diffuse Repeat Y\",\"value\":1},{\"name\":\"Texture Offset X\",\"value\":0},{\"name\":\"Texture Offset Y\",\"value\":0},{\"name\":\"Specular Intensity\",\"value\":1},{\"name\":\"Normal Map Intensity\",\"value\":0.5},{\"name\":\"AO Intensity\",\"value\":1},{\"name\":\"AO UV Channel index\",\"value\":0},{\"name\":\"AO UV Channel\",\"value\":1},{\"name\":\"Emissive Intensity\",\"value\":1},{\"name\":\"Emissive Mask Intensity\",\"value\":1},{\"name\":\"Env Map Intensity\",\"value\":0.75},{\"name\":\"Env Map Blend index\",\"value\":0},{\"name\":\"Env Map Blend\",\"value\":\"Add\"},{\"name\":\"Env Mask Intensity\",\"value\":1},{\"name\":\"Alpha Mask Source index\",\"value\":0},{\"name\":\"Alpha Mask Source\",\"value\":\"Luminance\"},{\"name\":\"Discard Transparent Pixels\",\"value\":0}],\"portsOut\":[{\"name\":\"Trigger Out\",\"links\":[{\"portIn\":\"Trigger In\",\"portOut\":\"Trigger Out\",\"objIn\":\"cxnysgke8\",\"objOut\":\"h7uou244z\"},{\"portIn\":\"render\",\"portOut\":\"Trigger Out\",\"objIn\":\"gcxsuig20\",\"objOut\":\"h7uou244z\"},{\"portIn\":\"render\",\"portOut\":\"Trigger Out\",\"objIn\":\"3mf288syj\",\"objOut\":\"h7uou244z\"},{\"portIn\":\"render\",\"portOut\":\"Trigger Out\",\"objIn\":\"5n2t9fkdr\",\"objOut\":\"h7uou244z\"},{\"portIn\":\"render\",\"portOut\":\"Trigger Out\",\"objIn\":\"wm5hvc4oc\",\"objOut\":\"h7uou244z\"},{\"portIn\":\"render\",\"portOut\":\"Trigger Out\",\"objIn\":\"7apxgm50q\",\"objOut\":\"h7uou244z\"},{\"portIn\":\"render\",\"portOut\":\"Trigger Out\",\"objIn\":\"5qkt3w686\",\"objOut\":\"h7uou244z\"}]}],\"objName\":\"Ops.Gl.Phong.PhongMaterial_v6\"},{\"id\":\"wi6ntthnm\",\"uiAttribs\":{\"subPatch\":\"d2b1q79ed\"},\"storage\":{},\"portsIn\":[{\"name\":\"data\",\"value\":\"\"},{\"name\":\"glb File\",\"value\":\"/assets/6722a3ec67bbb32772043167/xmas_date.glb\",\"display\":\"file\"},{\"name\":\"Draw\",\"value\":1},{\"name\":\"Camera index\",\"value\":0},{\"name\":\"Camera\",\"value\":\"None\"},{\"name\":\"Animation\",\"value\":\"\"},{\"name\":\"Center index\",\"value\":1},{\"name\":\"Center\",\"value\":\"XYZ\"},{\"name\":\"Rescale\",\"value\":1},{\"name\":\"Rescale Size\",\"value\":2.5},{\"name\":\"Time\",\"value\":0},{\"name\":\"Sync to timeline\",\"value\":0},{\"name\":\"Loop\",\"value\":1},{\"name\":\"Normals Format index\",\"value\":0},{\"name\":\"Normals Format\",\"value\":\"XYZ\"},{\"name\":\"Vertices Format index\",\"value\":0},{\"name\":\"Vertices Format\",\"value\":\"XYZ\"},{\"name\":\"Calc Normals index\",\"value\":0},{\"name\":\"Calc Normals\",\"value\":\"Auto\"},{\"name\":\"Hide Nodes\",\"value\":0},{\"name\":\"Use Material Properties\",\"value\":0},{\"name\":\"Active\",\"value\":1}],\"portsOut\":[{\"name\":\"Generator\",\"value\":\"Khronos glTF Blender I/O v4.2.70\"},{\"name\":\"GLTF Version\",\"value\":2},{\"name\":\"Anim Length\",\"value\":0},{\"name\":\"Anim Time\",\"value\":0},{\"name\":\"Loading\",\"value\":false}],\"objName\":\"Ops.Gl.GLTF.GltfScene_v4\"},{\"id\":\"mky6682a2\",\"uiAttribs\":{\"subPatch\":\"d2b1q79ed\"},\"storage\":{},\"portsIn\":[{\"name\":\"data\",\"value\":\"\"},{\"name\":\"glb File\",\"value\":\"/assets/6722a3ec67bbb32772043167/minus5_logo6.glb\",\"display\":\"file\"},{\"name\":\"Draw\",\"value\":1},{\"name\":\"Camera index\",\"value\":0},{\"name\":\"Camera\",\"value\":\"None\"},{\"name\":\"Animation\",\"value\":\"\"},{\"name\":\"Center index\",\"value\":1},{\"name\":\"Center\",\"value\":\"XYZ\"},{\"name\":\"Rescale\",\"value\":1},{\"name\":\"Rescale Size\",\"value\":2.5},{\"name\":\"Time\",\"value\":0},{\"name\":\"Sync to timeline\",\"value\":0},{\"name\":\"Loop\",\"value\":1},{\"name\":\"Normals Format index\",\"value\":0},{\"name\":\"Normals Format\",\"value\":\"XYZ\"},{\"name\":\"Vertices Format index\",\"value\":0},{\"name\":\"Vertices Format\",\"value\":\"XYZ\"},{\"name\":\"Calc Normals index\",\"value\":0},{\"name\":\"Calc Normals\",\"value\":\"Auto\"},{\"name\":\"Hide Nodes\",\"value\":0},{\"name\":\"Use Material Properties\",\"value\":0},{\"name\":\"Active\",\"value\":1}],\"portsOut\":[{\"name\":\"Generator\",\"value\":\"Khronos glTF Blender I/O v4.2.70\"},{\"name\":\"GLTF Version\",\"value\":2},{\"name\":\"Anim Length\",\"value\":0},{\"name\":\"Anim Time\",\"value\":0},{\"name\":\"Loading\",\"value\":false}],\"objName\":\"Ops.Gl.GLTF.GltfScene_v4\"},{\"id\":\"lna5q2fdn\",\"uiAttribs\":{\"subPatch\":\"d2b1q79ed\"},\"storage\":{},\"portsIn\":[{\"name\":\"data\",\"value\":\"\"},{\"name\":\"glb File\",\"value\":\"/assets/6722a3ec67bbb32772043167/xmas_invites.glb\",\"display\":\"file\"},{\"name\":\"Draw\",\"value\":1},{\"name\":\"Camera index\",\"value\":0},{\"name\":\"Camera\",\"value\":\"None\"},{\"name\":\"Animation\",\"value\":\"\"},{\"name\":\"Center index\",\"value\":1},{\"name\":\"Center\",\"value\":\"XYZ\"},{\"name\":\"Rescale\",\"value\":1},{\"name\":\"Rescale Size\",\"value\":2.5},{\"name\":\"Time\",\"value\":0},{\"name\":\"Sync to timeline\",\"value\":0},{\"name\":\"Loop\",\"value\":1},{\"name\":\"Normals Format index\",\"value\":0},{\"name\":\"Normals Format\",\"value\":\"XYZ\"},{\"name\":\"Vertices Format index\",\"value\":0},{\"name\":\"Vertices Format\",\"value\":\"XYZ\"},{\"name\":\"Calc Normals index\",\"value\":0},{\"name\":\"Calc Normals\",\"value\":\"Auto\"},{\"name\":\"Hide Nodes\",\"value\":0},{\"name\":\"Use Material Properties\",\"value\":0},{\"name\":\"Active\",\"value\":1}],\"portsOut\":[{\"name\":\"Generator\",\"value\":\"Khronos glTF Blender I/O v4.2.70\"},{\"name\":\"GLTF Version\",\"value\":2},{\"name\":\"Anim Length\",\"value\":0},{\"name\":\"Anim Time\",\"value\":0},{\"name\":\"Loading\",\"value\":false}],\"objName\":\"Ops.Gl.GLTF.GltfScene_v4\"},{\"id\":\"trl1u3v99\",\"uiAttribs\":{\"subPatch\":\"d2b1q79ed\"},\"storage\":{},\"portsIn\":[{\"name\":\"data\",\"value\":\"\"},{\"name\":\"glb File\",\"value\":\"/assets/6722a3ec67bbb32772043167/xmas_you.glb\",\"display\":\"file\"},{\"name\":\"Draw\",\"value\":1},{\"name\":\"Camera index\",\"value\":0},{\"name\":\"Camera\",\"value\":\"None\"},{\"name\":\"Animation\",\"value\":\"\"},{\"name\":\"Center index\",\"value\":1},{\"name\":\"Center\",\"value\":\"XYZ\"},{\"name\":\"Rescale\",\"value\":1},{\"name\":\"Rescale Size\",\"value\":2.5},{\"name\":\"Time\",\"value\":0},{\"name\":\"Sync to timeline\",\"value\":0},{\"name\":\"Loop\",\"value\":1},{\"name\":\"Normals Format index\",\"value\":0},{\"name\":\"Normals Format\",\"value\":\"XYZ\"},{\"name\":\"Vertices Format index\",\"value\":0},{\"name\":\"Vertices Format\",\"value\":\"XYZ\"},{\"name\":\"Calc Normals index\",\"value\":0},{\"name\":\"Calc Normals\",\"value\":\"Auto\"},{\"name\":\"Hide Nodes\",\"value\":0},{\"name\":\"Use Material Properties\",\"value\":0},{\"name\":\"Active\",\"value\":1}],\"portsOut\":[{\"name\":\"Generator\",\"value\":\"Khronos glTF Blender I/O v4.2.70\"},{\"name\":\"GLTF Version\",\"value\":2},{\"name\":\"Anim Length\",\"value\":0},{\"name\":\"Anim Time\",\"value\":0},{\"name\":\"Loading\",\"value\":false}],\"objName\":\"Ops.Gl.GLTF.GltfScene_v4\"},{\"id\":\"l4mcpqy1w\",\"uiAttribs\":{\"subPatch\":\"d2b1q79ed\"},\"storage\":{},\"portsIn\":[{\"name\":\"data\",\"value\":\"\"},{\"name\":\"glb File\",\"value\":\"/assets/6722a3ec67bbb32772043167/xmas_party.glb\",\"display\":\"file\"},{\"name\":\"Draw\",\"value\":1},{\"name\":\"Camera index\",\"value\":0},{\"name\":\"Camera\",\"value\":\"None\"},{\"name\":\"Animation\",\"value\":\"\"},{\"name\":\"Center index\",\"value\":1},{\"name\":\"Center\",\"value\":\"XYZ\"},{\"name\":\"Rescale\",\"value\":1},{\"name\":\"Rescale Size\",\"value\":2.5},{\"name\":\"Time\",\"value\":0},{\"name\":\"Sync to timeline\",\"value\":0},{\"name\":\"Loop\",\"value\":1},{\"name\":\"Normals Format index\",\"value\":0},{\"name\":\"Normals Format\",\"value\":\"XYZ\"},{\"name\":\"Vertices Format index\",\"value\":0},{\"name\":\"Vertices Format\",\"value\":\"XYZ\"},{\"name\":\"Calc Normals index\",\"value\":0},{\"name\":\"Calc Normals\",\"value\":\"Auto\"},{\"name\":\"Hide Nodes\",\"value\":0},{\"name\":\"Use Material Properties\",\"value\":0},{\"name\":\"Active\",\"value\":1}],\"portsOut\":[{\"name\":\"Generator\",\"value\":\"Khronos glTF Blender I/O v4.2.70\"},{\"name\":\"GLTF Version\",\"value\":2},{\"name\":\"Anim Length\",\"value\":0},{\"name\":\"Anim Time\",\"value\":0},{\"name\":\"Loading\",\"value\":false}],\"objName\":\"Ops.Gl.GLTF.GltfScene_v4\"},{\"id\":\"m9blxtgn5\",\"uiAttribs\":{\"subPatch\":\"d2b1q79ed\"},\"storage\":{},\"portsIn\":[{\"name\":\"data\",\"value\":\"\"},{\"name\":\"glb File\",\"value\":\"/assets/6722a3ec67bbb32772043167/xmas_dj.glb\",\"display\":\"file\"},{\"name\":\"Draw\",\"value\":1},{\"name\":\"Camera index\",\"value\":0},{\"name\":\"Camera\",\"value\":\"None\"},{\"name\":\"Animation\",\"value\":\"\"},{\"name\":\"Center index\",\"value\":1},{\"name\":\"Center\",\"value\":\"XYZ\"},{\"name\":\"Rescale\",\"value\":1},{\"name\":\"Rescale Size\",\"value\":2.5},{\"name\":\"Time\",\"value\":0},{\"name\":\"Sync to timeline\",\"value\":0},{\"name\":\"Loop\",\"value\":1},{\"name\":\"Normals Format index\",\"value\":0},{\"name\":\"Normals Format\",\"value\":\"XYZ\"},{\"name\":\"Vertices Format index\",\"value\":0},{\"name\":\"Vertices Format\",\"value\":\"XYZ\"},{\"name\":\"Calc Normals index\",\"value\":0},{\"name\":\"Calc Normals\",\"value\":\"Auto\"},{\"name\":\"Hide Nodes\",\"value\":0},{\"name\":\"Use Material Properties\",\"value\":0},{\"name\":\"Active\",\"value\":1}],\"portsOut\":[{\"name\":\"Generator\",\"value\":\"Khronos glTF Blender I/O v4.2.70\"},{\"name\":\"GLTF Version\",\"value\":2},{\"name\":\"Anim Length\",\"value\":0},{\"name\":\"Anim Time\",\"value\":0},{\"name\":\"Loading\",\"value\":false}],\"objName\":\"Ops.Gl.GLTF.GltfScene_v4\"},{\"id\":\"cxnysgke8\",\"uiAttribs\":{\"subPatch\":\"d2b1q79ed\"},\"storage\":{},\"portsIn\":[{\"name\":\"R\",\"value\":0.4627450980392157},{\"name\":\"G\",\"value\":0},{\"name\":\"B\",\"value\":0.10980392156862756},{\"name\":\"A\",\"value\":1},{\"name\":\"Enable\",\"value\":0},{\"name\":\"Albedo\",\"value\":0.707},{\"name\":\"Roughness\",\"value\":0.835},{\"name\":\"Active\",\"value\":0},{\"name\":\"Fresnel Intensity\",\"value\":0.7},{\"name\":\"Fresnel Width\",\"value\":1},{\"name\":\"Fresnel Exponent\",\"value\":6},{\"name\":\"Fresnel R\",\"value\":1},{\"name\":\"Fresnel G\",\"value\":1},{\"name\":\"Fresnel B\",\"value\":1},{\"name\":\"Emissive Active\",\"value\":0},{\"name\":\"Color Intensity\",\"value\":0.3},{\"name\":\"Emissive R\",\"value\":0.767218608914124},{\"name\":\"Emissive G\",\"value\":0.6882633189240721},{\"name\":\"Emissive B\",\"value\":0.9446988727677663},{\"name\":\"Shininess\",\"value\":4},{\"name\":\"Specular Amount\",\"value\":0.5},{\"name\":\"Specular Model index\",\"value\":0},{\"name\":\"Specular Model\",\"value\":\"Blinn\"},{\"name\":\"Energy Conservation\",\"value\":0},{\"name\":\"Double Sided Material\",\"value\":0},{\"name\":\"Falloff Mode index\",\"value\":0},{\"name\":\"Falloff Mode\",\"value\":\"A\"},{\"name\":\"Colorize Texture\",\"value\":0},{\"name\":\"Diffuse Repeat X\",\"value\":1},{\"name\":\"Diffuse Repeat Y\",\"value\":1},{\"name\":\"Texture Offset X\",\"value\":0},{\"name\":\"Texture Offset Y\",\"value\":0},{\"name\":\"Specular Intensity\",\"value\":1},{\"name\":\"Normal Map Intensity\",\"value\":0.5},{\"name\":\"AO Intensity\",\"value\":1},{\"name\":\"AO UV Channel index\",\"value\":0},{\"name\":\"AO UV Channel\",\"value\":1},{\"name\":\"Emissive Intensity\",\"value\":1},{\"name\":\"Emissive Mask Intensity\",\"value\":1},{\"name\":\"Env Map Intensity\",\"value\":0.75},{\"name\":\"Env Map Blend index\",\"value\":0},{\"name\":\"Env Map Blend\",\"value\":\"Add\"},{\"name\":\"Env Mask Intensity\",\"value\":1},{\"name\":\"Alpha Mask Source index\",\"value\":0},{\"name\":\"Alpha Mask Source\",\"value\":\"Luminance\"},{\"name\":\"Discard Transparent Pixels\",\"value\":0}],\"portsOut\":[{\"name\":\"Shader\",\"links\":[{\"portIn\":\"Shader\",\"portOut\":\"Shader\",\"objIn\":\"vkbils9l4\",\"objOut\":\"cxnysgke8\"}]}],\"objName\":\"Ops.Gl.Phong.PhongMaterial_v6\"},{\"id\":\"vkbils9l4\",\"uiAttribs\":{\"subPatch\":\"d2b1q79ed\"},\"storage\":{},\"portsIn\":[{\"name\":\"Material Name\",\"value\":\"Letter_Red\"}],\"portsOut\":[{\"name\":\"Material\",\"links\":[{\"portIn\":\"Materials\",\"portOut\":\"Material\",\"objIn\":\"mky6682a2\",\"objOut\":\"vkbils9l4\"}]}],\"objName\":\"Ops.Gl.GLTF.GltfSetMaterial\"},{\"id\":\"dh7y3oz6n\",\"uiAttribs\":{\"subPatch\":\"d2b1q79ed\"},\"storage\":{},\"portsOut\":[{\"name\":\"time\",\"links\":[{\"portIn\":\"number1\",\"portOut\":\"time\",\"objIn\":\"ptf7vxz92\",\"objOut\":\"dh7y3oz6n\"}]}],\"objName\":\"Ops.TimeLine.TimeLineTime\"},{\"id\":\"ptf7vxz92\",\"uiAttribs\":{\"subPatch\":\"d2b1q79ed\"},\"storage\":{},\"portsIn\":[{\"name\":\"number2\",\"value\":100}],\"portsOut\":[{\"name\":\"result\",\"links\":[{\"portIn\":\"number2\",\"portOut\":\"result\",\"objIn\":\"1348bvr8w\",\"objOut\":\"ptf7vxz92\"}]}],\"objName\":\"Ops.Math.Multiply\"},{\"id\":\"lhl93kqjz\",\"uiAttribs\":{\"subPatch\":\"d2b1q79ed\"},\"storage\":{},\"portsOut\":[{\"name\":\"innerOut_2g7rpzzph\",\"title\":\"render\",\"links\":[{\"portIn\":\"render\",\"portOut\":\"innerOut_2g7rpzzph\",\"objIn\":\"g8zogtm2y\",\"objOut\":\"lhl93kqjz\"}]},{\"name\":\"innerOut_o9qq3xl8r\",\"title\":\"Environment Map\",\"links\":[{\"portIn\":\"Environment Map\",\"portOut\":\"innerOut_o9qq3xl8r\",\"objIn\":\"cxnysgke8\",\"objOut\":\"lhl93kqjz\"},{\"portIn\":\"Environment Map\",\"portOut\":\"innerOut_o9qq3xl8r\",\"objIn\":\"h7uou244z\",\"objOut\":\"lhl93kqjz\"}]},{\"name\":\"innerOut_kjsc4k0rj\",\"title\":\"scale\",\"links\":[{\"portIn\":\"scale\",\"portOut\":\"innerOut_kjsc4k0rj\",\"objIn\":\"g8zogtm2y\",\"objOut\":\"lhl93kqjz\"}]},{\"name\":\"innerOut_0xiykw6zy\",\"title\":\"number1\",\"links\":[{\"portIn\":\"number1\",\"portOut\":\"innerOut_0xiykw6zy\",\"objIn\":\"qpxyo82hf\",\"objOut\":\"lhl93kqjz\"}]}],\"objName\":\"Ops.Ui.SubPatchInput\"},{\"id\":\"5mp74s9ev\",\"uiAttribs\":{\"subPatch\":\"d2b1q79ed\"},\"storage\":{},\"objName\":\"Ops.Ui.SubPatchOutput\"},{\"id\":\"gcxsuig20\",\"uiAttribs\":{\"subPatch\":\"d2b1q79ed\"},\"storage\":{},\"portsIn\":[{\"name\":\"posX\",\"value\":0},{\"name\":\"posY\",\"value\":0},{\"name\":\"posZ\",\"value\":1},{\"name\":\"scale\",\"value\":1.4},{\"name\":\"rotX\",\"value\":90},{\"name\":\"rotY\",\"value\":0},{\"name\":\"rotZ\",\"value\":0}],\"portsOut\":[{\"name\":\"trigger\",\"links\":[{\"portIn\":\"Render\",\"portOut\":\"trigger\",\"objIn\":\"wi6ntthnm\",\"objOut\":\"gcxsuig20\"}]}],\"objName\":\"Ops.Gl.Matrix.Transform\"},{\"id\":\"3mf288syj\",\"uiAttribs\":{\"subPatch\":\"d2b1q79ed\"},\"storage\":{},\"portsIn\":[{\"name\":\"posX\",\"value\":0},{\"name\":\"posY\",\"value\":0.866},{\"name\":\"posZ\",\"value\":0.5},{\"name\":\"scale\",\"value\":1.4},{\"name\":\"rotX\",\"value\":30},{\"name\":\"rotY\",\"value\":0},{\"name\":\"rotZ\",\"value\":0}],\"portsOut\":[{\"name\":\"trigger\",\"links\":[{\"portIn\":\"Render\",\"portOut\":\"trigger\",\"objIn\":\"mky6682a2\",\"objOut\":\"3mf288syj\"}]}],\"objName\":\"Ops.Gl.Matrix.Transform\"},{\"id\":\"5n2t9fkdr\",\"uiAttribs\":{\"subPatch\":\"d2b1q79ed\"},\"storage\":{},\"portsIn\":[{\"name\":\"posX\",\"value\":0},{\"name\":\"posY\",\"value\":0.866},{\"name\":\"posZ\",\"value\":-0.5},{\"name\":\"scale\",\"value\":1.5},{\"name\":\"rotX\",\"value\":-30},{\"name\":\"rotY\",\"value\":0},{\"name\":\"rotZ\",\"value\":0}],\"portsOut\":[{\"name\":\"trigger\",\"links\":[{\"portIn\":\"Render\",\"portOut\":\"trigger\",\"objIn\":\"lna5q2fdn\",\"objOut\":\"5n2t9fkdr\"}]}],\"objName\":\"Ops.Gl.Matrix.Transform\"},{\"id\":\"wm5hvc4oc\",\"uiAttribs\":{\"subPatch\":\"d2b1q79ed\"},\"storage\":{},\"portsIn\":[{\"name\":\"posX\",\"value\":0},{\"name\":\"posY\",\"value\":0},{\"name\":\"posZ\",\"value\":-1},{\"name\":\"scale\",\"value\":1.3},{\"name\":\"rotX\",\"value\":-90},{\"name\":\"rotY\",\"value\":0},{\"name\":\"rotZ\",\"value\":0}],\"portsOut\":[{\"name\":\"trigger\",\"links\":[{\"portIn\":\"Render\",\"portOut\":\"trigger\",\"objIn\":\"trl1u3v99\",\"objOut\":\"wm5hvc4oc\"}]}],\"objName\":\"Ops.Gl.Matrix.Transform\"},{\"id\":\"7apxgm50q\",\"uiAttribs\":{\"subPatch\":\"d2b1q79ed\"},\"storage\":{},\"portsIn\":[{\"name\":\"posX\",\"value\":0},{\"name\":\"posY\",\"value\":-0.866},{\"name\":\"posZ\",\"value\":-0.5},{\"name\":\"scale\",\"value\":1.4},{\"name\":\"rotX\",\"value\":-150},{\"name\":\"rotY\",\"value\":0},{\"name\":\"rotZ\",\"value\":0}],\"portsOut\":[{\"name\":\"trigger\",\"links\":[{\"portIn\":\"Render\",\"portOut\":\"trigger\",\"objIn\":\"l4mcpqy1w\",\"objOut\":\"7apxgm50q\"}]}],\"objName\":\"Ops.Gl.Matrix.Transform\"},{\"id\":\"5qkt3w686\",\"uiAttribs\":{\"subPatch\":\"d2b1q79ed\"},\"storage\":{},\"portsIn\":[{\"name\":\"posX\",\"value\":0},{\"name\":\"posY\",\"value\":-0.866},{\"name\":\"posZ\",\"value\":0.5},{\"name\":\"scale\",\"value\":1.5},{\"name\":\"rotX\",\"value\":-210},{\"name\":\"rotY\",\"value\":0},{\"name\":\"rotZ\",\"value\":0}],\"portsOut\":[{\"name\":\"trigger\",\"links\":[{\"portIn\":\"Render\",\"portOut\":\"trigger\",\"objIn\":\"m9blxtgn5\",\"objOut\":\"5qkt3w686\"}]}],\"objName\":\"Ops.Gl.Matrix.Transform\"},{\"id\":\"q9bz9y4y1\",\"uiAttribs\":{\"subPatch\":\"d2b1q79ed\"},\"storage\":{},\"portsIn\":[{\"name\":\"number2\",\"value\":60}],\"portsOut\":[{\"name\":\"result\",\"links\":[{\"portIn\":\"number1\",\"portOut\":\"result\",\"objIn\":\"1348bvr8w\",\"objOut\":\"q9bz9y4y1\"}]}],\"objName\":\"Ops.Math.Multiply\"},{\"id\":\"1348bvr8w\",\"uiAttribs\":{\"subPatch\":\"d2b1q79ed\"},\"storage\":{},\"portsOut\":[{\"name\":\"result\",\"links\":[{\"portIn\":\"rotX\",\"portOut\":\"result\",\"objIn\":\"g8zogtm2y\",\"objOut\":\"1348bvr8w\"}]}],\"objName\":\"Ops.Math.Sum\"},{\"id\":\"qpxyo82hf\",\"uiAttribs\":{\"subPatch\":\"d2b1q79ed\"},\"portsIn\":[{\"name\":\"number2\",\"value\":-0.5}],\"portsOut\":[{\"name\":\"result\",\"links\":[{\"portIn\":\"number1\",\"portOut\":\"result\",\"objIn\":\"q9bz9y4y1\",\"objOut\":\"qpxyo82hf\"}]}],\"storage\":{\"ref\":\"qpxyo82hf\"},\"objName\":\"Ops.Math.Multiply\"}]}",};
const port_2g7rpzzph=op.inTrigger("2g7rpzzph");
port_2g7rpzzph.setUiAttribs({title:"render",});

const port_o9qq3xl8r=op.inObject("o9qq3xl8r");
port_o9qq3xl8r.setUiAttribs({title:"Environment Map",display:"texture",objType:"texture",objType:"texture"});

const port_kjsc4k0rj=op.inFloat("kjsc4k0rj",0.6);
port_kjsc4k0rj.setUiAttribs({title:"scale",});

const port_0xiykw6zy=op.inFloat("0xiykw6zy",1);
port_0xiykw6zy.setUiAttribs({title:"number1",});

op.initInnerPorts=function(addedOps)
{
  for(let i=0;i<addedOps.length;i++)
  {
    if(addedOps[i].innerInput)
    {
const innerOut_2g7rpzzph = addedOps[i].outTrigger("innerOut_2g7rpzzph");
innerOut_2g7rpzzph.setUiAttribs({title:"render"});
port_2g7rpzzph.onTriggered = () => { innerOut_2g7rpzzph.trigger(); };

const innerOut_o9qq3xl8r = addedOps[i].outTexture("innerOut_o9qq3xl8r");
innerOut_o9qq3xl8r.setUiAttribs({title:"Environment Map"});
port_o9qq3xl8r.on("change", (a,v) => { innerOut_o9qq3xl8r.setRef(a); });

const innerOut_kjsc4k0rj = addedOps[i].outNumber("innerOut_kjsc4k0rj");
innerOut_kjsc4k0rj.set(port_kjsc4k0rj.get() );
innerOut_kjsc4k0rj.setUiAttribs({title:"scale"});
port_kjsc4k0rj.on("change", (a,v) => { innerOut_kjsc4k0rj.set(a); });

const innerOut_0xiykw6zy = addedOps[i].outNumber("innerOut_0xiykw6zy");
innerOut_0xiykw6zy.set(port_0xiykw6zy.get() );
innerOut_0xiykw6zy.setUiAttribs({title:"number1"});
port_0xiykw6zy.on("change", (a,v) => { innerOut_0xiykw6zy.set(a); });

    }
if(addedOps[i].innerOutput)
{
}
}
};

const patchId = "bp2sub_" + op.id;

new CABLES.SubPatchOp(op, { "subId": patchId });

initializeSubpatch();

function initializeSubpatch()
{
    if(!attachments || !attachments.subpatch_json) return;

    const p = JSON.parse(attachments.subpatch_json);

    CABLES.Patch.replaceOpIds(p,
        {
            "parentSubPatchId": patchId,
            "prefixHash": patchId,
            "oldIdAsRef": true,
            "doNotUnlinkLostLinks": true
        });

    for (let i = 0; i < p.ops.length; i++)
    {
        p.ops[i].uiAttribs.blueprintSubpatch2 = true;
    }

    op.loadDependencies(p, () =>
    {
        op.patch.deSerialize(p, { "opsCreated": op.initInnerPorts });
        if (CABLES.UI)gui.savedState.setSaved("blueprintloaded", patchId);
        op.patch.emitEvent("subpatchExpose", patchId);
        op.setStorage({ "blueprintVer": 2 });
        op.patch.emitEvent("subpatchExpose", patchId);
    });
}


};

Ops.Patch.PTONYIs.TextWheel.prototype = new CABLES.Op();
CABLES.OPS["42c31e2f-ed7b-49d9-8b14-6b0d1d1756e0"]={f:Ops.Patch.PTONYIs.TextWheel,objName:"Ops.Patch.PTONYIs.TextWheel"};




// **************************************************************
// 
// Ops.Gl.Matrix.Transform
// 
// **************************************************************

Ops.Gl.Matrix.Transform = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    render = op.inTrigger("render"),
    posX = op.inValue("posX", 0),
    posY = op.inValue("posY", 0),
    posZ = op.inValue("posZ", 0),
    scale = op.inValue("scale", 1),
    rotX = op.inValue("rotX", 0),
    rotY = op.inValue("rotY", 0),
    rotZ = op.inValue("rotZ", 0),
    trigger = op.outTrigger("trigger");

op.setPortGroup("Rotation", [rotX, rotY, rotZ]);
op.setPortGroup("Position", [posX, posY, posZ]);
op.setPortGroup("Scale", [scale]);
op.setUiAxisPorts(posX, posY, posZ);

op.toWorkPortsNeedToBeLinked(render, trigger);

const vPos = vec3.create();
const vScale = vec3.create();
const transMatrix = mat4.create();
mat4.identity(transMatrix);

let
    doScale = false,
    doTranslate = false,
    translationChanged = true,
    scaleChanged = true,
    rotChanged = true;

rotX.onChange = rotY.onChange = rotZ.onChange = setRotChanged;
posX.onChange = posY.onChange = posZ.onChange = setTranslateChanged;
scale.onChange = setScaleChanged;

render.onTriggered = function ()
{
    // if(!CGL.TextureEffect.checkOpNotInTextureEffect(op)) return;

    let updateMatrix = false;
    if (translationChanged)
    {
        updateTranslation();
        updateMatrix = true;
    }
    if (scaleChanged)
    {
        updateScale();
        updateMatrix = true;
    }
    if (rotChanged) updateMatrix = true;

    if (updateMatrix) doUpdateMatrix();

    const cg = op.patch.cg || op.patch.cgl;
    cg.pushModelMatrix();
    mat4.multiply(cg.mMatrix, cg.mMatrix, transMatrix);

    trigger.trigger();
    cg.popModelMatrix();

    if (CABLES.UI)
    {
        if (!posX.isLinked() && !posY.isLinked() && !posZ.isLinked())
        {
            gui.setTransform(op.id, posX.get(), posY.get(), posZ.get());

            if (op.isCurrentUiOp())
                gui.setTransformGizmo(
                    {
                        "posX": posX,
                        "posY": posY,
                        "posZ": posZ,
                    });
        }
    }
};

// op.transform3d = function ()
// {
//     return { "pos": [posX, posY, posZ] };
// };

function doUpdateMatrix()
{
    mat4.identity(transMatrix);
    if (doTranslate)mat4.translate(transMatrix, transMatrix, vPos);

    if (rotX.get() !== 0)mat4.rotateX(transMatrix, transMatrix, rotX.get() * CGL.DEG2RAD);
    if (rotY.get() !== 0)mat4.rotateY(transMatrix, transMatrix, rotY.get() * CGL.DEG2RAD);
    if (rotZ.get() !== 0)mat4.rotateZ(transMatrix, transMatrix, rotZ.get() * CGL.DEG2RAD);

    if (doScale)mat4.scale(transMatrix, transMatrix, vScale);
    rotChanged = false;
}

function updateTranslation()
{
    doTranslate = false;
    if (posX.get() !== 0.0 || posY.get() !== 0.0 || posZ.get() !== 0.0) doTranslate = true;
    vec3.set(vPos, posX.get(), posY.get(), posZ.get());
    translationChanged = false;
}

function updateScale()
{
    // doScale=false;
    // if(scale.get()!==0.0)
    doScale = true;
    vec3.set(vScale, scale.get(), scale.get(), scale.get());
    scaleChanged = false;
}

function setTranslateChanged()
{
    translationChanged = true;
}

function setScaleChanged()
{
    scaleChanged = true;
}

function setRotChanged()
{
    rotChanged = true;
}

doUpdateMatrix();


};

Ops.Gl.Matrix.Transform.prototype = new CABLES.Op();
CABLES.OPS["650baeb1-db2d-4781-9af6-ab4e9d4277be"]={f:Ops.Gl.Matrix.Transform,objName:"Ops.Gl.Matrix.Transform"};




// **************************************************************
// 
// Ops.Gl.ClearColor
// 
// **************************************************************

Ops.Gl.ClearColor = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    render = op.inTrigger("render"),
    trigger = op.outTrigger("trigger"),
    r = op.inFloatSlider("r", 0.1),
    g = op.inFloatSlider("g", 0.1),
    b = op.inFloatSlider("b", 0.1),
    a = op.inFloatSlider("a", 1);

r.setUiAttribs({ "colorPick": true });

const cgl = op.patch.cgl;

render.onTriggered = function ()
{
    cgl.gl.clearColor(r.get(), g.get(), b.get(), a.get());
    cgl.gl.clear(cgl.gl.COLOR_BUFFER_BIT | cgl.gl.DEPTH_BUFFER_BIT);
    trigger.trigger();
};


};

Ops.Gl.ClearColor.prototype = new CABLES.Op();
CABLES.OPS["19b441eb-9f63-4f35-ba08-b87841517c4d"]={f:Ops.Gl.ClearColor,objName:"Ops.Gl.ClearColor"};




// **************************************************************
// 
// Ops.Graphics.DepthTest
// 
// **************************************************************

Ops.Graphics.DepthTest = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    render = op.inTrigger("Render"),
    enable = op.inValueBool("Enable depth testing", true),
    meth = op.inValueSelect("Depth Test Method", ["never", "always", "less", "less or equal", "greater", "greater or equal", "equal", "not equal"], "less or equal"),
    write = op.inValueBool("Write to depth buffer", true),
    trigger = op.outTrigger("Next");

const cgl = op.patch.cgl;
let compareMethod = CABLES.CG.DEPTH_COMPARE_LESSEQUAL;

meth.onChange = updateFunc;

function updateFunc()
{
    const m = meth.get();
    if (m == "never") compareMethod = CABLES.CG.DEPTH_COMPARE_NEVER;
    else if (m == "always") compareMethod = CABLES.CG.DEPTH_COMPARE_ALWAYS;
    else if (m == "less") compareMethod = CABLES.CG.DEPTH_COMPARE_LESS;
    else if (m == "less or equal") compareMethod = CABLES.CG.DEPTH_COMPARE_LESSEQUAL;
    else if (m == "greater") compareMethod = CABLES.CG.DEPTH_COMPARE_GREATER;
    else if (m == "greater or equal") compareMethod = CABLES.CG.DEPTH_COMPARE_GREATEREQUAL;
    else if (m == "equal") compareMethod = CABLES.CG.DEPTH_COMPARE_EQUAL;
    else if (m == "not equal") compareMethod = CABLES.CG.DEPTH_COMPARE_NOTEQUAL;
}

render.onTriggered = function ()
{
    const cg = op.patch.cg;
    if (!cg) return;

    op.patch.cg.pushDepthTest(enable.get());
    op.patch.cg.pushDepthWrite(write.get());
    op.patch.cg.pushDepthFunc(cg.DEPTH_FUNCS[compareMethod]);

    trigger.trigger();

    op.patch.cg.popDepthTest();
    op.patch.cg.popDepthWrite();
    op.patch.cg.popDepthFunc();
};


};

Ops.Graphics.DepthTest.prototype = new CABLES.Op();
CABLES.OPS["3996ed5d-8143-4bec-9cfd-c1b193a295af"]={f:Ops.Graphics.DepthTest,objName:"Ops.Graphics.DepthTest"};




// **************************************************************
// 
// Ops.Gl.Shader.BasicMaterial_v3
// 
// **************************************************************

Ops.Gl.Shader.BasicMaterial_v3 = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={"basicmaterial_frag":"{{MODULES_HEAD}}\n\nIN vec2 texCoord;\n\n#ifdef VERTEX_COLORS\nIN vec4 vertCol;\n#endif\n\n#ifdef HAS_TEXTURES\n    IN vec2 texCoordOrig;\n    #ifdef HAS_TEXTURE_DIFFUSE\n        UNI sampler2D tex;\n    #endif\n    #ifdef HAS_TEXTURE_OPACITY\n        UNI sampler2D texOpacity;\n   #endif\n#endif\n\n\n\nvoid main()\n{\n    {{MODULE_BEGIN_FRAG}}\n    vec4 col=color;\n\n\n    #ifdef HAS_TEXTURES\n        vec2 uv=texCoord;\n\n        #ifdef CROP_TEXCOORDS\n            if(uv.x<0.0 || uv.x>1.0 || uv.y<0.0 || uv.y>1.0) discard;\n        #endif\n\n        #ifdef HAS_TEXTURE_DIFFUSE\n            col=texture(tex,uv);\n\n            #ifdef COLORIZE_TEXTURE\n                col.r*=color.r;\n                col.g*=color.g;\n                col.b*=color.b;\n            #endif\n        #endif\n        col.a*=color.a;\n        #ifdef HAS_TEXTURE_OPACITY\n            #ifdef TRANSFORMALPHATEXCOORDS\n                uv=texCoordOrig;\n            #endif\n            #ifdef ALPHA_MASK_IR\n                col.a*=1.0-texture(texOpacity,uv).r;\n            #endif\n            #ifdef ALPHA_MASK_IALPHA\n                col.a*=1.0-texture(texOpacity,uv).a;\n            #endif\n            #ifdef ALPHA_MASK_ALPHA\n                col.a*=texture(texOpacity,uv).a;\n            #endif\n            #ifdef ALPHA_MASK_LUMI\n                col.a*=dot(vec3(0.2126,0.7152,0.0722), texture(texOpacity,uv).rgb);\n            #endif\n            #ifdef ALPHA_MASK_R\n                col.a*=texture(texOpacity,uv).r;\n            #endif\n            #ifdef ALPHA_MASK_G\n                col.a*=texture(texOpacity,uv).g;\n            #endif\n            #ifdef ALPHA_MASK_B\n                col.a*=texture(texOpacity,uv).b;\n            #endif\n            // #endif\n        #endif\n    #endif\n\n    {{MODULE_COLOR}}\n\n    #ifdef DISCARDTRANS\n        if(col.a<0.2) discard;\n    #endif\n\n    #ifdef VERTEX_COLORS\n        col*=vertCol;\n    #endif\n\n    outColor = col;\n}\n","basicmaterial_vert":"\n{{MODULES_HEAD}}\n\nOUT vec2 texCoord;\nOUT vec2 texCoordOrig;\n\nUNI mat4 projMatrix;\nUNI mat4 modelMatrix;\nUNI mat4 viewMatrix;\n\n#ifdef HAS_TEXTURES\n    UNI float diffuseRepeatX;\n    UNI float diffuseRepeatY;\n    UNI float texOffsetX;\n    UNI float texOffsetY;\n#endif\n\n#ifdef VERTEX_COLORS\n    in vec4 attrVertColor;\n    out vec4 vertCol;\n\n#endif\n\n\nvoid main()\n{\n    mat4 mMatrix=modelMatrix;\n    mat4 modelViewMatrix;\n\n    norm=attrVertNormal;\n    texCoordOrig=attrTexCoord;\n    texCoord=attrTexCoord;\n    #ifdef HAS_TEXTURES\n        texCoord.x=texCoord.x*diffuseRepeatX+texOffsetX;\n        texCoord.y=(1.0-texCoord.y)*diffuseRepeatY+texOffsetY;\n    #endif\n\n    #ifdef VERTEX_COLORS\n        vertCol=attrVertColor;\n    #endif\n\n    vec4 pos = vec4(vPosition, 1.0);\n\n    #ifdef BILLBOARD\n       vec3 position=vPosition;\n       modelViewMatrix=viewMatrix*modelMatrix;\n\n       gl_Position = projMatrix * modelViewMatrix * vec4((\n           position.x * vec3(\n               modelViewMatrix[0][0],\n               modelViewMatrix[1][0],\n               modelViewMatrix[2][0] ) +\n           position.y * vec3(\n               modelViewMatrix[0][1],\n               modelViewMatrix[1][1],\n               modelViewMatrix[2][1]) ), 1.0);\n    #endif\n\n    {{MODULE_VERTEX_POSITION}}\n\n    #ifndef BILLBOARD\n        modelViewMatrix=viewMatrix * mMatrix;\n\n        {{MODULE_VERTEX_MODELVIEW}}\n\n    #endif\n\n    // mat4 modelViewMatrix=viewMatrix*mMatrix;\n\n    #ifndef BILLBOARD\n        // gl_Position = projMatrix * viewMatrix * modelMatrix * pos;\n        gl_Position = projMatrix * modelViewMatrix * pos;\n    #endif\n}\n",};
const render = op.inTrigger("render");
const trigger = op.outTrigger("trigger");
const shaderOut = op.outObject("shader", null, "shader");

shaderOut.ignoreValueSerialize = true;

op.toWorkPortsNeedToBeLinked(render);
op.toWorkShouldNotBeChild("Ops.Gl.TextureEffects.ImageCompose", CABLES.OP_PORT_TYPE_FUNCTION);

const cgl = op.patch.cgl;
const shader = new CGL.Shader(cgl, "basicmaterialnew", this);
shader.addAttribute({ "type": "vec3", "name": "vPosition" });
shader.addAttribute({ "type": "vec2", "name": "attrTexCoord" });
shader.addAttribute({ "type": "vec3", "name": "attrVertNormal", "nameFrag": "norm" });
shader.addAttribute({ "type": "float", "name": "attrVertIndex" });

shader.setModules(["MODULE_VERTEX_POSITION", "MODULE_COLOR", "MODULE_BEGIN_FRAG", "MODULE_VERTEX_MODELVIEW"]);

shader.setSource(attachments.basicmaterial_vert, attachments.basicmaterial_frag);

shaderOut.setRef(shader);

render.onTriggered = doRender;

// rgba colors
const r = op.inValueSlider("r", Math.random());
const g = op.inValueSlider("g", Math.random());
const b = op.inValueSlider("b", Math.random());
const a = op.inValueSlider("a", 1);
r.setUiAttribs({ "colorPick": true });

// const uniColor=new CGL.Uniform(shader,'4f','color',r,g,b,a);
const colUni = shader.addUniformFrag("4f", "color", r, g, b, a);

shader.uniformColorDiffuse = colUni;

// diffuse outTexture

const diffuseTexture = op.inTexture("texture");
let diffuseTextureUniform = null;
diffuseTexture.onChange = updateDiffuseTexture;

const colorizeTexture = op.inValueBool("colorizeTexture", false);
const vertexColors = op.inValueBool("Vertex Colors", false);

// opacity texture
const textureOpacity = op.inTexture("textureOpacity");
let textureOpacityUniform = null;

const alphaMaskSource = op.inSwitch("Alpha Mask Source", ["Luminance", "R", "G", "B", "A", "1-A", "1-R"], "Luminance");
alphaMaskSource.setUiAttribs({ "greyout": true });
textureOpacity.onChange = updateOpacity;

const texCoordAlpha = op.inValueBool("Opacity TexCoords Transform", false);
const discardTransPxl = op.inValueBool("Discard Transparent Pixels");

// texture coords
const
    diffuseRepeatX = op.inValue("diffuseRepeatX", 1),
    diffuseRepeatY = op.inValue("diffuseRepeatY", 1),
    diffuseOffsetX = op.inValue("Tex Offset X", 0),
    diffuseOffsetY = op.inValue("Tex Offset Y", 0),
    cropRepeat = op.inBool("Crop TexCoords", false);

shader.addUniformFrag("f", "diffuseRepeatX", diffuseRepeatX);
shader.addUniformFrag("f", "diffuseRepeatY", diffuseRepeatY);
shader.addUniformFrag("f", "texOffsetX", diffuseOffsetX);
shader.addUniformFrag("f", "texOffsetY", diffuseOffsetY);

const doBillboard = op.inValueBool("billboard", false);

alphaMaskSource.onChange =
    doBillboard.onChange =
    discardTransPxl.onChange =
    texCoordAlpha.onChange =
    cropRepeat.onChange =
    vertexColors.onChange =
    colorizeTexture.onChange = updateDefines;

op.setPortGroup("Color", [r, g, b, a]);
op.setPortGroup("Color Texture", [diffuseTexture, vertexColors, colorizeTexture]);
op.setPortGroup("Opacity", [textureOpacity, alphaMaskSource, discardTransPxl, texCoordAlpha]);
op.setPortGroup("Texture Transform", [diffuseRepeatX, diffuseRepeatY, diffuseOffsetX, diffuseOffsetY, cropRepeat]);

updateOpacity();
updateDiffuseTexture();

op.preRender = function ()
{
    shader.bind();
    doRender();
};

function doRender()
{
    if (!shader) return;

    cgl.pushShader(shader);
    shader.popTextures();

    if (diffuseTextureUniform && diffuseTexture.get()) shader.pushTexture(diffuseTextureUniform, diffuseTexture.get());
    if (textureOpacityUniform && textureOpacity.get()) shader.pushTexture(textureOpacityUniform, textureOpacity.get());

    trigger.trigger();

    cgl.popShader();
}

function updateOpacity()
{
    if (textureOpacity.get())
    {
        if (textureOpacityUniform !== null) return;
        shader.removeUniform("texOpacity");
        shader.define("HAS_TEXTURE_OPACITY");
        if (!textureOpacityUniform)textureOpacityUniform = new CGL.Uniform(shader, "t", "texOpacity");
    }
    else
    {
        shader.removeUniform("texOpacity");
        shader.removeDefine("HAS_TEXTURE_OPACITY");
        textureOpacityUniform = null;
    }

    updateDefines();
}

function updateDiffuseTexture()
{
    if (diffuseTexture.get())
    {
        if (!shader.hasDefine("HAS_TEXTURE_DIFFUSE"))shader.define("HAS_TEXTURE_DIFFUSE");
        if (!diffuseTextureUniform)diffuseTextureUniform = new CGL.Uniform(shader, "t", "texDiffuse");
    }
    else
    {
        shader.removeUniform("texDiffuse");
        shader.removeDefine("HAS_TEXTURE_DIFFUSE");
        diffuseTextureUniform = null;
    }
    updateUi();
}

function updateUi()
{
    const hasTexture = diffuseTexture.isLinked() || textureOpacity.isLinked();
    diffuseRepeatX.setUiAttribs({ "greyout": !hasTexture });
    diffuseRepeatY.setUiAttribs({ "greyout": !hasTexture });
    diffuseOffsetX.setUiAttribs({ "greyout": !hasTexture });
    diffuseOffsetY.setUiAttribs({ "greyout": !hasTexture });
    colorizeTexture.setUiAttribs({ "greyout": !hasTexture });

    alphaMaskSource.setUiAttribs({ "greyout": !textureOpacity.get() });
    texCoordAlpha.setUiAttribs({ "greyout": !textureOpacity.get() });

    let notUsingColor = true;
    notUsingColor = diffuseTexture.get() && !colorizeTexture.get();
    r.setUiAttribs({ "greyout": notUsingColor });
    g.setUiAttribs({ "greyout": notUsingColor });
    b.setUiAttribs({ "greyout": notUsingColor });
}

function updateDefines()
{
    shader.toggleDefine("VERTEX_COLORS", vertexColors.get());
    shader.toggleDefine("CROP_TEXCOORDS", cropRepeat.get());
    shader.toggleDefine("COLORIZE_TEXTURE", colorizeTexture.get());
    shader.toggleDefine("TRANSFORMALPHATEXCOORDS", texCoordAlpha.get());
    shader.toggleDefine("DISCARDTRANS", discardTransPxl.get());
    shader.toggleDefine("BILLBOARD", doBillboard.get());

    shader.toggleDefine("ALPHA_MASK_ALPHA", alphaMaskSource.get() == "A");
    shader.toggleDefine("ALPHA_MASK_IALPHA", alphaMaskSource.get() == "1-A");
    shader.toggleDefine("ALPHA_MASK_IR", alphaMaskSource.get() == "1-R");
    shader.toggleDefine("ALPHA_MASK_LUMI", alphaMaskSource.get() == "Luminance");
    shader.toggleDefine("ALPHA_MASK_R", alphaMaskSource.get() == "R");
    shader.toggleDefine("ALPHA_MASK_G", alphaMaskSource.get() == "G");
    shader.toggleDefine("ALPHA_MASK_B", alphaMaskSource.get() == "B");
    updateUi();
}


};

Ops.Gl.Shader.BasicMaterial_v3.prototype = new CABLES.Op();
CABLES.OPS["ec55d252-3843-41b1-b731-0482dbd9e72b"]={f:Ops.Gl.Shader.BasicMaterial_v3,objName:"Ops.Gl.Shader.BasicMaterial_v3"};




// **************************************************************
// 
// Ops.Gl.Meshes.Rectangle_v4
// 
// **************************************************************

Ops.Gl.Meshes.Rectangle_v4 = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    render = op.inTrigger("render"),
    doRender = op.inValueBool("Render Mesh", true),
    width = op.inValue("width", 1),
    height = op.inValue("height", 1),
    pivotX = op.inSwitch("pivot x", ["left", "center", "right"], "center"),
    pivotY = op.inSwitch("pivot y", ["top", "center", "bottom"], "center"),
    axis = op.inSwitch("axis", ["xy", "xz"], "xy"),
    flipTcX = op.inBool("Flip TexCoord X", false),
    flipTcY = op.inBool("Flip TexCoord Y", true),
    nColumns = op.inValueInt("num columns", 1),
    nRows = op.inValueInt("num rows", 1),
    trigger = op.outTrigger("trigger"),
    geomOut = op.outObject("geometry", null, "geometry");

geomOut.ignoreValueSerialize = true;

// const cgl = op.patch.cg || op.patch.cgl;
const geom = new CGL.Geometry("rectangle");

doRender.setUiAttribs({ "title": "Render" });
render.setUiAttribs({ "title": "Trigger" });
trigger.setUiAttribs({ "title": "Next" });
op.setPortGroup("Pivot", [pivotX, pivotY, axis]);
op.setPortGroup("Size", [width, height]);
op.setPortGroup("Structure", [nColumns, nRows]);
op.toWorkPortsNeedToBeLinked(render);
op.toWorkShouldNotBeChild("Ops.Gl.TextureEffects.ImageCompose", CABLES.OP_PORT_TYPE_TRIGGER);

const AXIS_XY = 0;
const AXIS_XZ = 1;

let curAxis = AXIS_XY;
let mesh = null;
let needsRebuild = true;
let doScale = true;

const vScale = vec3.create();
vec3.set(vScale, 1, 1, 1);

axis.onChange =
    pivotX.onChange =
    pivotY.onChange =
    flipTcX.onChange =
    flipTcY.onChange =
    nRows.onChange =
    nColumns.onChange = rebuildLater;
updateScale();

width.onChange =
    height.onChange =
    () =>
    {
        if (doScale) updateScale();
        else needsRebuild = true;
    };

function updateScale()
{
    if (curAxis === AXIS_XY) vec3.set(vScale, width.get(), height.get(), 1);
    if (curAxis === AXIS_XZ) vec3.set(vScale, width.get(), 1, height.get());
}

geomOut.onLinkChanged = () =>
{
    doScale = !geomOut.isLinked();
    updateScale();
    needsRebuild = true;
};

function rebuildLater()
{
    needsRebuild = true;
}

render.onTriggered = () =>
{
    if (needsRebuild) rebuild();
    const cg = op.patch.cg;
    if (cg && mesh && doRender.get())
    {
        if (doScale)
        {
            cg.pushModelMatrix();
            mat4.scale(cg.mMatrix, cg.mMatrix, vScale);
        }

        mesh.render(cg.getShader());

        if (doScale) cg.popModelMatrix();
    }

    trigger.trigger();
};

op.onDelete = () =>
{
    if (mesh) mesh.dispose();
    rebuildLater();
};

function rebuild()
{
    if (axis.get() == "xy") curAxis = AXIS_XY;
    if (axis.get() == "xz") curAxis = AXIS_XZ;

    updateScale();
    let w = width.get();
    let h = height.get();

    if (doScale) w = h = 1;

    let x = 0;
    let y = 0;

    if (pivotX.get() == "center") x = 0;
    else if (pivotX.get() == "right") x = -w / 2;
    else if (pivotX.get() == "left") x = +w / 2;

    if (pivotY.get() == "center") y = 0;
    else if (pivotY.get() == "top") y = -h / 2;
    else if (pivotY.get() == "bottom") y = +h / 2;

    const numRows = Math.max(1, Math.round(nRows.get()));
    const numColumns = Math.max(1, Math.round(nColumns.get()));

    const stepColumn = w / numColumns;
    const stepRow = h / numRows;

    const indices = [];
    const tc = new Float32Array((numColumns + 1) * (numRows + 1) * 2);
    const verts = new Float32Array((numColumns + 1) * (numRows + 1) * 3);
    const norms = new Float32Array((numColumns + 1) * (numRows + 1) * 3);
    const tangents = new Float32Array((numColumns + 1) * (numRows + 1) * 3);
    const biTangents = new Float32Array((numColumns + 1) * (numRows + 1) * 3);

    let idxTc = 0;
    let idxVert = 0;
    let idxNorms = 0;
    let idxTangent = 0;
    let idxBiTangent = 0;

    for (let r = 0; r <= numRows; r++)
    {
        for (let c = 0; c <= numColumns; c++)
        {
            verts[idxVert++] = c * stepColumn - w / 2 + x;
            if (curAxis == AXIS_XZ) verts[idxVert++] = 0;
            verts[idxVert++] = r * stepRow - h / 2 + y;

            if (curAxis == AXIS_XY)verts[idxVert++] = 0;

            tc[idxTc++] = c / numColumns;
            tc[idxTc++] = r / numRows;

            if (curAxis == AXIS_XY) // default
            {
                norms[idxNorms++] = 0;
                norms[idxNorms++] = 0;
                norms[idxNorms++] = 1;

                tangents[idxTangent++] = 1;
                tangents[idxTangent++] = 0;
                tangents[idxTangent++] = 0;

                biTangents[idxBiTangent++] = 0;
                biTangents[idxBiTangent++] = 1;
                biTangents[idxBiTangent++] = 0;
            }
            else if (curAxis == AXIS_XZ)
            {
                norms[idxNorms++] = 0;
                norms[idxNorms++] = 1;
                norms[idxNorms++] = 0;

                biTangents[idxBiTangent++] = 0;
                biTangents[idxBiTangent++] = 0;
                biTangents[idxBiTangent++] = 1;
            }
        }
    }

    indices.length = numColumns * numRows * 6;
    let idx = 0;

    for (let c = 0; c < numColumns; c++)
    {
        for (let r = 0; r < numRows; r++)
        {
            const ind = c + (numColumns + 1) * r;
            const v1 = ind;
            const v2 = ind + 1;
            const v3 = ind + numColumns + 1;
            const v4 = ind + 1 + numColumns + 1;

            if (curAxis == AXIS_XY) // default
            {
                indices[idx++] = v1;
                indices[idx++] = v2;
                indices[idx++] = v3;

                indices[idx++] = v3;
                indices[idx++] = v2;
                indices[idx++] = v4;
            }
            else
            if (curAxis == AXIS_XZ)
            {
                indices[idx++] = v1;
                indices[idx++] = v3;
                indices[idx++] = v2;

                indices[idx++] = v2;
                indices[idx++] = v3;
                indices[idx++] = v4;
            }
        }
    }

    if (flipTcY.get()) for (let i = 0; i < tc.length; i += 2)tc[i + 1] = 1.0 - tc[i + 1];
    if (flipTcX.get()) for (let i = 0; i < tc.length; i += 2)tc[i] = 1.0 - tc[i];

    geom.clear();
    geom.vertices = verts;
    geom.texCoords = tc;
    geom.verticesIndices = indices;
    geom.vertexNormals = norms;
    geom.tangents = tangents;
    geom.biTangents = biTangents;

    if (op.patch.cg)
        if (!mesh) mesh = op.patch.cg.createMesh(geom, { "opId": op.id });
        else mesh.setGeom(geom);

    geomOut.setRef(geom);
    needsRebuild = false;
}


};

Ops.Gl.Meshes.Rectangle_v4.prototype = new CABLES.Op();
CABLES.OPS["cc8c3ede-7103-410b-849f-a645793cab39"]={f:Ops.Gl.Meshes.Rectangle_v4,objName:"Ops.Gl.Meshes.Rectangle_v4"};




// **************************************************************
// 
// Ops.Gl.Matrix.Scale
// 
// **************************************************************

Ops.Gl.Matrix.Scale = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    render = op.inTrigger("render"),
    scale = op.inValueFloat("scale", 1.0),
    scaleX = op.inValueFloat("x", 1),
    scaleY = op.inValueFloat("y", 1),
    scaleZ = op.inValueFloat("z", 1),
    trigger = op.outTrigger("trigger");

op.setPortGroup("Axis", [scaleX, scaleY, scaleZ]);

const vScale = vec3.create();

scaleX.onChange =
    scaleY.onChange =
    scaleZ.onChange =
    scale.onChange = scaleChanged;

scaleChanged();

render.onTriggered = function ()
{
    const cgl = op.patch.cg || op.patch.cgl;
    cgl.pushModelMatrix();
    mat4.scale(cgl.mMatrix, cgl.mMatrix, vScale);
    trigger.trigger();
    cgl.popModelMatrix();
};

function scaleChanged()
{
    const s = scale.get();
    vec3.set(vScale, s * scaleX.get(), s * scaleY.get(), s * scaleZ.get());
}


};

Ops.Gl.Matrix.Scale.prototype = new CABLES.Op();
CABLES.OPS["50e7f565-0cdb-47ca-912b-87c04e2f00e3"]={f:Ops.Gl.Matrix.Scale,objName:"Ops.Gl.Matrix.Scale"};




// **************************************************************
// 
// Ops.Math.Sum
// 
// **************************************************************

Ops.Math.Sum = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    number1 = op.inValueFloat("number1", 0),
    number2 = op.inValueFloat("number2", 0),
    result = op.outNumber("result");

op.setUiAttribs({ "mathTitle": true });

number1.onChange =
number2.onChange = exec;
exec();

function exec()
{
    const v = number1.get() + number2.get();
    if (!isNaN(v))
        result.set(v);
}


};

Ops.Math.Sum.prototype = new CABLES.Op();
CABLES.OPS["c8fb181e-0b03-4b41-9e55-06b6267bc634"]={f:Ops.Math.Sum,objName:"Ops.Math.Sum"};




// **************************************************************
// 
// Ops.Math.Divide
// 
// **************************************************************

Ops.Math.Divide = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    number1 = op.inValueFloat("number1", 1),
    number2 = op.inValueFloat("number2", 2),
    result = op.outNumber("result");

op.setUiAttribs({ "mathTitle": true });

number1.onChange = number2.onChange = exec;
exec();

function exec()
{
    result.set(number1.get() / number2.get());
}


};

Ops.Math.Divide.prototype = new CABLES.Op();
CABLES.OPS["86fcfd8c-038d-4b91-9820-a08114f6b7eb"]={f:Ops.Math.Divide,objName:"Ops.Math.Divide"};




// **************************************************************
// 
// Ops.Trigger.Sequence
// 
// **************************************************************

Ops.Trigger.Sequence = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    exe = op.inTrigger("exe"),
    cleanup = op.inTriggerButton("Clean up connections");

op.setUiAttrib({ "resizable": true, "resizableY": false, "stretchPorts": true });
const
    exes = [],
    triggers = [],
    num = 16;

let
    updateTimeout = null,
    connectedOuts = [];

exe.onTriggered = triggerAll;
cleanup.onTriggered = clean;
cleanup.setUiAttribs({ "hideParam": true, "hidePort": true });

for (let i = 0; i < num; i++)
{
    const p = op.outTrigger("trigger " + i);
    triggers.push(p);
    p.onLinkChanged = updateButton;

    if (i < num - 1)
    {
        let newExe = op.inTrigger("exe " + i);
        newExe.onTriggered = triggerAll;
        exes.push(newExe);
    }
}

updateConnected();

function updateConnected()
{
    connectedOuts.length = 0;
    for (let i = 0; i < triggers.length; i++)
        if (triggers[i].links.length > 0) connectedOuts.push(triggers[i]);
}

function updateButton()
{
    updateConnected();
    clearTimeout(updateTimeout);
    updateTimeout = setTimeout(() =>
    {
        let show = false;
        for (let i = 0; i < triggers.length; i++)
            if (triggers[i].links.length > 1) show = true;

        cleanup.setUiAttribs({ "hideParam": !show });

        if (op.isCurrentUiOp()) op.refreshParams();
    }, 60);
}

function triggerAll()
{
    // for (let i = 0; i < triggers.length; i++) triggers[i].trigger();
    for (let i = 0; i < connectedOuts.length; i++) connectedOuts[i].trigger();
}

function clean()
{
    let count = 0;
    for (let i = 0; i < triggers.length; i++)
    {
        let removeLinks = [];

        if (triggers[i].links.length > 1)
            for (let j = 1; j < triggers[i].links.length; j++)
            {
                while (triggers[count].links.length > 0) count++;

                removeLinks.push(triggers[i].links[j]);
                const otherPort = triggers[i].links[j].getOtherPort(triggers[i]);
                op.patch.link(op, "trigger " + count, otherPort.op, otherPort.name);
                count++;
            }

        for (let j = 0; j < removeLinks.length; j++) removeLinks[j].remove();
    }
    updateButton();
    updateConnected();
}


};

Ops.Trigger.Sequence.prototype = new CABLES.Op();
CABLES.OPS["a466bc1f-06e9-4595-8849-bffb9fe22f99"]={f:Ops.Trigger.Sequence,objName:"Ops.Trigger.Sequence"};




// **************************************************************
// 
// Ops.Boolean.Not
// 
// **************************************************************

Ops.Boolean.Not = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    bool = op.inValueBool("Boolean"),
    outbool = op.outBoolNum("Result");

bool.changeAlways = true;

bool.onChange = function ()
{
    outbool.set((!bool.get()));
};


};

Ops.Boolean.Not.prototype = new CABLES.Op();
CABLES.OPS["6d123c9f-7485-4fd9-a5c2-76e59dcbeb34"]={f:Ops.Boolean.Not,objName:"Ops.Boolean.Not"};




// **************************************************************
// 
// Ops.Trigger.GateTrigger
// 
// **************************************************************

Ops.Trigger.GateTrigger = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    exe = op.inTrigger('Execute'),
    passThrough = op.inValueBool('Pass Through',true),
    triggerOut = op.outTrigger('Trigger out');

exe.onTriggered = function()
{
    if(passThrough.get())
        triggerOut.trigger();
}


};

Ops.Trigger.GateTrigger.prototype = new CABLES.Op();
CABLES.OPS["65e8b8a2-ba13-485f-883a-2bcf377989da"]={f:Ops.Trigger.GateTrigger,objName:"Ops.Trigger.GateTrigger"};




// **************************************************************
// 
// Ops.Cables.UIMode
// 
// **************************************************************

Ops.Cables.UIMode = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    outUI = op.outBoolNum("UI", op.patch.isEditorMode()),
    outOverlay = op.outBoolNum("Overlay Mode", false),
    outRemoteViewer = op.outBoolNum("Remote Viewer", window.gui ? window.gui.isRemoteClient : false),
    outStandalone = op.outBoolNum("Is Standalone", (CABLES.platform && CABLES.platform.frontendOptions.isStandalone )),
    outCanvasMode = op.outNumber("Canvas Mode"),
    outPatchVisible = op.outBoolNum("Patch Field Visible");

if (CABLES.UI)
{
    outOverlay.set(gui.shouldDrawOverlay);

    gui.on("overlaysChanged", (active) =>
    {
        outOverlay.set(active);
    });

    gui.on("canvasModeChange", () =>
    {
        outCanvasMode.set(gui.canvasManager.mode);
        outPatchVisible.set(gui.patchView.element.classList.contains("hidden"));
    });
}


};

Ops.Cables.UIMode.prototype = new CABLES.Op();
CABLES.OPS["7c110d60-829f-4b06-b3e4-0af911550570"]={f:Ops.Cables.UIMode,objName:"Ops.Cables.UIMode"};




// **************************************************************
// 
// Ops.Html.Cursor_v2
// 
// **************************************************************

Ops.Html.Cursor_v2 = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    exec = op.inTriggerButton("Update"),
    cursorPort = op.inDropDown("CSS Cursors", ["auto", "crosshair", "pointer", "hand", "move", "n-resize", "ne-resize", "e-resize", "se-resize", "s-resize", "sw-resize", "w-resize", "nw-resize", "ew-resize", "text", "wait", "help", "none"], "pointer"),
    parentEle = op.inBool("Set Parent Element", true),
    next = op.outTrigger("Next");

const cursorStr = "";
exec.onTriggered = update;

let lastParentCursor = "";

exec.onLinkChanged =
next.onLinkChanged = () =>
{
    op.patch.cgl.setCursor("auto");
};

parentEle.onChange = () =>
{
    if (!parentEle.get())
    {
        lastParentCursor = "auto";
        op.patch.cgl.canvas.parentElement.style.cursor = "auto";
    }
};

function update()
{
    let arg2 = null;

    op.patch.cgl.setCursor(cursorPort.get(), arg2);

    if (parentEle.get() && lastParentCursor != cursorPort.get())
        op.patch.cgl.canvas.parentElement.style.cursor = cursorPort.get();

    next.trigger();
}


};

Ops.Html.Cursor_v2.prototype = new CABLES.Op();
CABLES.OPS["39486799-bdad-42d3-a300-4642c23578a8"]={f:Ops.Html.Cursor_v2,objName:"Ops.Html.Cursor_v2"};




// **************************************************************
// 
// Ops.Ui.SubPatchInput
// 
// **************************************************************

Ops.Ui.SubPatchInput = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
op.innerInput = true;

const goto = op.inTriggerButton("Goto SubPatchOp");
goto.setUiAttribs({ "hidePort": true });
goto.onTriggered = () =>
{
    const parent = op.patch.getSubPatchOuterOp(op.uiAttribs.subPatch);
    gui.patchView.centerSelectOp(parent.id);
};


};

Ops.Ui.SubPatchInput.prototype = new CABLES.Op();
CABLES.OPS["c4e4e933-136e-479e-8de8-0b35b75d9217"]={f:Ops.Ui.SubPatchInput,objName:"Ops.Ui.SubPatchInput"};




// **************************************************************
// 
// Ops.Ui.SubPatchOutput
// 
// **************************************************************

Ops.Ui.SubPatchOutput = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
op.innerOutput = true;


};

Ops.Ui.SubPatchOutput.prototype = new CABLES.Op();
CABLES.OPS["02d45073-7936-4830-81ad-59a162febf1f"]={f:Ops.Ui.SubPatchOutput,objName:"Ops.Ui.SubPatchOutput"};




// **************************************************************
// 
// Ops.Gl.GLTF.GltfScene_v4
// 
// **************************************************************

Ops.Gl.GLTF.GltfScene_v4 = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={"inc_camera_js":"const gltfCamera = class\n{\n    constructor(gltf, node)\n    {\n        this.node = node;\n        this.name = node.name;\n        // console.log(gltf);\n        this.config = gltf.json.cameras[node.camera];\n\n        this.pos = vec3.create();\n        this.quat = quat.create();\n        this.vCenter = vec3.create();\n        this.vUp = vec3.create();\n        this.vMat = mat4.create();\n    }\n\n    updateAnim(time)\n    {\n        if (this.node && this.node._animTrans)\n        {\n            vec3.set(this.pos,\n                this.node._animTrans[0].getValue(time),\n                this.node._animTrans[1].getValue(time),\n                this.node._animTrans[2].getValue(time));\n\n            quat.set(this.quat,\n                this.node._animRot[0].getValue(time),\n                this.node._animRot[1].getValue(time),\n                this.node._animRot[2].getValue(time),\n                this.node._animRot[3].getValue(time));\n        }\n    }\n\n    start(time)\n    {\n        if (cgl.frameStore.shadowPass) return;\n\n        this.updateAnim(time);\n        const asp = cgl.getViewPort()[2] / cgl.getViewPort()[3];\n\n        cgl.pushPMatrix();\n        // mat4.perspective(\n        //     cgl.pMatrix,\n        //     this.config.perspective.yfov*0.5,\n        //     asp,\n        //     this.config.perspective.znear,\n        //     this.config.perspective.zfar);\n\n        cgl.pushViewMatrix();\n        // mat4.identity(cgl.vMatrix);\n\n        // if(this.node && this.node.parent)\n        // {\n        //     console.log(this.node.parent)\n        // vec3.add(this.pos,this.pos,this.node.parent._node.translation);\n        // vec3.sub(this.vCenter,this.vCenter,this.node.parent._node.translation);\n        // mat4.translate(cgl.vMatrix,cgl.vMatrix,\n        // [\n        //     -this.node.parent._node.translation[0],\n        //     -this.node.parent._node.translation[1],\n        //     -this.node.parent._node.translation[2]\n        // ])\n        // }\n\n        // vec3.set(this.vUp, 0, 1, 0);\n        // vec3.set(this.vCenter, 0, -1, 0);\n        // // vec3.set(this.vCenter, 0, 1, 0);\n        // vec3.transformQuat(this.vCenter, this.vCenter, this.quat);\n        // vec3.normalize(this.vCenter, this.vCenter);\n        // vec3.add(this.vCenter, this.vCenter, this.pos);\n\n        // mat4.lookAt(cgl.vMatrix, this.pos, this.vCenter, this.vUp);\n\n        let mv = mat4.create();\n        mat4.invert(mv, this.node.modelMatAbs());\n\n        // console.log(this.node.modelMatAbs());\n\n        this.vMat = mv;\n\n        mat4.identity(cgl.vMatrix);\n        // console.log(mv);\n        mat4.mul(cgl.vMatrix, cgl.vMatrix, mv);\n    }\n\n    end()\n    {\n        if (cgl.frameStore.shadowPass) return;\n        cgl.popPMatrix();\n        cgl.popViewMatrix();\n    }\n};\n","inc_gltf_js":"const le = true; // little endian\n\nconst Gltf = class\n{\n    constructor()\n    {\n        this.json = {};\n        this.accBuffers = [];\n        this.meshes = [];\n        this.nodes = [];\n        this.shaders = [];\n        this.timing = [];\n        this.cams = [];\n        this.startTime = performance.now();\n        this.bounds = new CABLES.CG.BoundingBox();\n        this.loaded = Date.now();\n        this.accBuffersDelete = [];\n    }\n\n    getNode(n)\n    {\n        for (let i = 0; i < this.nodes.length; i++)\n        {\n            if (this.nodes[i].name == n) return this.nodes[i];\n        }\n    }\n\n    unHideAll()\n    {\n        for (let i = 0; i < this.nodes.length; i++)\n        {\n            this.nodes[i].unHide();\n        }\n    }\n};\n\nfunction Utf8ArrayToStr(array)\n{\n    if (window.TextDecoder) return new TextDecoder(\"utf-8\").decode(array);\n\n    let out, i, len, c;\n    let char2, char3;\n\n    out = \"\";\n    len = array.length;\n    i = 0;\n    while (i < len)\n    {\n        c = array[i++];\n        switch (c >> 4)\n        {\n        case 0: case 1: case 2: case 3: case 4: case 5: case 6: case 7:\n            // 0xxxxxxx\n            out += String.fromCharCode(c);\n            break;\n        case 12: case 13:\n            // 110x xxxx   10xx xxxx\n            char2 = array[i++];\n            out += String.fromCharCode(((c & 0x1F) << 6) | (char2 & 0x3F));\n            break;\n        case 14:\n            // 1110 xxxx  10xx xxxx  10xx xxxx\n            char2 = array[i++];\n            char3 = array[i++];\n            out += String.fromCharCode(((c & 0x0F) << 12) |\n                    ((char2 & 0x3F) << 6) |\n                    ((char3 & 0x3F) << 0));\n            break;\n        }\n    }\n\n    return out;\n}\n\nfunction readChunk(dv, bArr, arrayBuffer, offset)\n{\n    const chunk = {};\n\n    if (offset >= dv.byteLength)\n    {\n        // op.log(\"could not read chunk...\");\n        return;\n    }\n    chunk.size = dv.getUint32(offset + 0, le);\n\n    // chunk.type = new TextDecoder(\"utf-8\").decode(bArr.subarray(offset+4, offset+4+4));\n    chunk.type = Utf8ArrayToStr(bArr.subarray(offset + 4, offset + 4 + 4));\n\n    if (chunk.type == \"BIN\\0\")\n    {\n        // console.log(chunk.size,arrayBuffer.length,offset);\n        // try\n        // {\n        chunk.dataView = new DataView(arrayBuffer, offset + 8, chunk.size);\n        // }\n        // catch(e)\n        // {\n        //     chunk.dataView = null;\n        //     console.log(e);\n        // }\n    }\n    else\n    if (chunk.type == \"JSON\")\n    {\n        const json = Utf8ArrayToStr(bArr.subarray(offset + 8, offset + 8 + chunk.size));\n\n        try\n        {\n            const obj = JSON.parse(json);\n            chunk.data = obj;\n            outGenerator.set(obj.asset.generator);\n        }\n        catch (e)\n        {\n        }\n    }\n    else\n    {\n        op.warn(\"unknown type\", chunk.type);\n    }\n\n    return chunk;\n}\n\nfunction loadAnims(gltf)\n{\n    const uniqueAnimNames = {};\n\n    for (let i = 0; i < gltf.json.animations.length; i++)\n    {\n        const an = gltf.json.animations[i];\n\n        an.name = an.name || \"unknown\";\n\n        for (let ia = 0; ia < an.channels.length; ia++)\n        {\n            const chan = an.channels[ia];\n\n            const node = gltf.nodes[chan.target.node];\n            const sampler = an.samplers[chan.sampler];\n\n            const acc = gltf.json.accessors[sampler.input];\n            const bufferIn = gltf.accBuffers[sampler.input];\n\n            const accOut = gltf.json.accessors[sampler.output];\n            const bufferOut = gltf.accBuffers[sampler.output];\n\n            gltf.accBuffersDelete.push(sampler.output, sampler.input);\n\n            if (bufferIn && bufferOut)\n            {\n                let numComps = 1;\n                if (accOut.type === \"VEC2\")numComps = 2;\n                else if (accOut.type === \"VEC3\")numComps = 3;\n                else if (accOut.type === \"VEC4\")numComps = 4;\n                else if (accOut.type === \"SCALAR\")\n                {\n                    numComps = bufferOut.length / bufferIn.length; // is this really the way to find out ? cant find any other way,except number of morph targets, but not really connected...\n                }\n                else op.log(\"[] UNKNOWN accOut.type\", accOut.type);\n\n                const anims = [];\n\n                uniqueAnimNames[an.name] = true;\n\n                for (let k = 0; k < numComps; k++)\n                {\n                    const newAnim = new CABLES.Anim();\n                    // newAnim.name=an.name;\n                    anims.push(newAnim);\n                }\n\n                if (sampler.interpolation === \"LINEAR\") {}\n                else if (sampler.interpolation === \"STEP\") for (let k = 0; k < numComps; k++) anims[k].defaultEasing = CABLES.EASING_ABSOLUTE;\n                else if (sampler.interpolation === \"CUBICSPLINE\") for (let k = 0; k < numComps; k++) anims[k].defaultEasing = CABLES.EASING_CUBICSPLINE;\n                else op.warn(\"unknown interpolation\", sampler.interpolation);\n\n                // console.log(bufferOut)\n\n                // if there is no keyframe for time 0 copy value of first keyframe at time 0\n                if (bufferIn[0] !== 0.0)\n                    for (let k = 0; k < numComps; k++)\n                        anims[k].setValue(0, bufferOut[0 * numComps + k]);\n\n                for (let j = 0; j < bufferIn.length; j++)\n                {\n                    maxTime = Math.max(bufferIn[j], maxTime);\n\n                    for (let k = 0; k < numComps; k++)\n                    {\n                        if (anims[k].defaultEasing === CABLES.EASING_CUBICSPLINE)\n                        {\n                            const idx = ((j * numComps) * 3 + k);\n\n                            const key = anims[k].setValue(bufferIn[j], bufferOut[idx + numComps]);\n                            key.bezTangIn = bufferOut[idx];\n                            key.bezTangOut = bufferOut[idx + (numComps * 2)];\n\n                            // console.log(an.name,k,bufferOut[idx+1]);\n                        }\n                        else\n                        {\n                            // console.log(an.name,k,bufferOut[j * numComps + k]);\n                            anims[k].setValue(bufferIn[j], bufferOut[j * numComps + k]);\n                        }\n                    }\n                }\n\n                node.setAnim(chan.target.path, an.name, anims);\n            }\n            else\n            {\n                op.warn(\"loadAmins bufferIn undefined \", bufferIn === undefined);\n                op.warn(\"loadAmins bufferOut undefined \", bufferOut === undefined);\n                op.warn(\"loadAmins \", sampler, accOut);\n                op.warn(\"loadAmins num accBuffers\", gltf.accBuffers.length);\n                op.warn(\"loadAmins num accessors\", gltf.json.accessors.length);\n            }\n        }\n    }\n\n    gltf.uniqueAnimNames = uniqueAnimNames;\n\n    outAnims.setRef(Object.keys(uniqueAnimNames));\n}\n\nfunction loadCams(gltf)\n{\n    if (!gltf || !gltf.json.cameras) return;\n\n    gltf.cameras = gltf.cameras || [];\n\n    for (let i = 0; i < gltf.nodes.length; i++)\n    {\n        if (gltf.nodes[i].hasOwnProperty(\"camera\"))\n        {\n            const cam = new gltfCamera(gltf, gltf.nodes[i]);\n            gltf.cameras.push(cam);\n        }\n    }\n}\n\nfunction loadAfterDraco()\n{\n    if (!window.DracoDecoder)\n    {\n        setTimeout(() =>\n        {\n            loadAfterDraco();\n        }, 100);\n    }\n\n    reloadSoon();\n}\n\nfunction parseGltf(arrayBuffer)\n{\n    const CHUNK_HEADER_SIZE = 8;\n\n    let j = 0, i = 0;\n\n    const gltf = new Gltf();\n    gltf.timing.push([\"Start parsing\", Math.round((performance.now() - gltf.startTime))]);\n\n    if (!arrayBuffer) return;\n    const byteArray = new Uint8Array(arrayBuffer);\n    let pos = 0;\n\n    // var string = new TextDecoder(\"utf-8\").decode(byteArray.subarray(pos, 4));\n    const string = Utf8ArrayToStr(byteArray.subarray(pos, 4));\n    pos += 4;\n    if (string != \"glTF\") return;\n\n    gltf.timing.push([\"dataview\", Math.round((performance.now() - gltf.startTime))]);\n\n    const dv = new DataView(arrayBuffer);\n    const version = dv.getUint32(pos, le);\n    pos += 4;\n    const size = dv.getUint32(pos, le);\n    pos += 4;\n\n    outVersion.set(version);\n\n    const chunks = [];\n    gltf.chunks = chunks;\n\n    chunks.push(readChunk(dv, byteArray, arrayBuffer, pos));\n    pos += chunks[0].size + CHUNK_HEADER_SIZE;\n    gltf.json = chunks[0].data;\n\n    gltf.cables = {\n        \"fileUrl\": inFile.get(),\n        \"shortFileName\": CABLES.basename(inFile.get())\n    };\n\n    outJson.setRef(gltf.json);\n    outExtensions.setRef(gltf.json.extensionsUsed || []);\n\n    let ch = readChunk(dv, byteArray, arrayBuffer, pos);\n    while (ch)\n    {\n        chunks.push(ch);\n        pos += ch.size + CHUNK_HEADER_SIZE;\n        ch = readChunk(dv, byteArray, arrayBuffer, pos);\n    }\n\n    gltf.chunks = chunks;\n\n    const views = chunks[0].data.bufferViews;\n    const accessors = chunks[0].data.accessors;\n\n    gltf.timing.push([\"Parse buffers\", Math.round((performance.now() - gltf.startTime))]);\n\n    if (gltf.json.extensionsUsed && gltf.json.extensionsUsed.indexOf(\"KHR_draco_mesh_compression\") > -1)\n    {\n        if (!window.DracoDecoder)\n        {\n            op.setUiError(\"gltfdraco\", \"GLTF draco compression lib not found / add draco op to your patch!\");\n\n            loadAfterDraco();\n            return gltf;\n        }\n        else\n        {\n            gltf.useDraco = true;\n        }\n    }\n\n    op.setUiError(\"gltfdraco\", null);\n    // let accPos = (view.byteOffset || 0) + (acc.byteOffset || 0);\n\n    if (views)\n    {\n        for (i = 0; i < accessors.length; i++)\n        {\n            const acc = accessors[i];\n            const view = views[acc.bufferView];\n\n            let numComps = 0;\n            if (acc.type == \"SCALAR\")numComps = 1;\n            else if (acc.type == \"VEC2\")numComps = 2;\n            else if (acc.type == \"VEC3\")numComps = 3;\n            else if (acc.type == \"VEC4\")numComps = 4;\n            else if (acc.type == \"MAT4\")numComps = 16;\n            else console.error(\"unknown accessor type\", acc.type);\n\n            //   const decoder = new decoderModule.Decoder();\n            //   const decodedGeometry = decodeDracoData(data, decoder);\n            //   // Encode mesh\n            //   encodeMeshToFile(decodedGeometry, decoder);\n\n            //   decoderModule.destroy(decoder);\n            //   decoderModule.destroy(decodedGeometry);\n\n            // 5120 (BYTE)\t1\n            // 5121 (UNSIGNED_BYTE)\t1\n            // 5122 (SHORT)\t2\n\n            if (chunks[1].dataView)\n            {\n                if (view)\n                {\n                    const num = acc.count * numComps;\n                    let accPos = (view.byteOffset || 0) + (acc.byteOffset || 0);\n                    let stride = view.byteStride || 0;\n                    let dataBuff = null;\n\n                    if (acc.componentType == 5126 || acc.componentType == 5125) // 4byte FLOAT or INT\n                    {\n                        stride = stride || 4;\n\n                        const isInt = acc.componentType == 5125;\n                        if (isInt)dataBuff = new Uint32Array(num);\n                        else dataBuff = new Float32Array(num);\n\n                        dataBuff.cblStride = numComps;\n\n                        for (j = 0; j < num; j++)\n                        {\n                            if (isInt) dataBuff[j] = chunks[1].dataView.getUint32(accPos, le);\n                            else dataBuff[j] = chunks[1].dataView.getFloat32(accPos, le);\n\n                            if (stride != 4 && (j + 1) % numComps === 0)accPos += stride - (numComps * 4);\n                            accPos += 4;\n                        }\n                    }\n                    else if (acc.componentType == 5123) // UNSIGNED_SHORT\n                    {\n                        stride = stride || 2;\n\n                        dataBuff = new Uint16Array(num);\n                        dataBuff.cblStride = stride;\n\n                        for (j = 0; j < num; j++)\n                        {\n                            dataBuff[j] = chunks[1].dataView.getUint16(accPos, le);\n\n                            if (stride != 2 && (j + 1) % numComps === 0) accPos += stride - (numComps * 2);\n\n                            accPos += 2;\n                        }\n                    }\n                    else if (acc.componentType == 5121) // UNSIGNED_BYTE\n                    {\n                        stride = stride || 1;\n\n                        dataBuff = new Uint8Array(num);\n                        dataBuff.cblStride = stride;\n\n                        for (j = 0; j < num; j++)\n                        {\n                            dataBuff[j] = chunks[1].dataView.getUint8(accPos, le);\n\n                            if (stride != 1 && (j + 1) % numComps === 0) accPos += stride - (numComps * 1);\n\n                            accPos += 1;\n                        }\n                    }\n\n                    else\n                    {\n                        console.error(\"unknown component type\", acc.componentType);\n                    }\n\n                    gltf.accBuffers.push(dataBuff);\n                }\n                else\n                {\n                    // console.log(\"has no dataview\");\n                }\n            }\n        }\n    }\n\n    gltf.timing.push([\"Parse mesh groups\", Math.round((performance.now() - gltf.startTime))]);\n\n    gltf.json.meshes = gltf.json.meshes || [];\n\n    if (gltf.json.meshes)\n    {\n        for (i = 0; i < gltf.json.meshes.length; i++)\n        {\n            const mesh = new gltfMeshGroup(gltf, gltf.json.meshes[i]);\n            gltf.meshes.push(mesh);\n        }\n    }\n\n    gltf.timing.push([\"Parse nodes\", Math.round((performance.now() - gltf.startTime))]);\n\n    for (i = 0; i < gltf.json.nodes.length; i++)\n    {\n        if (gltf.json.nodes[i].children)\n            for (j = 0; j < gltf.json.nodes[i].children.length; j++)\n            {\n                gltf.json.nodes[gltf.json.nodes[i].children[j]].isChild = true;\n            }\n    }\n\n    for (i = 0; i < gltf.json.nodes.length; i++)\n    {\n        const node = new gltfNode(gltf.json.nodes[i], gltf);\n        gltf.nodes.push(node);\n    }\n\n    for (i = 0; i < gltf.nodes.length; i++)\n    {\n        const node = gltf.nodes[i];\n\n        if (!node.children) continue;\n        for (let j = 0; j < node.children.length; j++)\n        {\n            gltf.nodes[node.children[j]].parent = node;\n        }\n    }\n\n    for (i = 0; i < gltf.nodes.length; i++)\n    {\n        gltf.nodes[i].initSkin();\n    }\n\n    needsMatUpdate = true;\n\n    gltf.timing.push([\"load anims\", Math.round((performance.now() - gltf.startTime))]);\n\n    if (gltf.json.animations) loadAnims(gltf);\n\n    gltf.timing.push([\"load cameras\", Math.round((performance.now() - gltf.startTime))]);\n\n    if (gltf.json.cameras) loadCams(gltf);\n\n    gltf.timing.push([\"finished\", Math.round((performance.now() - gltf.startTime))]);\n    return gltf;\n}\n","inc_mesh_js":"let gltfMesh = class\n{\n    constructor(name, prim, gltf, finished)\n    {\n        this.POINTS = 0;\n        this.LINES = 1;\n        this.LINE_LOOP = 2;\n        this.LINE_STRIP = 3;\n        this.TRIANGLES = 4;\n        this.TRIANGLE_STRIP = 5;\n        this.TRIANGLE_FAN = 6;\n\n        this.test = 0;\n        this.name = name;\n        this.submeshIndex = 0;\n        this.material = prim.material;\n        // console.log(prim);\n        this.mesh = null;\n        this.geom = new CGL.Geometry(\"gltf_\" + this.name);\n        this.geom.verticesIndices = [];\n        this.bounds = null;\n        this.primitive = 4;\n        this.morphTargetsRenderMod = null;\n        this.weights = prim.weights;\n\n        if (prim.hasOwnProperty(\"mode\")) this.primitive = prim.mode;\n\n        if (prim.hasOwnProperty(\"indices\")) this.geom.verticesIndices = gltf.accBuffers[prim.indices];\n\n        gltf.loadingMeshes = gltf.loadingMeshes || 0;\n        gltf.loadingMeshes++;\n\n        this.materialJson =\n            this._matPbrMetalness =\n            this._matPbrRoughness =\n            this._matDiffuseColor = null;\n\n        if (gltf.json.materials)\n        {\n            if (this.material != -1) this.materialJson = gltf.json.materials[this.material];\n\n            if (this.materialJson && this.materialJson.pbrMetallicRoughness)\n            {\n                if (!this.materialJson.pbrMetallicRoughness.hasOwnProperty(\"baseColorFactor\"))\n                {\n                    this._matDiffuseColor = [1, 1, 1, 1];\n                }\n                else\n                {\n                    this._matDiffuseColor = this.materialJson.pbrMetallicRoughness.baseColorFactor;\n                }\n\n                this._matDiffuseColor = this.materialJson.pbrMetallicRoughness.baseColorFactor;\n\n                if (!this.materialJson.pbrMetallicRoughness.hasOwnProperty(\"metallicFactor\"))\n                {\n                    this._matPbrMetalness = 1.0;\n                }\n                else\n                {\n                    this._matPbrMetalness = this.materialJson.pbrMetallicRoughness.metallicFactor || null;\n                }\n\n                if (!this.materialJson.pbrMetallicRoughness.hasOwnProperty(\"roughnessFactor\"))\n                {\n                    this._matPbrRoughness = 1.0;\n                }\n                else\n                {\n                    this._matPbrRoughness = this.materialJson.pbrMetallicRoughness.roughnessFactor || null;\n                }\n            }\n        }\n\n        if (gltf.useDraco && prim.extensions.KHR_draco_mesh_compression)\n        {\n            const view = gltf.chunks[0].data.bufferViews[prim.extensions.KHR_draco_mesh_compression.bufferView];\n            const num = view.byteLength;\n            const dataBuff = new Int8Array(num);\n            let accPos = (view.byteOffset || 0);// + (acc.byteOffset || 0);\n            for (let j = 0; j < num; j++)\n            {\n                dataBuff[j] = gltf.chunks[1].dataView.getInt8(accPos, le);\n                accPos++;\n            }\n\n            const dracoDecoder = window.DracoDecoder;\n            dracoDecoder.decodeGeometry(dataBuff.buffer, (geometry) =>\n            {\n                const geom = new CGL.Geometry(\"draco mesh \" + name);\n\n                for (let i = 0; i < geometry.attributes.length; i++)\n                {\n                    const attr = geometry.attributes[i];\n\n                    if (attr.name === \"position\") geom.vertices = attr.array;\n                    else if (attr.name === \"normal\") geom.vertexNormals = attr.array;\n                    else if (attr.name === \"uv\") geom.texCoords = attr.array;\n                    else if (attr.name === \"color\") geom.vertexColors = this.calcVertexColors(attr.array);\n                    else if (attr.name === \"joints\") geom.setAttribute(\"attrJoints\", Array.from(attr.array), 4);\n                    else if (attr.name === \"weights\")\n                    {\n                        const arr4 = new Float32Array(attr.array.length / attr.itemSize * 4);\n\n                        for (let k = 0; k < attr.array.length / attr.itemSize; k++)\n                        {\n                            arr4[k * 4] = arr4[k * 4 + 1] = arr4[k * 4 + 2] = arr4[k * 4 + 3] = 0;\n                            for (let j = 0; j < attr.itemSize; j++)\n                                arr4[k * 4 + j] = attr.array[k * attr.itemSize + j];\n                        }\n                        geom.setAttribute(\"attrWeights\", arr4, 4);\n                    }\n                    else op.logWarn(\"unknown draco attrib\", attr);\n                }\n\n                geometry.attributes = null;\n                geom.verticesIndices = geometry.index.array;\n\n                this.setGeom(geom);\n\n                this.mesh = null;\n                gltf.loadingMeshes--;\n                gltf.timing.push([\"draco decode\", Math.round((performance.now() - gltf.startTime))]);\n\n                if (finished)finished(this);\n            }, (error) => { op.logError(error); });\n        }\n        else\n        {\n            gltf.loadingMeshes--;\n            this.fillGeomAttribs(gltf, this.geom, prim.attributes);\n\n            if (prim.targets)\n            {\n                for (let j = 0; j < prim.targets.length; j++)\n                {\n                    const tgeom = new CGL.Geometry(\"gltf_target_\" + j);\n\n                    // if (prim.hasOwnProperty(\"indices\")) tgeom.verticesIndices = gltf.accBuffers[prim.indices];\n\n                    this.fillGeomAttribs(gltf, tgeom, prim.targets[j], false);\n\n                    // { // calculate normals for final position of morphtarget for later...\n                    //     for (let i = 0; i < tgeom.vertices.length; i++) tgeom.vertices[i] += this.geom.vertices[i];\n                    //     tgeom.calculateNormals();\n                    //     for (let i = 0; i < tgeom.vertices.length; i++) tgeom.vertices[i] -= this.geom.vertices[i];\n                    // }\n\n                    this.geom.morphTargets.push(tgeom);\n                }\n            }\n            if (finished)finished(this);\n        }\n    }\n\n    _linearToSrgb(x)\n    {\n        if (x <= 0)\n            return 0;\n        else if (x >= 1)\n            return 1;\n        else if (x < 0.0031308)\n            return x * 12.92;\n        else\n            return x ** (1 / 2.2) * 1.055 - 0.055;\n    }\n\n    calcVertexColors(arr, type)\n    {\n        let vertexColors = null;\n        if (arr instanceof Float32Array)\n        {\n            let div = false;\n            for (let i = 0; i < arr.length; i++)\n            {\n                if (arr[i] > 1)\n                {\n                    div = true;\n                    continue;\n                }\n            }\n\n            if (div)\n                for (let i = 0; i < arr.length; i++) arr[i] /= 65535;\n\n            vertexColors = arr;\n        }\n\n        else if (arr instanceof Uint16Array)\n        {\n            const fb = new Float32Array(arr.length);\n            for (let i = 0; i < arr.length; i++) fb[i] = arr[i] / 65535;\n\n            vertexColors = fb;\n        }\n        else vertexColors = arr;\n\n        for (let i = 0; i < vertexColors.length; i++)\n        {\n            vertexColors[i] = this._linearToSrgb(vertexColors[i]);\n        }\n\n        console.log(\"arr.cblStride\", arr.cblStride);\n        if (arr.cblStride == 3)\n        {\n            const nc = new Float32Array(vertexColors.length / 3 * 4);\n            for (let i = 0; i < vertexColors.length / 3; i++)\n            {\n                nc[i * 4 + 0] = vertexColors[i * 3 + 0];\n                nc[i * 4 + 1] = vertexColors[i * 3 + 1];\n                nc[i * 4 + 2] = vertexColors[i * 3 + 2];\n                nc[i * 4 + 3] = 1;\n            }\n            vertexColors = nc;\n        }\n\n        return vertexColors;\n    }\n\n    fillGeomAttribs(gltf, tgeom, attribs, setGeom)\n    {\n        if (attribs.hasOwnProperty(\"POSITION\")) tgeom.vertices = gltf.accBuffers[attribs.POSITION];\n        if (attribs.hasOwnProperty(\"NORMAL\")) tgeom.vertexNormals = gltf.accBuffers[attribs.NORMAL];\n        if (attribs.hasOwnProperty(\"TANGENT\")) tgeom.tangents = gltf.accBuffers[attribs.TANGENT];\n\n        // // console.log(gltf.accBuffers[attribs.COLOR_0])\n        // console.log(gltf);\n\n        if (attribs.hasOwnProperty(\"COLOR_0\")) tgeom.vertexColors = this.calcVertexColors(gltf.accBuffers[attribs.COLOR_0], gltf.accBuffers[attribs.COLOR_0].type);\n        if (attribs.hasOwnProperty(\"COLOR_1\")) tgeom.setAttribute(\"attrVertColor1\", this.calcVertexColors(gltf.accBuffers[attribs.COLOR_1]), gltf.accBuffers[attribs.COLOR_1].type);\n        if (attribs.hasOwnProperty(\"COLOR_2\")) tgeom.setAttribute(\"attrVertColor2\", this.calcVertexColors(gltf.accBuffers[attribs.COLOR_2]), gltf.accBuffers[attribs.COLOR_2].type);\n        if (attribs.hasOwnProperty(\"COLOR_3\")) tgeom.setAttribute(\"attrVertColor3\", this.calcVertexColors(gltf.accBuffers[attribs.COLOR_3]), gltf.accBuffers[attribs.COLOR_3].type);\n        if (attribs.hasOwnProperty(\"COLOR_4\")) tgeom.setAttribute(\"attrVertColor4\", this.calcVertexColors(gltf.accBuffers[attribs.COLOR_4]), gltf.accBuffers[attribs.COLOR_4].type);\n\n        if (attribs.hasOwnProperty(\"TEXCOORD_0\")) tgeom.texCoords = gltf.accBuffers[attribs.TEXCOORD_0];\n        if (attribs.hasOwnProperty(\"TEXCOORD_1\")) tgeom.setAttribute(\"attrTexCoord1\", gltf.accBuffers[attribs.TEXCOORD_1], 2);\n        if (attribs.hasOwnProperty(\"TEXCOORD_2\")) tgeom.setAttribute(\"attrTexCoord2\", gltf.accBuffers[attribs.TEXCOORD_2], 2);\n        if (attribs.hasOwnProperty(\"TEXCOORD_3\")) tgeom.setAttribute(\"attrTexCoord3\", gltf.accBuffers[attribs.TEXCOORD_3], 2);\n        if (attribs.hasOwnProperty(\"TEXCOORD_4\")) tgeom.setAttribute(\"attrTexCoord4\", gltf.accBuffers[attribs.TEXCOORD_4], 2);\n\n        if (attribs.hasOwnProperty(\"WEIGHTS_0\"))\n        {\n            tgeom.setAttribute(\"attrWeights\", gltf.accBuffers[attribs.WEIGHTS_0], 4);\n        }\n        if (attribs.hasOwnProperty(\"JOINTS_0\"))\n        {\n            if (!gltf.accBuffers[attribs.JOINTS_0])console.log(\"no !gltf.accBuffers[attribs.JOINTS_0]\");\n            tgeom.setAttribute(\"attrJoints\", gltf.accBuffers[attribs.JOINTS_0], 4);\n        }\n\n        if (attribs.hasOwnProperty(\"POSITION\")) gltf.accBuffersDelete.push(attribs.POSITION);\n        if (attribs.hasOwnProperty(\"NORMAL\")) gltf.accBuffersDelete.push(attribs.NORMAL);\n        if (attribs.hasOwnProperty(\"TEXCOORD_0\")) gltf.accBuffersDelete.push(attribs.TEXCOORD_0);\n        if (attribs.hasOwnProperty(\"TANGENT\")) gltf.accBuffersDelete.push(attribs.TANGENT);\n        if (attribs.hasOwnProperty(\"COLOR_0\"))gltf.accBuffersDelete.push(attribs.COLOR_0);\n        if (attribs.hasOwnProperty(\"COLOR_0\"))gltf.accBuffersDelete.push(attribs.COLOR_0);\n        if (attribs.hasOwnProperty(\"COLOR_1\"))gltf.accBuffersDelete.push(attribs.COLOR_1);\n        if (attribs.hasOwnProperty(\"COLOR_2\"))gltf.accBuffersDelete.push(attribs.COLOR_2);\n        if (attribs.hasOwnProperty(\"COLOR_3\"))gltf.accBuffersDelete.push(attribs.COLOR_3);\n\n        if (attribs.hasOwnProperty(\"TEXCOORD_1\")) gltf.accBuffersDelete.push(attribs.TEXCOORD_1);\n        if (attribs.hasOwnProperty(\"TEXCOORD_2\")) gltf.accBuffersDelete.push(attribs.TEXCOORD_2);\n        if (attribs.hasOwnProperty(\"TEXCOORD_3\")) gltf.accBuffersDelete.push(attribs.TEXCOORD_3);\n        if (attribs.hasOwnProperty(\"TEXCOORD_4\")) gltf.accBuffersDelete.push(attribs.TEXCOORD_4);\n\n        if (setGeom !== false) if (tgeom && tgeom.verticesIndices) this.setGeom(tgeom);\n    }\n\n    setGeom(geom)\n    {\n        if (inNormFormat.get() == \"X-ZY\")\n        {\n            for (let i = 0; i < geom.vertexNormals.length; i += 3)\n            {\n                let t = geom.vertexNormals[i + 2];\n                geom.vertexNormals[i + 2] = geom.vertexNormals[i + 1];\n                geom.vertexNormals[i + 1] = -t;\n            }\n        }\n\n        if (inVertFormat.get() == \"XZ-Y\")\n        {\n            for (let i = 0; i < geom.vertices.length; i += 3)\n            {\n                let t = geom.vertices[i + 2];\n                geom.vertices[i + 2] = -geom.vertices[i + 1];\n                geom.vertices[i + 1] = t;\n            }\n        }\n\n        if (this.primitive == this.TRIANGLES)\n        {\n            if (inCalcNormals.get() == \"Force Smooth\" || inCalcNormals.get() == false) geom.calculateNormals();\n            else if (!geom.vertexNormals.length && inCalcNormals.get() == \"Auto\") geom.calculateNormals({ \"smooth\": false });\n\n            if ((!geom.biTangents || geom.biTangents.length == 0) && geom.tangents)\n            {\n                const bitan = vec3.create();\n                const tan = vec3.create();\n\n                const tangents = geom.tangents;\n                geom.tangents = new Float32Array(tangents.length / 4 * 3);\n                geom.biTangents = new Float32Array(tangents.length / 4 * 3);\n\n                for (let i = 0; i < tangents.length; i += 4)\n                {\n                    const idx = i / 4 * 3;\n\n                    vec3.cross(\n                        bitan,\n                        [geom.vertexNormals[idx], geom.vertexNormals[idx + 1], geom.vertexNormals[idx + 2]],\n                        [tangents[i], tangents[i + 1], tangents[i + 2]]\n                    );\n\n                    vec3.div(bitan, bitan, [tangents[i + 3], tangents[i + 3], tangents[i + 3]]);\n                    vec3.normalize(bitan, bitan);\n\n                    geom.biTangents[idx + 0] = bitan[0];\n                    geom.biTangents[idx + 1] = bitan[1];\n                    geom.biTangents[idx + 2] = bitan[2];\n\n                    geom.tangents[idx + 0] = tangents[i + 0];\n                    geom.tangents[idx + 1] = tangents[i + 1];\n                    geom.tangents[idx + 2] = tangents[i + 2];\n                }\n            }\n\n            if (geom.tangents.length === 0 || inCalcNormals.get() != \"Never\")\n            {\n                // console.log(\"[gltf ]no tangents... calculating tangents...\");\n                geom.calcTangentsBitangents();\n            }\n        }\n\n        this.geom = geom;\n\n        this.bounds = geom.getBounds();\n    }\n\n    render(cgl, ignoreMaterial, skinRenderer)\n    {\n        if (!this.mesh && this.geom && this.geom.verticesIndices)\n        {\n            let g = this.geom;\n            if (this.geom.vertices.length / 3 > 64000)\n            {\n                g = this.geom.copy();\n                g.unIndex(false, true);\n            }\n\n            let glprim;\n\n            if (cgl.gl)\n            {\n                if (this.primitive == this.TRIANGLES)glprim = cgl.gl.TRIANGLES;\n                else if (this.primitive == this.LINES)glprim = cgl.gl.LINES;\n                else if (this.primitive == this.LINE_STRIP)glprim = cgl.gl.LINE_STRIP;\n                else if (this.primitive == this.POINTS)glprim = cgl.gl.POINTS;\n                else\n                {\n                    op.logWarn(\"unknown primitive type\", this);\n                }\n            }\n\n            this.mesh = op.patch.cg.createMesh(g, { \"glPrimitive\": glprim });\n        }\n\n        if (this.mesh)\n        {\n            // update morphTargets\n            if (this.geom && this.geom.morphTargets.length && !this.morphTargetsRenderMod)\n            {\n                this.mesh.addVertexNumbers = true;\n                this.morphTargetsRenderMod = new GltfTargetsRenderer(this);\n            }\n\n            let useMat = !ignoreMaterial && this.material != -1 && gltf.shaders[this.material];\n            if (skinRenderer)useMat = false;\n\n            if (useMat) cgl.pushShader(gltf.shaders[this.material]);\n\n            const currentShader = cgl.getShader() || {};\n            const uniDiff = currentShader.uniformColorDiffuse;\n\n            const uniPbrMetalness = currentShader.uniformPbrMetalness;\n            const uniPbrRoughness = currentShader.uniformPbrRoughness;\n\n            // if (gltf.shaders[this.material] && !inUseMatProps.get())\n            // {\n            //     gltf.shaders[this.material]=null;\n            // }\n\n            if (!gltf.shaders[this.material] && inUseMatProps.get())\n            {\n                if (uniDiff && this._matDiffuseColor)\n                {\n                    this._matDiffuseColorOrig = [uniDiff.getValue()[0], uniDiff.getValue()[1], uniDiff.getValue()[2], uniDiff.getValue()[3]];\n                    uniDiff.setValue(this._matDiffuseColor);\n                }\n\n                if (uniPbrMetalness)\n                    if (this._matPbrMetalness != null)\n                    {\n                        this._matPbrMetalnessOrig = uniPbrMetalness.getValue();\n                        uniPbrMetalness.setValue(this._matPbrMetalness);\n                    }\n                    else\n                        uniPbrMetalness.setValue(0);\n\n                if (uniPbrRoughness)\n                    if (this._matPbrRoughness != null)\n                    {\n                        this._matPbrRoughnessOrig = uniPbrRoughness.getValue();\n                        uniPbrRoughness.setValue(this._matPbrRoughness);\n                    }\n                    else\n                    {\n                        uniPbrRoughness.setValue(0);\n                    }\n            }\n\n            if (this.morphTargetsRenderMod) this.morphTargetsRenderMod.renderStart(cgl, 0);\n            if (this.mesh)\n            {\n                // console.log(this.mesh)\n                // this.mesh.lastMaterial=0;\n                this.mesh.render(cgl.getShader(), ignoreMaterial);\n            }\n            if (this.morphTargetsRenderMod) this.morphTargetsRenderMod.renderFinish(cgl);\n\n            if (inUseMatProps.get())\n            {\n                if (uniDiff && this._matDiffuseColor) uniDiff.setValue(this._matDiffuseColorOrig);\n                if (uniPbrMetalness && this._matPbrMetalnessOrig != undefined) uniPbrMetalness.setValue(this._matPbrMetalnessOrig);\n                if (uniPbrRoughness && this._matPbrRoughnessOrig != undefined) uniPbrRoughness.setValue(this._matPbrRoughnessOrig);\n            }\n\n            if (useMat) cgl.popShader();\n        }\n    }\n};\n","inc_meshGroup_js":"const gltfMeshGroup = class\n{\n    constructor(gltf, m)\n    {\n        this.bounds = new CABLES.CG.BoundingBox();\n        this.meshes = [];\n        this.name = m.name;\n        const prims = m.primitives;\n\n        for (let i = 0; i < prims.length; i++)\n        {\n            const mesh = new gltfMesh(this.name, prims[i], gltf,\n                (mesh) =>\n                {\n                    mesh.extras = m.extras;\n                    this.bounds.apply(mesh.bounds);\n                });\n\n            mesh.submeshIndex = i;\n            this.meshes.push(mesh);\n        }\n    }\n\n    render(cgl, ignoreMat, skinRenderer, _time, weights)\n    {\n        for (let i = 0; i < this.meshes.length; i++)\n        {\n            const useMat = gltf.shaders[this.meshes[i].material];\n\n            if (!ignoreMat && useMat) cgl.pushShader(gltf.shaders[this.meshes[i].material]);\n            // console.log(gltf.shaders[this.meshes[i].material],this.meshes[i].material)\n            if (skinRenderer)skinRenderer.renderStart(cgl, _time);\n            if (weights) this.meshes[i].weights = weights;\n            this.meshes[i].render(cgl, ignoreMat, skinRenderer, _time);\n            if (skinRenderer)skinRenderer.renderFinish(cgl);\n            if (!ignoreMat && useMat) cgl.popShader();\n        }\n    }\n};\n","inc_node_js":"const gltfNode = class\n{\n    constructor(node, gltf)\n    {\n        this.isChild = node.isChild || false;\n        this.name = node.name;\n        if (node.hasOwnProperty(\"camera\")) this.camera = node.camera;\n        this.hidden = false;\n        this.mat = mat4.create();\n        this._animActions = {};\n        this.animWeights = [];\n        this._animMat = mat4.create();\n        this._tempMat = mat4.create();\n        this._tempQuat = quat.create();\n        this._tempRotmat = mat4.create();\n        this.mesh = null;\n        this.children = [];\n        this._node = node;\n        this._gltf = gltf;\n        this.absMat = mat4.create();\n        this.addTranslate = null;\n        this._tempAnimScale = null;\n        this.addMulMat = null;\n        this.updateMatrix();\n        this.skinRenderer = null;\n        this.copies = [];\n    }\n\n    get skin()\n    {\n        if (this._node.hasOwnProperty(\"skin\")) return this._node.skin;\n        else return -1;\n    }\n\n    copy()\n    {\n        this.isCopy = true;\n        const n = new gltfNode(this._node, this._gltf);\n        n.copyOf = this;\n\n        n._animActions = this._animActions;\n        n.children = this.children;\n        if (this.skin) n.skinRenderer = new GltfSkin(this);\n\n        this.updateMatrix();\n        return n;\n    }\n\n    hasSkin()\n    {\n        if (this._node.hasOwnProperty(\"skin\")) return this._gltf.json.skins[this._node.skin].name || \"unknown\";\n        return false;\n    }\n\n    initSkin()\n    {\n        if (this.skin > -1)\n        {\n            this.skinRenderer = new GltfSkin(this);\n        }\n    }\n\n    updateMatrix()\n    {\n        mat4.identity(this.mat);\n        if (this._node.translation) mat4.translate(this.mat, this.mat, this._node.translation);\n\n        if (this._node.rotation)\n        {\n            const rotmat = mat4.create();\n            this._rot = this._node.rotation;\n\n            mat4.fromQuat(rotmat, this._node.rotation);\n            mat4.mul(this.mat, this.mat, rotmat);\n        }\n\n        if (this._node.scale)\n        {\n            this._scale = this._node.scale;\n            mat4.scale(this.mat, this.mat, this._scale);\n        }\n\n        if (this._node.hasOwnProperty(\"mesh\"))\n        {\n            this.mesh = this._gltf.meshes[this._node.mesh];\n            if (this.isCopy)\n            {\n                // console.log(this.mesh);\n            }\n        }\n\n        if (this._node.children)\n        {\n            for (let i = 0; i < this._node.children.length; i++)\n            {\n                this._gltf.json.nodes[i].isChild = true;\n                if (this._gltf.nodes[this._node.children[i]]) this._gltf.nodes[this._node.children[i]].isChild = true;\n                this.children.push(this._node.children[i]);\n            }\n        }\n    }\n\n    unHide()\n    {\n        this.hidden = false;\n        for (let i = 0; i < this.children.length; i++)\n            if (this.children[i].unHide) this.children[i].unHide();\n    }\n\n    calcBounds(gltf, mat, bounds)\n    {\n        const localMat = mat4.create();\n\n        if (mat) mat4.copy(localMat, mat);\n        if (this.mat) mat4.mul(localMat, localMat, this.mat);\n\n        if (this.mesh)\n        {\n            const bb = this.mesh.bounds.copy();\n            bb.mulMat4(localMat);\n            bounds.apply(bb);\n\n            if (bounds.changed)\n            {\n                boundingPoints.push(\n                    bb._min[0] || 0, bb._min[1] || 0, bb._min[2] || 0,\n                    bb._max[0] || 0, bb._max[1] || 0, bb._max[2] || 0);\n            }\n        }\n\n        for (let i = 0; i < this.children.length; i++)\n        {\n            if (gltf.nodes[this.children[i]] && gltf.nodes[this.children[i]].calcBounds)\n            {\n                const b = gltf.nodes[this.children[i]].calcBounds(gltf, localMat, bounds);\n\n                bounds.apply(b);\n            }\n        }\n\n        if (bounds.changed) return bounds;\n        else return null;\n    }\n\n    setAnimAction(name)\n    {\n        // console.log(\"setAnimAction:\", name);\n        if (!name) return;\n\n        this._currentAnimaction = name;\n\n        if (name && !this._animActions[name])\n        {\n            // console.log(\"no action found:\", name,this._animActions);\n            return null;\n        }\n\n        // else console.log(\"YES action found:\", name);\n        // console.log(this._animActions);\n\n        for (let path in this._animActions[name])\n        {\n            if (path == \"translation\") this._animTrans = this._animActions[name][path];\n            else if (path == \"rotation\") this._animRot = this._animActions[name][path];\n            else if (path == \"scale\") this._animScale = this._animActions[name][path];\n            else if (path == \"weights\") this.animWeights = this._animActions[name][path];\n            else console.log(\"[gltfNode] unknown anim path\", path, this._animActions[name][path]);\n        }\n    }\n\n    setAnim(path, name, anims)\n    {\n        if (!path || !name || !anims) return;\n\n        // console.log(\"setanim\", this._node.name, path, name, anims);\n\n        this._animActions[name] = this._animActions[name] || {};\n\n        // console.log(this._animActions);\n        // debugger;\n\n        // for (let i = 0; i < this.copies.length; i++) this.copies[i]._animActions = this._animActions;\n\n        if (this._animActions[name][path]) op.log(\"[gltfNode] animation action path already exists\", name, path, this._animActions[name][path]);\n\n        this._animActions[name][path] = anims;\n\n        if (path == \"translation\") this._animTrans = anims;\n        else if (path == \"rotation\") this._animRot = anims;\n        else if (path == \"scale\") this._animScale = anims;\n        else if (path == \"weights\")\n        {\n            // console.log(\"weights\",name,path,anims)\n            this.animWeights = this._animActions[name][path];\n            // console.log(this.animWeights);\n        }\n        else console.warn(\"unknown anim path\", path, anims);\n    }\n\n    modelMatLocal()\n    {\n        return this._animMat || this.mat;\n    }\n\n    modelMatAbs()\n    {\n        return this.absMat;\n    }\n\n    transform(cgl, _time)\n    {\n        if (!_time && _time != 0)_time = time;\n\n        this._lastTimeTrans = _time;\n\n        // console.log(this._rot)\n\n        gltfTransforms++;\n\n        if (!this._animTrans && !this._animRot && !this._animScale)\n        {\n            mat4.mul(cgl.mMatrix, cgl.mMatrix, this.mat);\n            this._animMat = null;\n        }\n        else\n        {\n            this._animMat = this._animMat || mat4.create();\n            mat4.identity(this._animMat);\n\n            const playAnims = true;\n\n            if (playAnims && this._animTrans)\n            {\n                mat4.translate(this._animMat, this._animMat, [\n                    this._animTrans[0].getValue(_time),\n                    this._animTrans[1].getValue(_time),\n                    this._animTrans[2].getValue(_time)]);\n            }\n            else\n            if (this._node.translation) mat4.translate(this._animMat, this._animMat, this._node.translation);\n\n            if (playAnims && this._animRot)\n            {\n                if (this._animRot[0].defaultEasing == CABLES.EASING_LINEAR) CABLES.Anim.slerpQuaternion(_time, this._tempQuat, this._animRot[0], this._animRot[1], this._animRot[2], this._animRot[3]);\n                else if (this._animRot[0].defaultEasing == CABLES.EASING_ABSOLUTE)\n                {\n                    this._tempQuat[0] = this._animRot[0].getValue(_time);\n                    this._tempQuat[1] = this._animRot[1].getValue(_time);\n                    this._tempQuat[2] = this._animRot[2].getValue(_time);\n                    this._tempQuat[3] = this._animRot[3].getValue(_time);\n                }\n                else if (this._animRot[0].defaultEasing == CABLES.EASING_CUBICSPLINE)\n                {\n                    CABLES.Anim.slerpQuaternion(_time, this._tempQuat, this._animRot[0], this._animRot[1], this._animRot[2], this._animRot[3]);\n                }\n\n                mat4.fromQuat(this._tempMat, this._tempQuat);\n                mat4.mul(this._animMat, this._animMat, this._tempMat);\n            }\n            else if (this._rot)\n            {\n                mat4.fromQuat(this._tempRotmat, this._rot);\n                mat4.mul(this._animMat, this._animMat, this._tempRotmat);\n            }\n\n            if (playAnims && this._animScale)\n            {\n                if (!this._tempAnimScale) this._tempAnimScale = [1, 1, 1];\n                this._tempAnimScale[0] = this._animScale[0].getValue(_time);\n                this._tempAnimScale[1] = this._animScale[1].getValue(_time);\n                this._tempAnimScale[2] = this._animScale[2].getValue(_time);\n                mat4.scale(this._animMat, this._animMat, this._tempAnimScale);\n            }\n            else if (this._scale) mat4.scale(this._animMat, this._animMat, this._scale);\n\n            mat4.mul(cgl.mMatrix, cgl.mMatrix, this._animMat);\n        }\n\n        if (this.animWeights)\n        {\n            this.weights = this.weights || [];\n\n            let str = \"\";\n            for (let i = 0; i < this.animWeights.length; i++)\n            {\n                this.weights[i] = this.animWeights[i].getValue(_time);\n                str += this.weights[i] + \"/\";\n            }\n\n            // console.log(str);\n            // this.mesh.weights=this.animWeights.get(_time);\n            // console.log(this.animWeights);\n        }\n\n        if (this.addTranslate) mat4.translate(cgl.mMatrix, cgl.mMatrix, this.addTranslate);\n\n        if (this.addMulMat) mat4.mul(cgl.mMatrix, cgl.mMatrix, this.addMulMat);\n\n        mat4.copy(this.absMat, cgl.mMatrix);\n    }\n\n    render(cgl, dontTransform, dontDrawMesh, ignoreMaterial, ignoreChilds, drawHidden, _time)\n    {\n        if (!dontTransform) cgl.pushModelMatrix();\n\n        if (_time === undefined) _time = gltf.time;\n\n        if (!dontTransform || this.skinRenderer) this.transform(cgl, _time);\n\n        if (this.hidden && !drawHidden)\n        {\n        }\n        else\n        {\n            if (this.skinRenderer)\n            {\n                this.skinRenderer.time = _time;\n                if (!dontDrawMesh)\n                    this.mesh.render(cgl, ignoreMaterial, this.skinRenderer, _time, this.weights);\n            }\n            else\n            {\n                if (this.mesh && !dontDrawMesh)\n                    this.mesh.render(cgl, ignoreMaterial, null, _time, this.weights);\n            }\n        }\n\n        if (!ignoreChilds && !this.hidden)\n            for (let i = 0; i < this.children.length; i++)\n                if (gltf.nodes[this.children[i]])\n                    gltf.nodes[this.children[i]].render(cgl, dontTransform, dontDrawMesh, ignoreMaterial, ignoreChilds, drawHidden, _time);\n\n        if (!dontTransform)cgl.popModelMatrix();\n    }\n};\n","inc_print_js":"let tab = null;\n\nfunction closeTab()\n{\n    if (tab)gui.mainTabs.closeTab(tab.id);\n    tab = null;\n}\n\nfunction formatVec(arr)\n{\n    const nums = [];\n    for (let i = 0; i < arr.length; i++)\n    {\n        nums.push(Math.round(arr[i] * 1000) / 1000);\n    }\n\n    return nums.join(\",\");\n}\n\nfunction printNode(html, node, level)\n{\n    if (!gltf) return;\n\n    html += \"<tr class=\\\"row\\\">\";\n\n    let ident = \"\";\n    let identSpace = \"\";\n\n    for (let i = 1; i < level; i++)\n    {\n        identSpace += \"&nbsp;&nbsp;&nbsp;\";\n        let identClass = \"identBg\";\n        if (i == 1)identClass = \"identBgLevel0\";\n        ident += \"<td class=\\\"ident \" + identClass + \"\\\" ><div style=\\\"\\\"></div></td>\";\n    }\n    let id = CABLES.uuid();\n    html += ident;\n    html += \"<td colspan=\\\"\" + (21 - level) + \"\\\">\";\n\n    if (node.mesh && node.mesh.meshes.length)html += \"<span class=\\\"icon icon-cube\\\"></span>&nbsp;\";\n    else html += \"<span class=\\\"icon icon-box-select\\\"></span> &nbsp;\";\n\n    html += node.name + \"</td><td></td>\";\n\n    if (node.mesh)\n    {\n        html += \"<td>\";\n        for (let i = 0; i < node.mesh.meshes.length; i++)\n        {\n            if (i > 0)html += \", \";\n            html += node.mesh.meshes[i].name;\n        }\n\n        html += \"</td>\";\n\n        html += \"<td>\";\n        html += node.hasSkin() || \"-\";\n        html += \"</td>\";\n\n        html += \"<td>\";\n        let countMats = 0;\n        for (let i = 0; i < node.mesh.meshes.length; i++)\n        {\n            if (countMats > 0)html += \", \";\n            if (gltf.json.materials && node.mesh.meshes[i].hasOwnProperty(\"material\"))\n            {\n                if (gltf.json.materials[node.mesh.meshes[i].material])\n                {\n                    html += gltf.json.materials[node.mesh.meshes[i].material].name;\n                    countMats++;\n                }\n            }\n        }\n        if (countMats == 0)html += \"none\";\n        html += \"</td>\";\n    }\n    else\n    {\n        html += \"<td>-</td><td>-</td><td>-</td>\";\n    }\n\n    html += \"<td>\";\n\n    if (node._node.translation || node._node.rotation || node._node.scale)\n    {\n        let info = \"\";\n\n        if (node._node.translation)info += \"Translate: `\" + formatVec(node._node.translation) + \"` || \";\n        if (node._node.rotation)info += \"Rotation: `\" + formatVec(node._node.rotation) + \"` || \";\n        if (node._node.scale)info += \"Scale: `\" + formatVec(node._node.scale) + \"` || \";\n\n        html += \"<span class=\\\"icon icon-gizmo info\\\" data-info=\\\"\" + info + \"\\\"></span> &nbsp;\";\n    }\n\n    if (node._animRot || node._animScale || node._animTrans)\n    {\n        let info = \"Animated: \";\n        if (node._animRot) info += \"Rot \";\n        if (node._animScale) info += \"Scale \";\n        if (node._animTrans) info += \"Trans \";\n\n        html += \"<span class=\\\"icon icon-clock info\\\" data-info=\\\"\" + info + \"\\\"></span>&nbsp;\";\n    }\n\n    if (!node._node.translation && !node._node.rotation && !node._node.scale && !node._animRot && !node._animScale && !node._animTrans) html += \"-\";\n\n    html += \"</td>\";\n\n    html += \"<td>\";\n    let hideclass = \"\";\n    if (node.hidden)hideclass = \"node-hidden\";\n\n    // html+='';\n    html += \"<a onclick=\\\"gui.corePatch().getOpById('\" + op.id + \"').exposeNode('\" + node.name + \"','transform')\\\" class=\\\"treebutton\\\">Transform</a>\";\n    html += \" <a onclick=\\\"gui.corePatch().getOpById('\" + op.id + \"').exposeNode('\" + node.name + \"','hierarchy')\\\" class=\\\"treebutton\\\">Hierarchy</a>\";\n    html += \" <a onclick=\\\"gui.corePatch().getOpById('\" + op.id + \"').exposeNode('\" + node.name + \"')\\\" class=\\\"treebutton\\\">Node</a>\";\n\n    if (node.hasSkin())\n        html += \" <a onclick=\\\"gui.corePatch().getOpById('\" + op.id + \"').exposeNode('\" + node.name + \"',false,{skin:true});\\\" class=\\\"treebutton\\\">Skin</a>\";\n\n    html += \"</td><td>\";\n    html += \"&nbsp;<span class=\\\"icon iconhover icon-eye \" + hideclass + \"\\\" onclick=\\\"gui.corePatch().getOpById('\" + op.id + \"').toggleNodeVisibility('\" + node.name + \"');this.classList.toggle('node-hidden');\\\"></span>\";\n    html += \"</td>\";\n\n    html += \"</tr>\";\n\n    if (node.children)\n    {\n        for (let i = 0; i < node.children.length; i++)\n            html = printNode(html, gltf.nodes[node.children[i]], level + 1);\n    }\n\n    return html;\n}\n\nfunction printMaterial(mat, idx)\n{\n    let html = \"<tr>\";\n    html += \" <td>\" + idx + \"</td>\";\n    html += \" <td>\" + mat.name + \"</td>\";\n\n    html += \" <td>\";\n\n    const info = JSON.stringify(mat, null, 4).replaceAll(\"\\\"\", \"\").replaceAll(\"\\n\", \"<br/>\");\n\n    html += \"<span class=\\\"icon icon-info\\\" onclick=\\\"new CABLES.UI.ModalDialog({ 'html': '<pre>\" + info + \"</pre>', 'title': '\" + mat.name + \"' });\\\"></span>&nbsp;\";\n\n    if (mat.pbrMetallicRoughness && mat.pbrMetallicRoughness.baseColorFactor)\n    {\n        let rgb = \"\";\n        rgb += \"\" + Math.round(mat.pbrMetallicRoughness.baseColorFactor[0] * 255);\n        rgb += \",\" + Math.round(mat.pbrMetallicRoughness.baseColorFactor[1] * 255);\n        rgb += \",\" + Math.round(mat.pbrMetallicRoughness.baseColorFactor[2] * 255);\n\n        html += \"<div style=\\\"width:15px;height:15px;background-color:rgb(\" + rgb + \");display:inline-block\\\">&nbsp;</a>\";\n    }\n    html += \" <td style=\\\"\\\">\" + (gltf.shaders[idx] ? \"-\" : \"<a onclick=\\\"gui.corePatch().getOpById('\" + op.id + \"').assignMaterial('\" + mat.name + \"')\\\" class=\\\"treebutton\\\">Assign</a>\") + \"<td>\";\n    html += \"<td>\";\n\n    html += \"</tr>\";\n    return html;\n}\n\nfunction printInfo()\n{\n    if (!gltf) return;\n\n    const startTime = performance.now();\n    const sizes = {};\n    let html = \"<div style=\\\"overflow:scroll;width:100%;height:100%\\\">\";\n\n    html += \"File: <a href=\\\"\" + CABLES.platform.getCablesUrl() + \"/asset/patches/?filename=\" + inFile.get() + \"\\\" target=\\\"_blank\\\">\" + CABLES.basename(inFile.get()) + \"</a><br/>\";\n\n    html += \"Generator:\" + gltf.json.asset.generator;\n\n    let numNodes = 0;\n    if (gltf.json.nodes)numNodes = gltf.json.nodes.length;\n    html += \"<div id=\\\"groupNodes\\\">Nodes (\" + numNodes + \")</div>\";\n\n    html += \"<table id=\\\"sectionNodes\\\" class=\\\"table treetable\\\">\";\n\n    html += \"<tr>\";\n    html += \" <th colspan=\\\"21\\\">Name</th>\";\n    html += \" <th>Mesh</th>\";\n    html += \" <th>Skin</th>\";\n    html += \" <th>Material</th>\";\n    html += \" <th>Transform</th>\";\n    html += \" <th>Expose</th>\";\n    html += \" <th></th>\";\n    html += \"</tr>\";\n\n    for (let i = 0; i < gltf.nodes.length; i++)\n    {\n        if (!gltf.nodes[i].isChild)\n            html = printNode(html, gltf.nodes[i], 1);\n    }\n    html += \"</table>\";\n\n    // / //////////////////\n\n    let numMaterials = 0;\n    if (gltf.json.materials)numMaterials = gltf.json.materials.length;\n    html += \"<div id=\\\"groupMaterials\\\">Materials (\" + numMaterials + \")</div>\";\n\n    if (!gltf.json.materials || gltf.json.materials.length == 0)\n    {\n    }\n    else\n    {\n        html += \"<table id=\\\"materialtable\\\"  class=\\\"table treetable\\\">\";\n        html += \"<tr>\";\n        html += \" <th>Index</th>\";\n        html += \" <th>Name</th>\";\n        html += \" <th>Color</th>\";\n        html += \" <th>Function</th>\";\n        html += \" <th></th>\";\n        html += \"</tr>\";\n        for (let i = 0; i < gltf.json.materials.length; i++)\n        {\n            html += printMaterial(gltf.json.materials[i], i);\n        }\n        html += \"</table>\";\n    }\n\n    // / ///////////////////////\n\n    html += \"<div id=\\\"groupMeshes\\\">Meshes (\" + gltf.json.meshes.length + \")</div>\";\n\n    html += \"<table id=\\\"meshestable\\\"  class=\\\"table treetable\\\">\";\n    html += \"<tr>\";\n    html += \" <th>Name</th>\";\n    html += \" <th>Node</th>\";\n    html += \" <th>Material</th>\";\n    html += \" <th>Vertices</th>\";\n    html += \" <th>Attributes</th>\";\n    html += \"</tr>\";\n\n    let sizeBufferViews = [];\n    sizes.meshes = 0;\n    sizes.meshTargets = 0;\n\n    for (let i = 0; i < gltf.json.meshes.length; i++)\n    {\n        html += \"<tr>\";\n        html += \"<td>\" + gltf.json.meshes[i].name + \"</td>\";\n\n        html += \"<td>\";\n        let count = 0;\n        let nodename = \"\";\n        for (let j = 0; j < gltf.json.nodes.length; j++)\n        {\n            if (gltf.json.nodes[j].mesh == i)\n            {\n                count++;\n                if (count == 1)\n                {\n                    nodename = gltf.json.nodes[j].name;\n                }\n            }\n        }\n        if (count > 1) html += (count) + \" nodes (\" + nodename + \" ...)\";\n        else html += nodename;\n        html += \"</td>\";\n\n        // -------\n\n        html += \"<td>\";\n        for (let j = 0; j < gltf.json.meshes[i].primitives.length; j++)\n        {\n            if (gltf.json.meshes[i].primitives[j].hasOwnProperty(\"material\"))\n            {\n                if (gltf.json.materials[gltf.json.meshes[i]])\n                {\n                    html += gltf.json.materials[gltf.json.meshes[i].primitives[j].material].name + \" \";\n                }\n            }\n            else html += \"None\";\n        }\n        html += \"</td>\";\n\n        html += \"<td>\";\n        let numVerts = 0;\n        for (let j = 0; j < gltf.json.meshes[i].primitives.length; j++)\n        {\n            if (gltf.json.meshes[i].primitives[j].attributes.POSITION != undefined)\n            {\n                let v = parseInt(gltf.json.accessors[gltf.json.meshes[i].primitives[j].attributes.POSITION].count);\n                numVerts += v;\n                html += \"\" + v + \"<br/>\";\n            }\n            else html += \"-<br/>\";\n        }\n\n        if (gltf.json.meshes[i].primitives.length > 1)\n            html += \"=\" + numVerts;\n        html += \"</td>\";\n\n        html += \"<td>\";\n        for (let j = 0; j < gltf.json.meshes[i].primitives.length; j++)\n        {\n            html += Object.keys(gltf.json.meshes[i].primitives[j].attributes);\n            html += \" <a onclick=\\\"gui.corePatch().getOpById('\" + op.id + \"').exposeGeom('\" + gltf.json.meshes[i].name + \"',\" + j + \")\\\" class=\\\"treebutton\\\">Geometry</a>\";\n            html += \"<br/>\";\n\n            if (gltf.json.meshes[i].primitives[j].targets)\n            {\n                html += gltf.json.meshes[i].primitives[j].targets.length + \" targets<br/>\";\n\n                if (gltf.json.meshes[i].extras && gltf.json.meshes[i].extras.targetNames)\n                    html += \"Targetnames:<br/>\" + gltf.json.meshes[i].extras.targetNames.join(\"<br/>\");\n\n                html += \"<br/>\";\n            }\n        }\n\n        html += \"</td>\";\n        html += \"</tr>\";\n\n        for (let j = 0; j < gltf.json.meshes[i].primitives.length; j++)\n        {\n            const accessor = gltf.json.accessors[gltf.json.meshes[i].primitives[j].indices];\n            if (accessor)\n            {\n                let bufView = accessor.bufferView;\n\n                if (sizeBufferViews.indexOf(bufView) == -1)\n                {\n                    sizeBufferViews.push(bufView);\n                    if (gltf.json.bufferViews[bufView])sizes.meshes += gltf.json.bufferViews[bufView].byteLength;\n                }\n            }\n\n            for (let k in gltf.json.meshes[i].primitives[j].attributes)\n            {\n                const attr = gltf.json.meshes[i].primitives[j].attributes[k];\n                const bufView2 = gltf.json.accessors[attr].bufferView;\n\n                if (sizeBufferViews.indexOf(bufView2) == -1)\n                {\n                    sizeBufferViews.push(bufView2);\n                    if (gltf.json.bufferViews[bufView2])sizes.meshes += gltf.json.bufferViews[bufView2].byteLength;\n                }\n            }\n\n            if (gltf.json.meshes[i].primitives[j].targets)\n                for (let k = 0; k < gltf.json.meshes[i].primitives[j].targets.length; k++)\n                {\n                    for (let l in gltf.json.meshes[i].primitives[j].targets[k])\n                    {\n                        const accessorIdx = gltf.json.meshes[i].primitives[j].targets[k][l];\n                        const accessor = gltf.json.accessors[accessorIdx];\n                        const bufView2 = accessor.bufferView;\n                        console.log(\"accessor\", accessor);\n                        if (sizeBufferViews.indexOf(bufView2) == -1)\n                            if (gltf.json.bufferViews[bufView2])\n                            {\n                                sizeBufferViews.push(bufView2);\n                                sizes.meshTargets += gltf.json.bufferViews[bufView2].byteLength;\n                            }\n                    }\n                }\n        }\n    }\n    html += \"</table>\";\n\n    // / //////////////////////////////////\n\n    let numSamplers = 0;\n    let numAnims = 0;\n    let numKeyframes = 0;\n\n    if (gltf.json.animations)\n    {\n        numAnims = gltf.json.animations.length;\n        for (let i = 0; i < gltf.json.animations.length; i++)\n        {\n            numSamplers += gltf.json.animations[i].samplers.length;\n        }\n    }\n\n    html += \"<div id=\\\"groupAnims\\\">Animations (\" + numAnims + \"/\" + numSamplers + \")</div>\";\n\n    if (gltf.json.animations)\n    {\n        html += \"<table id=\\\"sectionAnim\\\" class=\\\"table treetable\\\">\";\n        html += \"<tr>\";\n        html += \"  <th>Name</th>\";\n        html += \"  <th>Target node</th>\";\n        html += \"  <th>Path</th>\";\n        html += \"  <th>Interpolation</th>\";\n        html += \"  <th>Keys</th>\";\n        html += \"</tr>\";\n\n\n        sizes.animations = 0;\n\n        for (let i = 0; i < gltf.json.animations.length; i++)\n        {\n            for (let j = 0; j < gltf.json.animations[i].samplers.length; j++)\n            {\n                let bufView = gltf.json.accessors[gltf.json.animations[i].samplers[j].input].bufferView;\n                if (sizeBufferViews.indexOf(bufView) == -1)\n                {\n                    sizeBufferViews.push(bufView);\n                    sizes.animations += gltf.json.bufferViews[bufView].byteLength;\n                }\n\n                bufView = gltf.json.accessors[gltf.json.animations[i].samplers[j].output].bufferView;\n                if (sizeBufferViews.indexOf(bufView) == -1)\n                {\n                    sizeBufferViews.push(bufView);\n                    sizes.animations += gltf.json.bufferViews[bufView].byteLength;\n                }\n            }\n\n            for (let j = 0; j < gltf.json.animations[i].channels.length; j++)\n            {\n                html += \"<tr>\";\n                html += \"  <td> Anim \" + i + \": \" + gltf.json.animations[i].name + \"</td>\";\n\n                html += \"  <td>\" + gltf.nodes[gltf.json.animations[i].channels[j].target.node].name + \"</td>\";\n                html += \"  <td>\";\n                html += gltf.json.animations[i].channels[j].target.path + \" \";\n                html += \"  </td>\";\n\n                const smplidx = gltf.json.animations[i].channels[j].sampler;\n                const smplr = gltf.json.animations[i].samplers[smplidx];\n\n                html += \"  <td>\" + smplr.interpolation + \"</td>\";\n\n                html += \"  <td>\" + gltf.json.accessors[smplr.output].count;\n                numKeyframes += gltf.json.accessors[smplr.output].count;\n\n                // html += \"&nbsp;&nbsp;<a onclick=\\\"gui.corePatch().getOpById('\" + op.id + \"').showAnim('\" + i + \"','\" + j + \"')\\\" class=\\\"icon icon-search\\\"></a>\";\n\n                html += \"</td>\";\n\n                html += \"</tr>\";\n            }\n        }\n\n        html += \"<tr>\";\n        html += \"  <td></td>\";\n        html += \"  <td></td>\";\n        html += \"  <td></td>\";\n        html += \"  <td></td>\";\n        html += \"  <td>\" + numKeyframes + \" total</td>\";\n        html += \"</tr>\";\n        html += \"</table>\";\n    }\n    else\n    {\n\n    }\n\n    // / ///////////////////\n\n    let numImages = 0;\n    if (gltf.json.images)numImages = gltf.json.images.length;\n    html += \"<div id=\\\"groupImages\\\">Images (\" + numImages + \")</div>\";\n\n    if (gltf.json.images)\n    {\n        html += \"<table id=\\\"sectionImages\\\" class=\\\"table treetable\\\">\";\n\n        html += \"<tr>\";\n        html += \"  <th>name</th>\";\n        html += \"  <th>type</th>\";\n        html += \"  <th>func</th>\";\n        html += \"</tr>\";\n\n        sizes.images = 0;\n\n        for (let i = 0; i < gltf.json.images.length; i++)\n        {\n            if (gltf.json.images[i].hasOwnProperty(\"bufferView\"))\n            {\n                // if (sizeBufferViews.indexOf(gltf.json.images[i].hasOwnProperty(\"bufferView\")) == -1)console.log(\"image bufferview already there?!\");\n                // else\n                sizes.images += gltf.json.bufferViews[gltf.json.images[i].bufferView].byteLength;\n            }\n            else console.log(\"image has no bufferview?!\");\n\n            html += \"<tr>\";\n            html += \"<td>\" + gltf.json.images[i].name + \"</td>\";\n            html += \"<td>\" + gltf.json.images[i].mimeType + \"</td>\";\n            html += \"<td>\";\n\n            let name = gltf.json.images[i].name;\n            if (name === undefined)name = gltf.json.images[i].bufferView;\n\n            html += \"<a onclick=\\\"gui.corePatch().getOpById('\" + op.id + \"').exposeTexture('\" + name + \"')\\\" class=\\\"treebutton\\\">Expose</a>\";\n            html += \"</td>\";\n\n            html += \"<tr>\";\n        }\n        html += \"</table>\";\n    }\n\n    // / ///////////////////////\n\n    let numCameras = 0;\n    if (gltf.json.cameras)numCameras = gltf.json.cameras.length;\n    html += \"<div id=\\\"groupCameras\\\">Cameras (\" + numCameras + \")</div>\";\n\n    if (gltf.json.cameras)\n    {\n        html += \"<table id=\\\"sectionCameras\\\" class=\\\"table treetable\\\">\";\n\n        html += \"<tr>\";\n        html += \"  <th>name</th>\";\n        html += \"  <th>type</th>\";\n        html += \"  <th>info</th>\";\n        html += \"</tr>\";\n\n        for (let i = 0; i < gltf.json.cameras.length; i++)\n        {\n            html += \"<tr>\";\n            html += \"<td>\" + gltf.json.cameras[i].name + \"</td>\";\n            html += \"<td>\" + gltf.json.cameras[i].type + \"</td>\";\n            html += \"<td>\";\n\n            if (gltf.json.cameras[i].perspective)\n            {\n                html += \"yfov: \" + Math.round(gltf.json.cameras[i].perspective.yfov * 100) / 100;\n                html += \", \";\n                html += \"zfar: \" + Math.round(gltf.json.cameras[i].perspective.zfar * 100) / 100;\n                html += \", \";\n                html += \"znear: \" + Math.round(gltf.json.cameras[i].perspective.znear * 100) / 100;\n            }\n            html += \"</td>\";\n\n            html += \"<tr>\";\n        }\n        html += \"</table>\";\n    }\n\n    // / ////////////////////////////////////\n\n    let numSkins = 0;\n    if (gltf.json.skins)numSkins = gltf.json.skins.length;\n    html += \"<div id=\\\"groupSkins\\\">Skins (\" + numSkins + \")</div>\";\n\n    if (gltf.json.skins)\n    {\n        // html += \"<h3>Skins (\" + gltf.json.skins.length + \")</h3>\";\n        html += \"<table id=\\\"sectionSkins\\\" class=\\\"table treetable\\\">\";\n\n        html += \"<tr>\";\n        html += \"  <th>name</th>\";\n        html += \"  <th></th>\";\n        html += \"  <th>total joints</th>\";\n        html += \"</tr>\";\n\n        for (let i = 0; i < gltf.json.skins.length; i++)\n        {\n            html += \"<tr>\";\n            html += \"<td>\" + gltf.json.skins[i].name + \"</td>\";\n            html += \"<td>\" + \"</td>\";\n            html += \"<td>\" + gltf.json.skins[i].joints.length + \"</td>\";\n            html += \"<td>\";\n            html += \"</td>\";\n            html += \"<tr>\";\n        }\n        html += \"</table>\";\n    }\n\n    // / ////////////////////////////////////\n\n    if (gltf.timing)\n    {\n        html += \"<div id=\\\"groupTiming\\\">Debug Loading Timing </div>\";\n\n        html += \"<table id=\\\"sectionTiming\\\" class=\\\"table treetable\\\">\";\n\n        html += \"<tr>\";\n        html += \"  <th>task</th>\";\n        html += \"  <th>time used</th>\";\n        html += \"</tr>\";\n\n        let lt = 0;\n        for (let i = 0; i < gltf.timing.length - 1; i++)\n        {\n            html += \"<tr>\";\n            html += \"  <td>\" + gltf.timing[i][0] + \"</td>\";\n            html += \"  <td>\" + (gltf.timing[i + 1][1] - gltf.timing[i][1]) + \" ms</td>\";\n            html += \"</tr>\";\n            // lt = gltf.timing[i][1];\n        }\n        html += \"</table>\";\n    }\n\n    // / //////////////////////////\n\n    let sizeBin = 0;\n    if (gltf.json.buffers)\n        sizeBin = gltf.json.buffers[0].byteLength;\n\n    html += \"<div id=\\\"groupBinary\\\">File Size Allocation (\" + Math.round(sizeBin / 1024) + \"k )</div>\";\n\n    html += \"<table id=\\\"sectionBinary\\\" class=\\\"table treetable\\\">\";\n    html += \"<tr>\";\n    html += \"  <th>name</th>\";\n    html += \"  <th>size</th>\";\n    html += \"  <th>%</th>\";\n    html += \"</tr>\";\n    let sizeUnknown = sizeBin;\n    for (let i in sizes)\n    {\n        // html+=i+':'+Math.round(sizes[i]/1024);\n        html += \"<tr>\";\n        html += \"<td>\" + i + \"</td>\";\n        html += \"<td>\" + readableSize(sizes[i]) + \" </td>\";\n        html += \"<td>\" + Math.round(sizes[i] / sizeBin * 100) + \"% </td>\";\n        html += \"<tr>\";\n        sizeUnknown -= sizes[i];\n    }\n\n    if (sizeUnknown != 0)\n    {\n        html += \"<tr>\";\n        html += \"<td>unknown</td>\";\n        html += \"<td>\" + readableSize(sizeUnknown) + \" </td>\";\n        html += \"<td>\" + Math.round(sizeUnknown / sizeBin * 100) + \"% </td>\";\n        html += \"<tr>\";\n    }\n\n    html += \"</table>\";\n    html += \"</div>\";\n\n    tab = new CABLES.UI.Tab(\"GLTF \" + CABLES.basename(inFile.get()), { \"icon\": \"cube\", \"infotext\": \"tab_gltf\", \"padding\": true, \"singleton\": true });\n    gui.mainTabs.addTab(tab, true);\n\n    tab.addEventListener(\"close\", closeTab);\n    tab.html(html);\n\n    CABLES.UI.Collapsable.setup(ele.byId(\"groupNodes\"), ele.byId(\"sectionNodes\"), false);\n    CABLES.UI.Collapsable.setup(ele.byId(\"groupMaterials\"), ele.byId(\"materialtable\"), true);\n    CABLES.UI.Collapsable.setup(ele.byId(\"groupAnims\"), ele.byId(\"sectionAnim\"), true);\n    CABLES.UI.Collapsable.setup(ele.byId(\"groupMeshes\"), ele.byId(\"meshestable\"), true);\n    CABLES.UI.Collapsable.setup(ele.byId(\"groupCameras\"), ele.byId(\"sectionCameras\"), true);\n    CABLES.UI.Collapsable.setup(ele.byId(\"groupImages\"), ele.byId(\"sectionImages\"), true);\n    CABLES.UI.Collapsable.setup(ele.byId(\"groupSkins\"), ele.byId(\"sectionSkins\"), true);\n    CABLES.UI.Collapsable.setup(ele.byId(\"groupBinary\"), ele.byId(\"sectionBinary\"), true);\n    CABLES.UI.Collapsable.setup(ele.byId(\"groupTiming\"), ele.byId(\"sectionTiming\"), true);\n\n    gui.maintabPanel.show(true);\n}\n\nfunction readableSize(n)\n{\n    if (n > 1024) return Math.round(n / 1024) + \" kb\";\n    if (n > 1024 * 500) return Math.round(n / 1024) + \" mb\";\n    else return n + \" bytes\";\n}\n","inc_skin_js":"const GltfSkin = class\n{\n    constructor(node)\n    {\n        this._mod = null;\n        this._node = node;\n        this._lastTime = 0;\n        this._matArr = [];\n        this._m = mat4.create();\n        this._invBindMatrix = mat4.create();\n        this.identity = true;\n    }\n\n    renderFinish(cgl)\n    {\n        cgl.popModelMatrix();\n        this._mod.unbind();\n    }\n\n    renderStart(cgl, time)\n    {\n        if (!this._mod)\n        {\n            this._mod = new CGL.ShaderModifier(cgl, op.name + this._node.name);\n\n            this._mod.addModule({\n                \"priority\": -2,\n                \"name\": \"MODULE_VERTEX_POSITION\",\n                \"srcHeadVert\": attachments.skin_head_vert || \"\",\n                \"srcBodyVert\": attachments.skin_vert || \"\"\n            });\n\n            this._mod.addUniformVert(\"m4[]\", \"MOD_boneMats\", []);// bohnenmatze\n            const tr = vec3.create();\n        }\n\n        const skinIdx = this._node.skin;\n        const arrLength = gltf.json.skins[skinIdx].joints.length * 16;\n\n        // if (this._lastTime != time || !time)\n        {\n            // this._lastTime=inTime.get();\n            if (this._matArr.length != arrLength) this._matArr.length = arrLength;\n\n            for (let i = 0; i < gltf.json.skins[skinIdx].joints.length; i++)\n            {\n                const i16 = i * 16;\n                const jointIdx = gltf.json.skins[skinIdx].joints[i];\n                const nodeJoint = gltf.nodes[jointIdx];\n\n                for (let j = 0; j < 16; j++)\n                    this._invBindMatrix[j] = gltf.accBuffers[gltf.json.skins[skinIdx].inverseBindMatrices][i16 + j];\n\n                mat4.mul(this._m, nodeJoint.modelMatAbs(), this._invBindMatrix);\n\n                for (let j = 0; j < this._m.length; j++) this._matArr[i16 + j] = this._m[j];\n            }\n\n            this._mod.setUniformValue(\"MOD_boneMats\", this._matArr);\n            this._lastTime = time;\n        }\n\n        this._mod.define(\"SKIN_NUM_BONES\", gltf.json.skins[skinIdx].joints.length);\n        this._mod.bind();\n\n        // draw mesh...\n        cgl.pushModelMatrix();\n        if (this.identity)mat4.identity(cgl.mMatrix);\n    }\n};\n","inc_targets_js":"const GltfTargetsRenderer = class\n{\n    constructor(mesh)\n    {\n        this.mesh = mesh;\n        this.tex = null;\n        this.numRowsPerTarget = 0;\n\n        this.makeTex(mesh.geom);\n    }\n\n    renderFinish(cgl)\n    {\n        cgl.popModelMatrix();\n        this._mod.unbind();\n    }\n\n    renderStart(cgl, time)\n    {\n        if (!this._mod)\n        {\n            this._mod = new CGL.ShaderModifier(cgl, \"gltftarget\");\n\n            this._mod.addModule({\n                \"priority\": -2,\n                \"name\": \"MODULE_VERTEX_POSITION\",\n                \"srcHeadVert\": attachments.targets_head_vert || \"\",\n                \"srcBodyVert\": attachments.targets_vert || \"\"\n            });\n\n            this._mod.addUniformVert(\"4f\", \"MOD_targetTexInfo\", [0, 0, 0, 0]);\n            this._mod.addUniformVert(\"t\", \"MOD_targetTex\", 1);\n            this._mod.addUniformVert(\"f[]\", \"MOD_weights\", []);\n\n            const tr = vec3.create();\n        }\n\n        this._mod.pushTexture(\"MOD_targetTex\", this.tex);\n        if (this.tex && this.mesh.weights)\n        {\n            this._mod.setUniformValue(\"MOD_weights\", this.mesh.weights);\n            this._mod.setUniformValue(\"MOD_targetTexInfo\", [this.tex.width, this.tex.height, this.numRowsPerTarget, this.mesh.weights.length]);\n\n            this._mod.define(\"MOD_NUM_WEIGHTS\", Math.max(1, this.mesh.weights.length));\n        }\n        else\n        {\n            this._mod.define(\"MOD_NUM_WEIGHTS\", 1);\n        }\n        this._mod.bind();\n\n        // draw mesh...\n        cgl.pushModelMatrix();\n        if (this.identity)mat4.identity(cgl.mMatrix);\n    }\n\n    makeTex(geom)\n    {\n        if (!geom.morphTargets || !geom.morphTargets.length) return;\n\n        let w = geom.morphTargets[0].vertices.length / 3;\n        let h = 0;\n        this.numRowsPerTarget = 0;\n\n        if (geom.morphTargets[0].vertices && geom.morphTargets[0].vertices.length) this.numRowsPerTarget++;\n        if (geom.morphTargets[0].vertexNormals && geom.morphTargets[0].vertexNormals.length) this.numRowsPerTarget++;\n        if (geom.morphTargets[0].tangents && geom.morphTargets[0].tangents.length) this.numRowsPerTarget++;\n        if (geom.morphTargets[0].bitangents && geom.morphTargets[0].bitangents.length) this.numRowsPerTarget++;\n\n        h = geom.morphTargets.length * this.numRowsPerTarget;\n\n        // console.log(\"this.numRowsPerTarget\", this.numRowsPerTarget);\n\n        const pixels = new Float32Array(w * h * 4);\n        let row = 0;\n\n        for (let i = 0; i < geom.morphTargets.length; i++)\n        {\n            if (geom.morphTargets[i].vertices && geom.morphTargets[i].vertices.length)\n            {\n                for (let j = 0; j < geom.morphTargets[i].vertices.length; j += 3)\n                {\n                    pixels[((row * w) + (j / 3)) * 4 + 0] = geom.morphTargets[i].vertices[j + 0];\n                    pixels[((row * w) + (j / 3)) * 4 + 1] = geom.morphTargets[i].vertices[j + 1];\n                    pixels[((row * w) + (j / 3)) * 4 + 2] = geom.morphTargets[i].vertices[j + 2];\n                    pixels[((row * w) + (j / 3)) * 4 + 3] = 1;\n                }\n                row++;\n            }\n\n            if (geom.morphTargets[i].vertexNormals && geom.morphTargets[i].vertexNormals.length)\n            {\n                for (let j = 0; j < geom.morphTargets[i].vertexNormals.length; j += 3)\n                {\n                    pixels[(row * w + j / 3) * 4 + 0] = geom.morphTargets[i].vertexNormals[j + 0];\n                    pixels[(row * w + j / 3) * 4 + 1] = geom.morphTargets[i].vertexNormals[j + 1];\n                    pixels[(row * w + j / 3) * 4 + 2] = geom.morphTargets[i].vertexNormals[j + 2];\n                    pixels[(row * w + j / 3) * 4 + 3] = 1;\n                }\n\n                row++;\n            }\n\n            if (geom.morphTargets[i].tangents && geom.morphTargets[i].tangents.length)\n            {\n                for (let j = 0; j < geom.morphTargets[i].tangents.length; j += 3)\n                {\n                    pixels[(row * w + j / 3) * 4 + 0] = geom.morphTargets[i].tangents[j + 0];\n                    pixels[(row * w + j / 3) * 4 + 1] = geom.morphTargets[i].tangents[j + 1];\n                    pixels[(row * w + j / 3) * 4 + 2] = geom.morphTargets[i].tangents[j + 2];\n                    pixels[(row * w + j / 3) * 4 + 3] = 1;\n                }\n                row++;\n            }\n\n            if (geom.morphTargets[i].bitangents && geom.morphTargets[i].bitangents.length)\n            {\n                for (let j = 0; j < geom.morphTargets[i].bitangents.length; j += 3)\n                {\n                    pixels[(row * w + j / 3) * 4 + 0] = geom.morphTargets[i].bitangents[j + 0];\n                    pixels[(row * w + j / 3) * 4 + 1] = geom.morphTargets[i].bitangents[j + 1];\n                    pixels[(row * w + j / 3) * 4 + 2] = geom.morphTargets[i].bitangents[j + 2];\n                    pixels[(row * w + j / 3) * 4 + 3] = 1;\n                }\n                row++;\n            }\n        }\n\n        this.tex = new CGL.Texture(cgl, { \"isFloatingPointTexture\": true, \"name\": \"targetsTexture\" });\n\n        this.tex.initFromData(pixels, w, h, CGL.Texture.FILTER_LINEAR, CGL.Texture.WRAP_REPEAT);\n\n        // console.log(\"morphTargets generated texture\", w, h);\n    }\n};\n","skin_vert":"int index=int(attrJoints.x);\nvec4 newPos = (MOD_boneMats[index] * pos) * attrWeights.x;\nvec3 newNorm = (vec4((MOD_boneMats[index] * vec4(norm.xyz, 0.0)) * attrWeights.x).xyz);\n\nindex=int(attrJoints.y);\nnewPos += (MOD_boneMats[index] * pos) * attrWeights.y;\nnewNorm = (vec4((MOD_boneMats[index] * vec4(norm.xyz, 0.0)) * attrWeights.y).xyz)+newNorm;\n\nindex=int(attrJoints.z);\nnewPos += (MOD_boneMats[index] * pos) * attrWeights.z;\nnewNorm = (vec4((MOD_boneMats[index] * vec4(norm.xyz, 0.0)) * attrWeights.z).xyz)+newNorm;\n\nindex=int(attrJoints.w);\nnewPos += (MOD_boneMats[index] * pos) * attrWeights.w ;\nnewNorm = (vec4((MOD_boneMats[index] * vec4(norm.xyz, 0.0)) * attrWeights.w).xyz)+newNorm;\n\npos=newPos;\n\nnorm=normalize(newNorm.xyz);\n\n\n","skin_head_vert":"\nIN vec4 attrWeights;\nIN vec4 attrJoints;\nUNI mat4 MOD_boneMats[SKIN_NUM_BONES];\n","targets_vert":"\n\nfloat MOD_width=MOD_targetTexInfo.x;\nfloat MOD_height=MOD_targetTexInfo.y;\nfloat MOD_numTargets=MOD_targetTexInfo.w;\nfloat MOD_numLinesPerTarget=MOD_height/MOD_numTargets;\n\nfloat halfpix=(1.0/MOD_width)*0.5;\nfloat halfpixy=(1.0/MOD_height)*0.5;\n\nfloat x=(attrVertIndex)/MOD_width+halfpix;\n\nvec3 off=vec3(0.0);\n\nfor(float i=0.0;i<MOD_numTargets;i+=1.0)\n{\n    float y=1.0-((MOD_numLinesPerTarget*i)/MOD_height+halfpixy);\n    vec2 coord=vec2(x,y);\n    vec3 targetXYZ = texture(MOD_targetTex,coord).xyz;\n\n    off+=(targetXYZ*MOD_weights[int(i)]);\n\n\n\n    coord.y+=1.0/MOD_height; // normals are in next row\n    vec3 targetNormal = texture(MOD_targetTex,coord).xyz;\n    norm+=targetNormal*MOD_weights[int(i)];\n\n\n}\n\n// norm=normalize(norm);\npos.xyz+=off;\n","targets_head_vert":"\nUNI float MOD_weights[MOD_NUM_WEIGHTS];\n",};
const gltfCamera = class
{
    constructor(gltf, node)
    {
        this.node = node;
        this.name = node.name;
        // console.log(gltf);
        this.config = gltf.json.cameras[node.camera];

        this.pos = vec3.create();
        this.quat = quat.create();
        this.vCenter = vec3.create();
        this.vUp = vec3.create();
        this.vMat = mat4.create();
    }

    updateAnim(time)
    {
        if (this.node && this.node._animTrans)
        {
            vec3.set(this.pos,
                this.node._animTrans[0].getValue(time),
                this.node._animTrans[1].getValue(time),
                this.node._animTrans[2].getValue(time));

            quat.set(this.quat,
                this.node._animRot[0].getValue(time),
                this.node._animRot[1].getValue(time),
                this.node._animRot[2].getValue(time),
                this.node._animRot[3].getValue(time));
        }
    }

    start(time)
    {
        if (cgl.frameStore.shadowPass) return;

        this.updateAnim(time);
        const asp = cgl.getViewPort()[2] / cgl.getViewPort()[3];

        cgl.pushPMatrix();
        // mat4.perspective(
        //     cgl.pMatrix,
        //     this.config.perspective.yfov*0.5,
        //     asp,
        //     this.config.perspective.znear,
        //     this.config.perspective.zfar);

        cgl.pushViewMatrix();
        // mat4.identity(cgl.vMatrix);

        // if(this.node && this.node.parent)
        // {
        //     console.log(this.node.parent)
        // vec3.add(this.pos,this.pos,this.node.parent._node.translation);
        // vec3.sub(this.vCenter,this.vCenter,this.node.parent._node.translation);
        // mat4.translate(cgl.vMatrix,cgl.vMatrix,
        // [
        //     -this.node.parent._node.translation[0],
        //     -this.node.parent._node.translation[1],
        //     -this.node.parent._node.translation[2]
        // ])
        // }

        // vec3.set(this.vUp, 0, 1, 0);
        // vec3.set(this.vCenter, 0, -1, 0);
        // // vec3.set(this.vCenter, 0, 1, 0);
        // vec3.transformQuat(this.vCenter, this.vCenter, this.quat);
        // vec3.normalize(this.vCenter, this.vCenter);
        // vec3.add(this.vCenter, this.vCenter, this.pos);

        // mat4.lookAt(cgl.vMatrix, this.pos, this.vCenter, this.vUp);

        let mv = mat4.create();
        mat4.invert(mv, this.node.modelMatAbs());

        // console.log(this.node.modelMatAbs());

        this.vMat = mv;

        mat4.identity(cgl.vMatrix);
        // console.log(mv);
        mat4.mul(cgl.vMatrix, cgl.vMatrix, mv);
    }

    end()
    {
        if (cgl.frameStore.shadowPass) return;
        cgl.popPMatrix();
        cgl.popViewMatrix();
    }
};
const le = true; // little endian

const Gltf = class
{
    constructor()
    {
        this.json = {};
        this.accBuffers = [];
        this.meshes = [];
        this.nodes = [];
        this.shaders = [];
        this.timing = [];
        this.cams = [];
        this.startTime = performance.now();
        this.bounds = new CABLES.CG.BoundingBox();
        this.loaded = Date.now();
        this.accBuffersDelete = [];
    }

    getNode(n)
    {
        for (let i = 0; i < this.nodes.length; i++)
        {
            if (this.nodes[i].name == n) return this.nodes[i];
        }
    }

    unHideAll()
    {
        for (let i = 0; i < this.nodes.length; i++)
        {
            this.nodes[i].unHide();
        }
    }
};

function Utf8ArrayToStr(array)
{
    if (window.TextDecoder) return new TextDecoder("utf-8").decode(array);

    let out, i, len, c;
    let char2, char3;

    out = "";
    len = array.length;
    i = 0;
    while (i < len)
    {
        c = array[i++];
        switch (c >> 4)
        {
        case 0: case 1: case 2: case 3: case 4: case 5: case 6: case 7:
            // 0xxxxxxx
            out += String.fromCharCode(c);
            break;
        case 12: case 13:
            // 110x xxxx   10xx xxxx
            char2 = array[i++];
            out += String.fromCharCode(((c & 0x1F) << 6) | (char2 & 0x3F));
            break;
        case 14:
            // 1110 xxxx  10xx xxxx  10xx xxxx
            char2 = array[i++];
            char3 = array[i++];
            out += String.fromCharCode(((c & 0x0F) << 12) |
                    ((char2 & 0x3F) << 6) |
                    ((char3 & 0x3F) << 0));
            break;
        }
    }

    return out;
}

function readChunk(dv, bArr, arrayBuffer, offset)
{
    const chunk = {};

    if (offset >= dv.byteLength)
    {
        // op.log("could not read chunk...");
        return;
    }
    chunk.size = dv.getUint32(offset + 0, le);

    // chunk.type = new TextDecoder("utf-8").decode(bArr.subarray(offset+4, offset+4+4));
    chunk.type = Utf8ArrayToStr(bArr.subarray(offset + 4, offset + 4 + 4));

    if (chunk.type == "BIN\0")
    {
        // console.log(chunk.size,arrayBuffer.length,offset);
        // try
        // {
        chunk.dataView = new DataView(arrayBuffer, offset + 8, chunk.size);
        // }
        // catch(e)
        // {
        //     chunk.dataView = null;
        //     console.log(e);
        // }
    }
    else
    if (chunk.type == "JSON")
    {
        const json = Utf8ArrayToStr(bArr.subarray(offset + 8, offset + 8 + chunk.size));

        try
        {
            const obj = JSON.parse(json);
            chunk.data = obj;
            outGenerator.set(obj.asset.generator);
        }
        catch (e)
        {
        }
    }
    else
    {
        op.warn("unknown type", chunk.type);
    }

    return chunk;
}

function loadAnims(gltf)
{
    const uniqueAnimNames = {};

    for (let i = 0; i < gltf.json.animations.length; i++)
    {
        const an = gltf.json.animations[i];

        an.name = an.name || "unknown";

        for (let ia = 0; ia < an.channels.length; ia++)
        {
            const chan = an.channels[ia];

            const node = gltf.nodes[chan.target.node];
            const sampler = an.samplers[chan.sampler];

            const acc = gltf.json.accessors[sampler.input];
            const bufferIn = gltf.accBuffers[sampler.input];

            const accOut = gltf.json.accessors[sampler.output];
            const bufferOut = gltf.accBuffers[sampler.output];

            gltf.accBuffersDelete.push(sampler.output, sampler.input);

            if (bufferIn && bufferOut)
            {
                let numComps = 1;
                if (accOut.type === "VEC2")numComps = 2;
                else if (accOut.type === "VEC3")numComps = 3;
                else if (accOut.type === "VEC4")numComps = 4;
                else if (accOut.type === "SCALAR")
                {
                    numComps = bufferOut.length / bufferIn.length; // is this really the way to find out ? cant find any other way,except number of morph targets, but not really connected...
                }
                else op.log("[] UNKNOWN accOut.type", accOut.type);

                const anims = [];

                uniqueAnimNames[an.name] = true;

                for (let k = 0; k < numComps; k++)
                {
                    const newAnim = new CABLES.Anim();
                    // newAnim.name=an.name;
                    anims.push(newAnim);
                }

                if (sampler.interpolation === "LINEAR") {}
                else if (sampler.interpolation === "STEP") for (let k = 0; k < numComps; k++) anims[k].defaultEasing = CABLES.EASING_ABSOLUTE;
                else if (sampler.interpolation === "CUBICSPLINE") for (let k = 0; k < numComps; k++) anims[k].defaultEasing = CABLES.EASING_CUBICSPLINE;
                else op.warn("unknown interpolation", sampler.interpolation);

                // console.log(bufferOut)

                // if there is no keyframe for time 0 copy value of first keyframe at time 0
                if (bufferIn[0] !== 0.0)
                    for (let k = 0; k < numComps; k++)
                        anims[k].setValue(0, bufferOut[0 * numComps + k]);

                for (let j = 0; j < bufferIn.length; j++)
                {
                    maxTime = Math.max(bufferIn[j], maxTime);

                    for (let k = 0; k < numComps; k++)
                    {
                        if (anims[k].defaultEasing === CABLES.EASING_CUBICSPLINE)
                        {
                            const idx = ((j * numComps) * 3 + k);

                            const key = anims[k].setValue(bufferIn[j], bufferOut[idx + numComps]);
                            key.bezTangIn = bufferOut[idx];
                            key.bezTangOut = bufferOut[idx + (numComps * 2)];

                            // console.log(an.name,k,bufferOut[idx+1]);
                        }
                        else
                        {
                            // console.log(an.name,k,bufferOut[j * numComps + k]);
                            anims[k].setValue(bufferIn[j], bufferOut[j * numComps + k]);
                        }
                    }
                }

                node.setAnim(chan.target.path, an.name, anims);
            }
            else
            {
                op.warn("loadAmins bufferIn undefined ", bufferIn === undefined);
                op.warn("loadAmins bufferOut undefined ", bufferOut === undefined);
                op.warn("loadAmins ", sampler, accOut);
                op.warn("loadAmins num accBuffers", gltf.accBuffers.length);
                op.warn("loadAmins num accessors", gltf.json.accessors.length);
            }
        }
    }

    gltf.uniqueAnimNames = uniqueAnimNames;

    outAnims.setRef(Object.keys(uniqueAnimNames));
}

function loadCams(gltf)
{
    if (!gltf || !gltf.json.cameras) return;

    gltf.cameras = gltf.cameras || [];

    for (let i = 0; i < gltf.nodes.length; i++)
    {
        if (gltf.nodes[i].hasOwnProperty("camera"))
        {
            const cam = new gltfCamera(gltf, gltf.nodes[i]);
            gltf.cameras.push(cam);
        }
    }
}

function loadAfterDraco()
{
    if (!window.DracoDecoder)
    {
        setTimeout(() =>
        {
            loadAfterDraco();
        }, 100);
    }

    reloadSoon();
}

function parseGltf(arrayBuffer)
{
    const CHUNK_HEADER_SIZE = 8;

    let j = 0, i = 0;

    const gltf = new Gltf();
    gltf.timing.push(["Start parsing", Math.round((performance.now() - gltf.startTime))]);

    if (!arrayBuffer) return;
    const byteArray = new Uint8Array(arrayBuffer);
    let pos = 0;

    // var string = new TextDecoder("utf-8").decode(byteArray.subarray(pos, 4));
    const string = Utf8ArrayToStr(byteArray.subarray(pos, 4));
    pos += 4;
    if (string != "glTF") return;

    gltf.timing.push(["dataview", Math.round((performance.now() - gltf.startTime))]);

    const dv = new DataView(arrayBuffer);
    const version = dv.getUint32(pos, le);
    pos += 4;
    const size = dv.getUint32(pos, le);
    pos += 4;

    outVersion.set(version);

    const chunks = [];
    gltf.chunks = chunks;

    chunks.push(readChunk(dv, byteArray, arrayBuffer, pos));
    pos += chunks[0].size + CHUNK_HEADER_SIZE;
    gltf.json = chunks[0].data;

    gltf.cables = {
        "fileUrl": inFile.get(),
        "shortFileName": CABLES.basename(inFile.get())
    };

    outJson.setRef(gltf.json);
    outExtensions.setRef(gltf.json.extensionsUsed || []);

    let ch = readChunk(dv, byteArray, arrayBuffer, pos);
    while (ch)
    {
        chunks.push(ch);
        pos += ch.size + CHUNK_HEADER_SIZE;
        ch = readChunk(dv, byteArray, arrayBuffer, pos);
    }

    gltf.chunks = chunks;

    const views = chunks[0].data.bufferViews;
    const accessors = chunks[0].data.accessors;

    gltf.timing.push(["Parse buffers", Math.round((performance.now() - gltf.startTime))]);

    if (gltf.json.extensionsUsed && gltf.json.extensionsUsed.indexOf("KHR_draco_mesh_compression") > -1)
    {
        if (!window.DracoDecoder)
        {
            op.setUiError("gltfdraco", "GLTF draco compression lib not found / add draco op to your patch!");

            loadAfterDraco();
            return gltf;
        }
        else
        {
            gltf.useDraco = true;
        }
    }

    op.setUiError("gltfdraco", null);
    // let accPos = (view.byteOffset || 0) + (acc.byteOffset || 0);

    if (views)
    {
        for (i = 0; i < accessors.length; i++)
        {
            const acc = accessors[i];
            const view = views[acc.bufferView];

            let numComps = 0;
            if (acc.type == "SCALAR")numComps = 1;
            else if (acc.type == "VEC2")numComps = 2;
            else if (acc.type == "VEC3")numComps = 3;
            else if (acc.type == "VEC4")numComps = 4;
            else if (acc.type == "MAT4")numComps = 16;
            else console.error("unknown accessor type", acc.type);

            //   const decoder = new decoderModule.Decoder();
            //   const decodedGeometry = decodeDracoData(data, decoder);
            //   // Encode mesh
            //   encodeMeshToFile(decodedGeometry, decoder);

            //   decoderModule.destroy(decoder);
            //   decoderModule.destroy(decodedGeometry);

            // 5120 (BYTE)	1
            // 5121 (UNSIGNED_BYTE)	1
            // 5122 (SHORT)	2

            if (chunks[1].dataView)
            {
                if (view)
                {
                    const num = acc.count * numComps;
                    let accPos = (view.byteOffset || 0) + (acc.byteOffset || 0);
                    let stride = view.byteStride || 0;
                    let dataBuff = null;

                    if (acc.componentType == 5126 || acc.componentType == 5125) // 4byte FLOAT or INT
                    {
                        stride = stride || 4;

                        const isInt = acc.componentType == 5125;
                        if (isInt)dataBuff = new Uint32Array(num);
                        else dataBuff = new Float32Array(num);

                        dataBuff.cblStride = numComps;

                        for (j = 0; j < num; j++)
                        {
                            if (isInt) dataBuff[j] = chunks[1].dataView.getUint32(accPos, le);
                            else dataBuff[j] = chunks[1].dataView.getFloat32(accPos, le);

                            if (stride != 4 && (j + 1) % numComps === 0)accPos += stride - (numComps * 4);
                            accPos += 4;
                        }
                    }
                    else if (acc.componentType == 5123) // UNSIGNED_SHORT
                    {
                        stride = stride || 2;

                        dataBuff = new Uint16Array(num);
                        dataBuff.cblStride = stride;

                        for (j = 0; j < num; j++)
                        {
                            dataBuff[j] = chunks[1].dataView.getUint16(accPos, le);

                            if (stride != 2 && (j + 1) % numComps === 0) accPos += stride - (numComps * 2);

                            accPos += 2;
                        }
                    }
                    else if (acc.componentType == 5121) // UNSIGNED_BYTE
                    {
                        stride = stride || 1;

                        dataBuff = new Uint8Array(num);
                        dataBuff.cblStride = stride;

                        for (j = 0; j < num; j++)
                        {
                            dataBuff[j] = chunks[1].dataView.getUint8(accPos, le);

                            if (stride != 1 && (j + 1) % numComps === 0) accPos += stride - (numComps * 1);

                            accPos += 1;
                        }
                    }

                    else
                    {
                        console.error("unknown component type", acc.componentType);
                    }

                    gltf.accBuffers.push(dataBuff);
                }
                else
                {
                    // console.log("has no dataview");
                }
            }
        }
    }

    gltf.timing.push(["Parse mesh groups", Math.round((performance.now() - gltf.startTime))]);

    gltf.json.meshes = gltf.json.meshes || [];

    if (gltf.json.meshes)
    {
        for (i = 0; i < gltf.json.meshes.length; i++)
        {
            const mesh = new gltfMeshGroup(gltf, gltf.json.meshes[i]);
            gltf.meshes.push(mesh);
        }
    }

    gltf.timing.push(["Parse nodes", Math.round((performance.now() - gltf.startTime))]);

    for (i = 0; i < gltf.json.nodes.length; i++)
    {
        if (gltf.json.nodes[i].children)
            for (j = 0; j < gltf.json.nodes[i].children.length; j++)
            {
                gltf.json.nodes[gltf.json.nodes[i].children[j]].isChild = true;
            }
    }

    for (i = 0; i < gltf.json.nodes.length; i++)
    {
        const node = new gltfNode(gltf.json.nodes[i], gltf);
        gltf.nodes.push(node);
    }

    for (i = 0; i < gltf.nodes.length; i++)
    {
        const node = gltf.nodes[i];

        if (!node.children) continue;
        for (let j = 0; j < node.children.length; j++)
        {
            gltf.nodes[node.children[j]].parent = node;
        }
    }

    for (i = 0; i < gltf.nodes.length; i++)
    {
        gltf.nodes[i].initSkin();
    }

    needsMatUpdate = true;

    gltf.timing.push(["load anims", Math.round((performance.now() - gltf.startTime))]);

    if (gltf.json.animations) loadAnims(gltf);

    gltf.timing.push(["load cameras", Math.round((performance.now() - gltf.startTime))]);

    if (gltf.json.cameras) loadCams(gltf);

    gltf.timing.push(["finished", Math.round((performance.now() - gltf.startTime))]);
    return gltf;
}
let gltfMesh = class
{
    constructor(name, prim, gltf, finished)
    {
        this.POINTS = 0;
        this.LINES = 1;
        this.LINE_LOOP = 2;
        this.LINE_STRIP = 3;
        this.TRIANGLES = 4;
        this.TRIANGLE_STRIP = 5;
        this.TRIANGLE_FAN = 6;

        this.test = 0;
        this.name = name;
        this.submeshIndex = 0;
        this.material = prim.material;
        // console.log(prim);
        this.mesh = null;
        this.geom = new CGL.Geometry("gltf_" + this.name);
        this.geom.verticesIndices = [];
        this.bounds = null;
        this.primitive = 4;
        this.morphTargetsRenderMod = null;
        this.weights = prim.weights;

        if (prim.hasOwnProperty("mode")) this.primitive = prim.mode;

        if (prim.hasOwnProperty("indices")) this.geom.verticesIndices = gltf.accBuffers[prim.indices];

        gltf.loadingMeshes = gltf.loadingMeshes || 0;
        gltf.loadingMeshes++;

        this.materialJson =
            this._matPbrMetalness =
            this._matPbrRoughness =
            this._matDiffuseColor = null;

        if (gltf.json.materials)
        {
            if (this.material != -1) this.materialJson = gltf.json.materials[this.material];

            if (this.materialJson && this.materialJson.pbrMetallicRoughness)
            {
                if (!this.materialJson.pbrMetallicRoughness.hasOwnProperty("baseColorFactor"))
                {
                    this._matDiffuseColor = [1, 1, 1, 1];
                }
                else
                {
                    this._matDiffuseColor = this.materialJson.pbrMetallicRoughness.baseColorFactor;
                }

                this._matDiffuseColor = this.materialJson.pbrMetallicRoughness.baseColorFactor;

                if (!this.materialJson.pbrMetallicRoughness.hasOwnProperty("metallicFactor"))
                {
                    this._matPbrMetalness = 1.0;
                }
                else
                {
                    this._matPbrMetalness = this.materialJson.pbrMetallicRoughness.metallicFactor || null;
                }

                if (!this.materialJson.pbrMetallicRoughness.hasOwnProperty("roughnessFactor"))
                {
                    this._matPbrRoughness = 1.0;
                }
                else
                {
                    this._matPbrRoughness = this.materialJson.pbrMetallicRoughness.roughnessFactor || null;
                }
            }
        }

        if (gltf.useDraco && prim.extensions.KHR_draco_mesh_compression)
        {
            const view = gltf.chunks[0].data.bufferViews[prim.extensions.KHR_draco_mesh_compression.bufferView];
            const num = view.byteLength;
            const dataBuff = new Int8Array(num);
            let accPos = (view.byteOffset || 0);// + (acc.byteOffset || 0);
            for (let j = 0; j < num; j++)
            {
                dataBuff[j] = gltf.chunks[1].dataView.getInt8(accPos, le);
                accPos++;
            }

            const dracoDecoder = window.DracoDecoder;
            dracoDecoder.decodeGeometry(dataBuff.buffer, (geometry) =>
            {
                const geom = new CGL.Geometry("draco mesh " + name);

                for (let i = 0; i < geometry.attributes.length; i++)
                {
                    const attr = geometry.attributes[i];

                    if (attr.name === "position") geom.vertices = attr.array;
                    else if (attr.name === "normal") geom.vertexNormals = attr.array;
                    else if (attr.name === "uv") geom.texCoords = attr.array;
                    else if (attr.name === "color") geom.vertexColors = this.calcVertexColors(attr.array);
                    else if (attr.name === "joints") geom.setAttribute("attrJoints", Array.from(attr.array), 4);
                    else if (attr.name === "weights")
                    {
                        const arr4 = new Float32Array(attr.array.length / attr.itemSize * 4);

                        for (let k = 0; k < attr.array.length / attr.itemSize; k++)
                        {
                            arr4[k * 4] = arr4[k * 4 + 1] = arr4[k * 4 + 2] = arr4[k * 4 + 3] = 0;
                            for (let j = 0; j < attr.itemSize; j++)
                                arr4[k * 4 + j] = attr.array[k * attr.itemSize + j];
                        }
                        geom.setAttribute("attrWeights", arr4, 4);
                    }
                    else op.logWarn("unknown draco attrib", attr);
                }

                geometry.attributes = null;
                geom.verticesIndices = geometry.index.array;

                this.setGeom(geom);

                this.mesh = null;
                gltf.loadingMeshes--;
                gltf.timing.push(["draco decode", Math.round((performance.now() - gltf.startTime))]);

                if (finished)finished(this);
            }, (error) => { op.logError(error); });
        }
        else
        {
            gltf.loadingMeshes--;
            this.fillGeomAttribs(gltf, this.geom, prim.attributes);

            if (prim.targets)
            {
                for (let j = 0; j < prim.targets.length; j++)
                {
                    const tgeom = new CGL.Geometry("gltf_target_" + j);

                    // if (prim.hasOwnProperty("indices")) tgeom.verticesIndices = gltf.accBuffers[prim.indices];

                    this.fillGeomAttribs(gltf, tgeom, prim.targets[j], false);

                    // { // calculate normals for final position of morphtarget for later...
                    //     for (let i = 0; i < tgeom.vertices.length; i++) tgeom.vertices[i] += this.geom.vertices[i];
                    //     tgeom.calculateNormals();
                    //     for (let i = 0; i < tgeom.vertices.length; i++) tgeom.vertices[i] -= this.geom.vertices[i];
                    // }

                    this.geom.morphTargets.push(tgeom);
                }
            }
            if (finished)finished(this);
        }
    }

    _linearToSrgb(x)
    {
        if (x <= 0)
            return 0;
        else if (x >= 1)
            return 1;
        else if (x < 0.0031308)
            return x * 12.92;
        else
            return x ** (1 / 2.2) * 1.055 - 0.055;
    }

    calcVertexColors(arr, type)
    {
        let vertexColors = null;
        if (arr instanceof Float32Array)
        {
            let div = false;
            for (let i = 0; i < arr.length; i++)
            {
                if (arr[i] > 1)
                {
                    div = true;
                    continue;
                }
            }

            if (div)
                for (let i = 0; i < arr.length; i++) arr[i] /= 65535;

            vertexColors = arr;
        }

        else if (arr instanceof Uint16Array)
        {
            const fb = new Float32Array(arr.length);
            for (let i = 0; i < arr.length; i++) fb[i] = arr[i] / 65535;

            vertexColors = fb;
        }
        else vertexColors = arr;

        for (let i = 0; i < vertexColors.length; i++)
        {
            vertexColors[i] = this._linearToSrgb(vertexColors[i]);
        }

        console.log("arr.cblStride", arr.cblStride);
        if (arr.cblStride == 3)
        {
            const nc = new Float32Array(vertexColors.length / 3 * 4);
            for (let i = 0; i < vertexColors.length / 3; i++)
            {
                nc[i * 4 + 0] = vertexColors[i * 3 + 0];
                nc[i * 4 + 1] = vertexColors[i * 3 + 1];
                nc[i * 4 + 2] = vertexColors[i * 3 + 2];
                nc[i * 4 + 3] = 1;
            }
            vertexColors = nc;
        }

        return vertexColors;
    }

    fillGeomAttribs(gltf, tgeom, attribs, setGeom)
    {
        if (attribs.hasOwnProperty("POSITION")) tgeom.vertices = gltf.accBuffers[attribs.POSITION];
        if (attribs.hasOwnProperty("NORMAL")) tgeom.vertexNormals = gltf.accBuffers[attribs.NORMAL];
        if (attribs.hasOwnProperty("TANGENT")) tgeom.tangents = gltf.accBuffers[attribs.TANGENT];

        // // console.log(gltf.accBuffers[attribs.COLOR_0])
        // console.log(gltf);

        if (attribs.hasOwnProperty("COLOR_0")) tgeom.vertexColors = this.calcVertexColors(gltf.accBuffers[attribs.COLOR_0], gltf.accBuffers[attribs.COLOR_0].type);
        if (attribs.hasOwnProperty("COLOR_1")) tgeom.setAttribute("attrVertColor1", this.calcVertexColors(gltf.accBuffers[attribs.COLOR_1]), gltf.accBuffers[attribs.COLOR_1].type);
        if (attribs.hasOwnProperty("COLOR_2")) tgeom.setAttribute("attrVertColor2", this.calcVertexColors(gltf.accBuffers[attribs.COLOR_2]), gltf.accBuffers[attribs.COLOR_2].type);
        if (attribs.hasOwnProperty("COLOR_3")) tgeom.setAttribute("attrVertColor3", this.calcVertexColors(gltf.accBuffers[attribs.COLOR_3]), gltf.accBuffers[attribs.COLOR_3].type);
        if (attribs.hasOwnProperty("COLOR_4")) tgeom.setAttribute("attrVertColor4", this.calcVertexColors(gltf.accBuffers[attribs.COLOR_4]), gltf.accBuffers[attribs.COLOR_4].type);

        if (attribs.hasOwnProperty("TEXCOORD_0")) tgeom.texCoords = gltf.accBuffers[attribs.TEXCOORD_0];
        if (attribs.hasOwnProperty("TEXCOORD_1")) tgeom.setAttribute("attrTexCoord1", gltf.accBuffers[attribs.TEXCOORD_1], 2);
        if (attribs.hasOwnProperty("TEXCOORD_2")) tgeom.setAttribute("attrTexCoord2", gltf.accBuffers[attribs.TEXCOORD_2], 2);
        if (attribs.hasOwnProperty("TEXCOORD_3")) tgeom.setAttribute("attrTexCoord3", gltf.accBuffers[attribs.TEXCOORD_3], 2);
        if (attribs.hasOwnProperty("TEXCOORD_4")) tgeom.setAttribute("attrTexCoord4", gltf.accBuffers[attribs.TEXCOORD_4], 2);

        if (attribs.hasOwnProperty("WEIGHTS_0"))
        {
            tgeom.setAttribute("attrWeights", gltf.accBuffers[attribs.WEIGHTS_0], 4);
        }
        if (attribs.hasOwnProperty("JOINTS_0"))
        {
            if (!gltf.accBuffers[attribs.JOINTS_0])console.log("no !gltf.accBuffers[attribs.JOINTS_0]");
            tgeom.setAttribute("attrJoints", gltf.accBuffers[attribs.JOINTS_0], 4);
        }

        if (attribs.hasOwnProperty("POSITION")) gltf.accBuffersDelete.push(attribs.POSITION);
        if (attribs.hasOwnProperty("NORMAL")) gltf.accBuffersDelete.push(attribs.NORMAL);
        if (attribs.hasOwnProperty("TEXCOORD_0")) gltf.accBuffersDelete.push(attribs.TEXCOORD_0);
        if (attribs.hasOwnProperty("TANGENT")) gltf.accBuffersDelete.push(attribs.TANGENT);
        if (attribs.hasOwnProperty("COLOR_0"))gltf.accBuffersDelete.push(attribs.COLOR_0);
        if (attribs.hasOwnProperty("COLOR_0"))gltf.accBuffersDelete.push(attribs.COLOR_0);
        if (attribs.hasOwnProperty("COLOR_1"))gltf.accBuffersDelete.push(attribs.COLOR_1);
        if (attribs.hasOwnProperty("COLOR_2"))gltf.accBuffersDelete.push(attribs.COLOR_2);
        if (attribs.hasOwnProperty("COLOR_3"))gltf.accBuffersDelete.push(attribs.COLOR_3);

        if (attribs.hasOwnProperty("TEXCOORD_1")) gltf.accBuffersDelete.push(attribs.TEXCOORD_1);
        if (attribs.hasOwnProperty("TEXCOORD_2")) gltf.accBuffersDelete.push(attribs.TEXCOORD_2);
        if (attribs.hasOwnProperty("TEXCOORD_3")) gltf.accBuffersDelete.push(attribs.TEXCOORD_3);
        if (attribs.hasOwnProperty("TEXCOORD_4")) gltf.accBuffersDelete.push(attribs.TEXCOORD_4);

        if (setGeom !== false) if (tgeom && tgeom.verticesIndices) this.setGeom(tgeom);
    }

    setGeom(geom)
    {
        if (inNormFormat.get() == "X-ZY")
        {
            for (let i = 0; i < geom.vertexNormals.length; i += 3)
            {
                let t = geom.vertexNormals[i + 2];
                geom.vertexNormals[i + 2] = geom.vertexNormals[i + 1];
                geom.vertexNormals[i + 1] = -t;
            }
        }

        if (inVertFormat.get() == "XZ-Y")
        {
            for (let i = 0; i < geom.vertices.length; i += 3)
            {
                let t = geom.vertices[i + 2];
                geom.vertices[i + 2] = -geom.vertices[i + 1];
                geom.vertices[i + 1] = t;
            }
        }

        if (this.primitive == this.TRIANGLES)
        {
            if (inCalcNormals.get() == "Force Smooth" || inCalcNormals.get() == false) geom.calculateNormals();
            else if (!geom.vertexNormals.length && inCalcNormals.get() == "Auto") geom.calculateNormals({ "smooth": false });

            if ((!geom.biTangents || geom.biTangents.length == 0) && geom.tangents)
            {
                const bitan = vec3.create();
                const tan = vec3.create();

                const tangents = geom.tangents;
                geom.tangents = new Float32Array(tangents.length / 4 * 3);
                geom.biTangents = new Float32Array(tangents.length / 4 * 3);

                for (let i = 0; i < tangents.length; i += 4)
                {
                    const idx = i / 4 * 3;

                    vec3.cross(
                        bitan,
                        [geom.vertexNormals[idx], geom.vertexNormals[idx + 1], geom.vertexNormals[idx + 2]],
                        [tangents[i], tangents[i + 1], tangents[i + 2]]
                    );

                    vec3.div(bitan, bitan, [tangents[i + 3], tangents[i + 3], tangents[i + 3]]);
                    vec3.normalize(bitan, bitan);

                    geom.biTangents[idx + 0] = bitan[0];
                    geom.biTangents[idx + 1] = bitan[1];
                    geom.biTangents[idx + 2] = bitan[2];

                    geom.tangents[idx + 0] = tangents[i + 0];
                    geom.tangents[idx + 1] = tangents[i + 1];
                    geom.tangents[idx + 2] = tangents[i + 2];
                }
            }

            if (geom.tangents.length === 0 || inCalcNormals.get() != "Never")
            {
                // console.log("[gltf ]no tangents... calculating tangents...");
                geom.calcTangentsBitangents();
            }
        }

        this.geom = geom;

        this.bounds = geom.getBounds();
    }

    render(cgl, ignoreMaterial, skinRenderer)
    {
        if (!this.mesh && this.geom && this.geom.verticesIndices)
        {
            let g = this.geom;
            if (this.geom.vertices.length / 3 > 64000)
            {
                g = this.geom.copy();
                g.unIndex(false, true);
            }

            let glprim;

            if (cgl.gl)
            {
                if (this.primitive == this.TRIANGLES)glprim = cgl.gl.TRIANGLES;
                else if (this.primitive == this.LINES)glprim = cgl.gl.LINES;
                else if (this.primitive == this.LINE_STRIP)glprim = cgl.gl.LINE_STRIP;
                else if (this.primitive == this.POINTS)glprim = cgl.gl.POINTS;
                else
                {
                    op.logWarn("unknown primitive type", this);
                }
            }

            this.mesh = op.patch.cg.createMesh(g, { "glPrimitive": glprim });
        }

        if (this.mesh)
        {
            // update morphTargets
            if (this.geom && this.geom.morphTargets.length && !this.morphTargetsRenderMod)
            {
                this.mesh.addVertexNumbers = true;
                this.morphTargetsRenderMod = new GltfTargetsRenderer(this);
            }

            let useMat = !ignoreMaterial && this.material != -1 && gltf.shaders[this.material];
            if (skinRenderer)useMat = false;

            if (useMat) cgl.pushShader(gltf.shaders[this.material]);

            const currentShader = cgl.getShader() || {};
            const uniDiff = currentShader.uniformColorDiffuse;

            const uniPbrMetalness = currentShader.uniformPbrMetalness;
            const uniPbrRoughness = currentShader.uniformPbrRoughness;

            // if (gltf.shaders[this.material] && !inUseMatProps.get())
            // {
            //     gltf.shaders[this.material]=null;
            // }

            if (!gltf.shaders[this.material] && inUseMatProps.get())
            {
                if (uniDiff && this._matDiffuseColor)
                {
                    this._matDiffuseColorOrig = [uniDiff.getValue()[0], uniDiff.getValue()[1], uniDiff.getValue()[2], uniDiff.getValue()[3]];
                    uniDiff.setValue(this._matDiffuseColor);
                }

                if (uniPbrMetalness)
                    if (this._matPbrMetalness != null)
                    {
                        this._matPbrMetalnessOrig = uniPbrMetalness.getValue();
                        uniPbrMetalness.setValue(this._matPbrMetalness);
                    }
                    else
                        uniPbrMetalness.setValue(0);

                if (uniPbrRoughness)
                    if (this._matPbrRoughness != null)
                    {
                        this._matPbrRoughnessOrig = uniPbrRoughness.getValue();
                        uniPbrRoughness.setValue(this._matPbrRoughness);
                    }
                    else
                    {
                        uniPbrRoughness.setValue(0);
                    }
            }

            if (this.morphTargetsRenderMod) this.morphTargetsRenderMod.renderStart(cgl, 0);
            if (this.mesh)
            {
                // console.log(this.mesh)
                // this.mesh.lastMaterial=0;
                this.mesh.render(cgl.getShader(), ignoreMaterial);
            }
            if (this.morphTargetsRenderMod) this.morphTargetsRenderMod.renderFinish(cgl);

            if (inUseMatProps.get())
            {
                if (uniDiff && this._matDiffuseColor) uniDiff.setValue(this._matDiffuseColorOrig);
                if (uniPbrMetalness && this._matPbrMetalnessOrig != undefined) uniPbrMetalness.setValue(this._matPbrMetalnessOrig);
                if (uniPbrRoughness && this._matPbrRoughnessOrig != undefined) uniPbrRoughness.setValue(this._matPbrRoughnessOrig);
            }

            if (useMat) cgl.popShader();
        }
    }
};
const gltfMeshGroup = class
{
    constructor(gltf, m)
    {
        this.bounds = new CABLES.CG.BoundingBox();
        this.meshes = [];
        this.name = m.name;
        const prims = m.primitives;

        for (let i = 0; i < prims.length; i++)
        {
            const mesh = new gltfMesh(this.name, prims[i], gltf,
                (mesh) =>
                {
                    mesh.extras = m.extras;
                    this.bounds.apply(mesh.bounds);
                });

            mesh.submeshIndex = i;
            this.meshes.push(mesh);
        }
    }

    render(cgl, ignoreMat, skinRenderer, _time, weights)
    {
        for (let i = 0; i < this.meshes.length; i++)
        {
            const useMat = gltf.shaders[this.meshes[i].material];

            if (!ignoreMat && useMat) cgl.pushShader(gltf.shaders[this.meshes[i].material]);
            // console.log(gltf.shaders[this.meshes[i].material],this.meshes[i].material)
            if (skinRenderer)skinRenderer.renderStart(cgl, _time);
            if (weights) this.meshes[i].weights = weights;
            this.meshes[i].render(cgl, ignoreMat, skinRenderer, _time);
            if (skinRenderer)skinRenderer.renderFinish(cgl);
            if (!ignoreMat && useMat) cgl.popShader();
        }
    }
};
const gltfNode = class
{
    constructor(node, gltf)
    {
        this.isChild = node.isChild || false;
        this.name = node.name;
        if (node.hasOwnProperty("camera")) this.camera = node.camera;
        this.hidden = false;
        this.mat = mat4.create();
        this._animActions = {};
        this.animWeights = [];
        this._animMat = mat4.create();
        this._tempMat = mat4.create();
        this._tempQuat = quat.create();
        this._tempRotmat = mat4.create();
        this.mesh = null;
        this.children = [];
        this._node = node;
        this._gltf = gltf;
        this.absMat = mat4.create();
        this.addTranslate = null;
        this._tempAnimScale = null;
        this.addMulMat = null;
        this.updateMatrix();
        this.skinRenderer = null;
        this.copies = [];
    }

    get skin()
    {
        if (this._node.hasOwnProperty("skin")) return this._node.skin;
        else return -1;
    }

    copy()
    {
        this.isCopy = true;
        const n = new gltfNode(this._node, this._gltf);
        n.copyOf = this;

        n._animActions = this._animActions;
        n.children = this.children;
        if (this.skin) n.skinRenderer = new GltfSkin(this);

        this.updateMatrix();
        return n;
    }

    hasSkin()
    {
        if (this._node.hasOwnProperty("skin")) return this._gltf.json.skins[this._node.skin].name || "unknown";
        return false;
    }

    initSkin()
    {
        if (this.skin > -1)
        {
            this.skinRenderer = new GltfSkin(this);
        }
    }

    updateMatrix()
    {
        mat4.identity(this.mat);
        if (this._node.translation) mat4.translate(this.mat, this.mat, this._node.translation);

        if (this._node.rotation)
        {
            const rotmat = mat4.create();
            this._rot = this._node.rotation;

            mat4.fromQuat(rotmat, this._node.rotation);
            mat4.mul(this.mat, this.mat, rotmat);
        }

        if (this._node.scale)
        {
            this._scale = this._node.scale;
            mat4.scale(this.mat, this.mat, this._scale);
        }

        if (this._node.hasOwnProperty("mesh"))
        {
            this.mesh = this._gltf.meshes[this._node.mesh];
            if (this.isCopy)
            {
                // console.log(this.mesh);
            }
        }

        if (this._node.children)
        {
            for (let i = 0; i < this._node.children.length; i++)
            {
                this._gltf.json.nodes[i].isChild = true;
                if (this._gltf.nodes[this._node.children[i]]) this._gltf.nodes[this._node.children[i]].isChild = true;
                this.children.push(this._node.children[i]);
            }
        }
    }

    unHide()
    {
        this.hidden = false;
        for (let i = 0; i < this.children.length; i++)
            if (this.children[i].unHide) this.children[i].unHide();
    }

    calcBounds(gltf, mat, bounds)
    {
        const localMat = mat4.create();

        if (mat) mat4.copy(localMat, mat);
        if (this.mat) mat4.mul(localMat, localMat, this.mat);

        if (this.mesh)
        {
            const bb = this.mesh.bounds.copy();
            bb.mulMat4(localMat);
            bounds.apply(bb);

            if (bounds.changed)
            {
                boundingPoints.push(
                    bb._min[0] || 0, bb._min[1] || 0, bb._min[2] || 0,
                    bb._max[0] || 0, bb._max[1] || 0, bb._max[2] || 0);
            }
        }

        for (let i = 0; i < this.children.length; i++)
        {
            if (gltf.nodes[this.children[i]] && gltf.nodes[this.children[i]].calcBounds)
            {
                const b = gltf.nodes[this.children[i]].calcBounds(gltf, localMat, bounds);

                bounds.apply(b);
            }
        }

        if (bounds.changed) return bounds;
        else return null;
    }

    setAnimAction(name)
    {
        // console.log("setAnimAction:", name);
        if (!name) return;

        this._currentAnimaction = name;

        if (name && !this._animActions[name])
        {
            // console.log("no action found:", name,this._animActions);
            return null;
        }

        // else console.log("YES action found:", name);
        // console.log(this._animActions);

        for (let path in this._animActions[name])
        {
            if (path == "translation") this._animTrans = this._animActions[name][path];
            else if (path == "rotation") this._animRot = this._animActions[name][path];
            else if (path == "scale") this._animScale = this._animActions[name][path];
            else if (path == "weights") this.animWeights = this._animActions[name][path];
            else console.log("[gltfNode] unknown anim path", path, this._animActions[name][path]);
        }
    }

    setAnim(path, name, anims)
    {
        if (!path || !name || !anims) return;

        // console.log("setanim", this._node.name, path, name, anims);

        this._animActions[name] = this._animActions[name] || {};

        // console.log(this._animActions);
        // debugger;

        // for (let i = 0; i < this.copies.length; i++) this.copies[i]._animActions = this._animActions;

        if (this._animActions[name][path]) op.log("[gltfNode] animation action path already exists", name, path, this._animActions[name][path]);

        this._animActions[name][path] = anims;

        if (path == "translation") this._animTrans = anims;
        else if (path == "rotation") this._animRot = anims;
        else if (path == "scale") this._animScale = anims;
        else if (path == "weights")
        {
            // console.log("weights",name,path,anims)
            this.animWeights = this._animActions[name][path];
            // console.log(this.animWeights);
        }
        else console.warn("unknown anim path", path, anims);
    }

    modelMatLocal()
    {
        return this._animMat || this.mat;
    }

    modelMatAbs()
    {
        return this.absMat;
    }

    transform(cgl, _time)
    {
        if (!_time && _time != 0)_time = time;

        this._lastTimeTrans = _time;

        // console.log(this._rot)

        gltfTransforms++;

        if (!this._animTrans && !this._animRot && !this._animScale)
        {
            mat4.mul(cgl.mMatrix, cgl.mMatrix, this.mat);
            this._animMat = null;
        }
        else
        {
            this._animMat = this._animMat || mat4.create();
            mat4.identity(this._animMat);

            const playAnims = true;

            if (playAnims && this._animTrans)
            {
                mat4.translate(this._animMat, this._animMat, [
                    this._animTrans[0].getValue(_time),
                    this._animTrans[1].getValue(_time),
                    this._animTrans[2].getValue(_time)]);
            }
            else
            if (this._node.translation) mat4.translate(this._animMat, this._animMat, this._node.translation);

            if (playAnims && this._animRot)
            {
                if (this._animRot[0].defaultEasing == CABLES.EASING_LINEAR) CABLES.Anim.slerpQuaternion(_time, this._tempQuat, this._animRot[0], this._animRot[1], this._animRot[2], this._animRot[3]);
                else if (this._animRot[0].defaultEasing == CABLES.EASING_ABSOLUTE)
                {
                    this._tempQuat[0] = this._animRot[0].getValue(_time);
                    this._tempQuat[1] = this._animRot[1].getValue(_time);
                    this._tempQuat[2] = this._animRot[2].getValue(_time);
                    this._tempQuat[3] = this._animRot[3].getValue(_time);
                }
                else if (this._animRot[0].defaultEasing == CABLES.EASING_CUBICSPLINE)
                {
                    CABLES.Anim.slerpQuaternion(_time, this._tempQuat, this._animRot[0], this._animRot[1], this._animRot[2], this._animRot[3]);
                }

                mat4.fromQuat(this._tempMat, this._tempQuat);
                mat4.mul(this._animMat, this._animMat, this._tempMat);
            }
            else if (this._rot)
            {
                mat4.fromQuat(this._tempRotmat, this._rot);
                mat4.mul(this._animMat, this._animMat, this._tempRotmat);
            }

            if (playAnims && this._animScale)
            {
                if (!this._tempAnimScale) this._tempAnimScale = [1, 1, 1];
                this._tempAnimScale[0] = this._animScale[0].getValue(_time);
                this._tempAnimScale[1] = this._animScale[1].getValue(_time);
                this._tempAnimScale[2] = this._animScale[2].getValue(_time);
                mat4.scale(this._animMat, this._animMat, this._tempAnimScale);
            }
            else if (this._scale) mat4.scale(this._animMat, this._animMat, this._scale);

            mat4.mul(cgl.mMatrix, cgl.mMatrix, this._animMat);
        }

        if (this.animWeights)
        {
            this.weights = this.weights || [];

            let str = "";
            for (let i = 0; i < this.animWeights.length; i++)
            {
                this.weights[i] = this.animWeights[i].getValue(_time);
                str += this.weights[i] + "/";
            }

            // console.log(str);
            // this.mesh.weights=this.animWeights.get(_time);
            // console.log(this.animWeights);
        }

        if (this.addTranslate) mat4.translate(cgl.mMatrix, cgl.mMatrix, this.addTranslate);

        if (this.addMulMat) mat4.mul(cgl.mMatrix, cgl.mMatrix, this.addMulMat);

        mat4.copy(this.absMat, cgl.mMatrix);
    }

    render(cgl, dontTransform, dontDrawMesh, ignoreMaterial, ignoreChilds, drawHidden, _time)
    {
        if (!dontTransform) cgl.pushModelMatrix();

        if (_time === undefined) _time = gltf.time;

        if (!dontTransform || this.skinRenderer) this.transform(cgl, _time);

        if (this.hidden && !drawHidden)
        {
        }
        else
        {
            if (this.skinRenderer)
            {
                this.skinRenderer.time = _time;
                if (!dontDrawMesh)
                    this.mesh.render(cgl, ignoreMaterial, this.skinRenderer, _time, this.weights);
            }
            else
            {
                if (this.mesh && !dontDrawMesh)
                    this.mesh.render(cgl, ignoreMaterial, null, _time, this.weights);
            }
        }

        if (!ignoreChilds && !this.hidden)
            for (let i = 0; i < this.children.length; i++)
                if (gltf.nodes[this.children[i]])
                    gltf.nodes[this.children[i]].render(cgl, dontTransform, dontDrawMesh, ignoreMaterial, ignoreChilds, drawHidden, _time);

        if (!dontTransform)cgl.popModelMatrix();
    }
};
let tab = null;

function closeTab()
{
    if (tab)gui.mainTabs.closeTab(tab.id);
    tab = null;
}

function formatVec(arr)
{
    const nums = [];
    for (let i = 0; i < arr.length; i++)
    {
        nums.push(Math.round(arr[i] * 1000) / 1000);
    }

    return nums.join(",");
}

function printNode(html, node, level)
{
    if (!gltf) return;

    html += "<tr class=\"row\">";

    let ident = "";
    let identSpace = "";

    for (let i = 1; i < level; i++)
    {
        identSpace += "&nbsp;&nbsp;&nbsp;";
        let identClass = "identBg";
        if (i == 1)identClass = "identBgLevel0";
        ident += "<td class=\"ident " + identClass + "\" ><div style=\"\"></div></td>";
    }
    let id = CABLES.uuid();
    html += ident;
    html += "<td colspan=\"" + (21 - level) + "\">";

    if (node.mesh && node.mesh.meshes.length)html += "<span class=\"icon icon-cube\"></span>&nbsp;";
    else html += "<span class=\"icon icon-box-select\"></span> &nbsp;";

    html += node.name + "</td><td></td>";

    if (node.mesh)
    {
        html += "<td>";
        for (let i = 0; i < node.mesh.meshes.length; i++)
        {
            if (i > 0)html += ", ";
            html += node.mesh.meshes[i].name;
        }

        html += "</td>";

        html += "<td>";
        html += node.hasSkin() || "-";
        html += "</td>";

        html += "<td>";
        let countMats = 0;
        for (let i = 0; i < node.mesh.meshes.length; i++)
        {
            if (countMats > 0)html += ", ";
            if (gltf.json.materials && node.mesh.meshes[i].hasOwnProperty("material"))
            {
                if (gltf.json.materials[node.mesh.meshes[i].material])
                {
                    html += gltf.json.materials[node.mesh.meshes[i].material].name;
                    countMats++;
                }
            }
        }
        if (countMats == 0)html += "none";
        html += "</td>";
    }
    else
    {
        html += "<td>-</td><td>-</td><td>-</td>";
    }

    html += "<td>";

    if (node._node.translation || node._node.rotation || node._node.scale)
    {
        let info = "";

        if (node._node.translation)info += "Translate: `" + formatVec(node._node.translation) + "` || ";
        if (node._node.rotation)info += "Rotation: `" + formatVec(node._node.rotation) + "` || ";
        if (node._node.scale)info += "Scale: `" + formatVec(node._node.scale) + "` || ";

        html += "<span class=\"icon icon-gizmo info\" data-info=\"" + info + "\"></span> &nbsp;";
    }

    if (node._animRot || node._animScale || node._animTrans)
    {
        let info = "Animated: ";
        if (node._animRot) info += "Rot ";
        if (node._animScale) info += "Scale ";
        if (node._animTrans) info += "Trans ";

        html += "<span class=\"icon icon-clock info\" data-info=\"" + info + "\"></span>&nbsp;";
    }

    if (!node._node.translation && !node._node.rotation && !node._node.scale && !node._animRot && !node._animScale && !node._animTrans) html += "-";

    html += "</td>";

    html += "<td>";
    let hideclass = "";
    if (node.hidden)hideclass = "node-hidden";

    // html+='';
    html += "<a onclick=\"gui.corePatch().getOpById('" + op.id + "').exposeNode('" + node.name + "','transform')\" class=\"treebutton\">Transform</a>";
    html += " <a onclick=\"gui.corePatch().getOpById('" + op.id + "').exposeNode('" + node.name + "','hierarchy')\" class=\"treebutton\">Hierarchy</a>";
    html += " <a onclick=\"gui.corePatch().getOpById('" + op.id + "').exposeNode('" + node.name + "')\" class=\"treebutton\">Node</a>";

    if (node.hasSkin())
        html += " <a onclick=\"gui.corePatch().getOpById('" + op.id + "').exposeNode('" + node.name + "',false,{skin:true});\" class=\"treebutton\">Skin</a>";

    html += "</td><td>";
    html += "&nbsp;<span class=\"icon iconhover icon-eye " + hideclass + "\" onclick=\"gui.corePatch().getOpById('" + op.id + "').toggleNodeVisibility('" + node.name + "');this.classList.toggle('node-hidden');\"></span>";
    html += "</td>";

    html += "</tr>";

    if (node.children)
    {
        for (let i = 0; i < node.children.length; i++)
            html = printNode(html, gltf.nodes[node.children[i]], level + 1);
    }

    return html;
}

function printMaterial(mat, idx)
{
    let html = "<tr>";
    html += " <td>" + idx + "</td>";
    html += " <td>" + mat.name + "</td>";

    html += " <td>";

    const info = JSON.stringify(mat, null, 4).replaceAll("\"", "").replaceAll("\n", "<br/>");

    html += "<span class=\"icon icon-info\" onclick=\"new CABLES.UI.ModalDialog({ 'html': '<pre>" + info + "</pre>', 'title': '" + mat.name + "' });\"></span>&nbsp;";

    if (mat.pbrMetallicRoughness && mat.pbrMetallicRoughness.baseColorFactor)
    {
        let rgb = "";
        rgb += "" + Math.round(mat.pbrMetallicRoughness.baseColorFactor[0] * 255);
        rgb += "," + Math.round(mat.pbrMetallicRoughness.baseColorFactor[1] * 255);
        rgb += "," + Math.round(mat.pbrMetallicRoughness.baseColorFactor[2] * 255);

        html += "<div style=\"width:15px;height:15px;background-color:rgb(" + rgb + ");display:inline-block\">&nbsp;</a>";
    }
    html += " <td style=\"\">" + (gltf.shaders[idx] ? "-" : "<a onclick=\"gui.corePatch().getOpById('" + op.id + "').assignMaterial('" + mat.name + "')\" class=\"treebutton\">Assign</a>") + "<td>";
    html += "<td>";

    html += "</tr>";
    return html;
}

function printInfo()
{
    if (!gltf) return;

    const startTime = performance.now();
    const sizes = {};
    let html = "<div style=\"overflow:scroll;width:100%;height:100%\">";

    html += "File: <a href=\"" + CABLES.platform.getCablesUrl() + "/asset/patches/?filename=" + inFile.get() + "\" target=\"_blank\">" + CABLES.basename(inFile.get()) + "</a><br/>";

    html += "Generator:" + gltf.json.asset.generator;

    let numNodes = 0;
    if (gltf.json.nodes)numNodes = gltf.json.nodes.length;
    html += "<div id=\"groupNodes\">Nodes (" + numNodes + ")</div>";

    html += "<table id=\"sectionNodes\" class=\"table treetable\">";

    html += "<tr>";
    html += " <th colspan=\"21\">Name</th>";
    html += " <th>Mesh</th>";
    html += " <th>Skin</th>";
    html += " <th>Material</th>";
    html += " <th>Transform</th>";
    html += " <th>Expose</th>";
    html += " <th></th>";
    html += "</tr>";

    for (let i = 0; i < gltf.nodes.length; i++)
    {
        if (!gltf.nodes[i].isChild)
            html = printNode(html, gltf.nodes[i], 1);
    }
    html += "</table>";

    // / //////////////////

    let numMaterials = 0;
    if (gltf.json.materials)numMaterials = gltf.json.materials.length;
    html += "<div id=\"groupMaterials\">Materials (" + numMaterials + ")</div>";

    if (!gltf.json.materials || gltf.json.materials.length == 0)
    {
    }
    else
    {
        html += "<table id=\"materialtable\"  class=\"table treetable\">";
        html += "<tr>";
        html += " <th>Index</th>";
        html += " <th>Name</th>";
        html += " <th>Color</th>";
        html += " <th>Function</th>";
        html += " <th></th>";
        html += "</tr>";
        for (let i = 0; i < gltf.json.materials.length; i++)
        {
            html += printMaterial(gltf.json.materials[i], i);
        }
        html += "</table>";
    }

    // / ///////////////////////

    html += "<div id=\"groupMeshes\">Meshes (" + gltf.json.meshes.length + ")</div>";

    html += "<table id=\"meshestable\"  class=\"table treetable\">";
    html += "<tr>";
    html += " <th>Name</th>";
    html += " <th>Node</th>";
    html += " <th>Material</th>";
    html += " <th>Vertices</th>";
    html += " <th>Attributes</th>";
    html += "</tr>";

    let sizeBufferViews = [];
    sizes.meshes = 0;
    sizes.meshTargets = 0;

    for (let i = 0; i < gltf.json.meshes.length; i++)
    {
        html += "<tr>";
        html += "<td>" + gltf.json.meshes[i].name + "</td>";

        html += "<td>";
        let count = 0;
        let nodename = "";
        for (let j = 0; j < gltf.json.nodes.length; j++)
        {
            if (gltf.json.nodes[j].mesh == i)
            {
                count++;
                if (count == 1)
                {
                    nodename = gltf.json.nodes[j].name;
                }
            }
        }
        if (count > 1) html += (count) + " nodes (" + nodename + " ...)";
        else html += nodename;
        html += "</td>";

        // -------

        html += "<td>";
        for (let j = 0; j < gltf.json.meshes[i].primitives.length; j++)
        {
            if (gltf.json.meshes[i].primitives[j].hasOwnProperty("material"))
            {
                if (gltf.json.materials[gltf.json.meshes[i]])
                {
                    html += gltf.json.materials[gltf.json.meshes[i].primitives[j].material].name + " ";
                }
            }
            else html += "None";
        }
        html += "</td>";

        html += "<td>";
        let numVerts = 0;
        for (let j = 0; j < gltf.json.meshes[i].primitives.length; j++)
        {
            if (gltf.json.meshes[i].primitives[j].attributes.POSITION != undefined)
            {
                let v = parseInt(gltf.json.accessors[gltf.json.meshes[i].primitives[j].attributes.POSITION].count);
                numVerts += v;
                html += "" + v + "<br/>";
            }
            else html += "-<br/>";
        }

        if (gltf.json.meshes[i].primitives.length > 1)
            html += "=" + numVerts;
        html += "</td>";

        html += "<td>";
        for (let j = 0; j < gltf.json.meshes[i].primitives.length; j++)
        {
            html += Object.keys(gltf.json.meshes[i].primitives[j].attributes);
            html += " <a onclick=\"gui.corePatch().getOpById('" + op.id + "').exposeGeom('" + gltf.json.meshes[i].name + "'," + j + ")\" class=\"treebutton\">Geometry</a>";
            html += "<br/>";

            if (gltf.json.meshes[i].primitives[j].targets)
            {
                html += gltf.json.meshes[i].primitives[j].targets.length + " targets<br/>";

                if (gltf.json.meshes[i].extras && gltf.json.meshes[i].extras.targetNames)
                    html += "Targetnames:<br/>" + gltf.json.meshes[i].extras.targetNames.join("<br/>");

                html += "<br/>";
            }
        }

        html += "</td>";
        html += "</tr>";

        for (let j = 0; j < gltf.json.meshes[i].primitives.length; j++)
        {
            const accessor = gltf.json.accessors[gltf.json.meshes[i].primitives[j].indices];
            if (accessor)
            {
                let bufView = accessor.bufferView;

                if (sizeBufferViews.indexOf(bufView) == -1)
                {
                    sizeBufferViews.push(bufView);
                    if (gltf.json.bufferViews[bufView])sizes.meshes += gltf.json.bufferViews[bufView].byteLength;
                }
            }

            for (let k in gltf.json.meshes[i].primitives[j].attributes)
            {
                const attr = gltf.json.meshes[i].primitives[j].attributes[k];
                const bufView2 = gltf.json.accessors[attr].bufferView;

                if (sizeBufferViews.indexOf(bufView2) == -1)
                {
                    sizeBufferViews.push(bufView2);
                    if (gltf.json.bufferViews[bufView2])sizes.meshes += gltf.json.bufferViews[bufView2].byteLength;
                }
            }

            if (gltf.json.meshes[i].primitives[j].targets)
                for (let k = 0; k < gltf.json.meshes[i].primitives[j].targets.length; k++)
                {
                    for (let l in gltf.json.meshes[i].primitives[j].targets[k])
                    {
                        const accessorIdx = gltf.json.meshes[i].primitives[j].targets[k][l];
                        const accessor = gltf.json.accessors[accessorIdx];
                        const bufView2 = accessor.bufferView;
                        console.log("accessor", accessor);
                        if (sizeBufferViews.indexOf(bufView2) == -1)
                            if (gltf.json.bufferViews[bufView2])
                            {
                                sizeBufferViews.push(bufView2);
                                sizes.meshTargets += gltf.json.bufferViews[bufView2].byteLength;
                            }
                    }
                }
        }
    }
    html += "</table>";

    // / //////////////////////////////////

    let numSamplers = 0;
    let numAnims = 0;
    let numKeyframes = 0;

    if (gltf.json.animations)
    {
        numAnims = gltf.json.animations.length;
        for (let i = 0; i < gltf.json.animations.length; i++)
        {
            numSamplers += gltf.json.animations[i].samplers.length;
        }
    }

    html += "<div id=\"groupAnims\">Animations (" + numAnims + "/" + numSamplers + ")</div>";

    if (gltf.json.animations)
    {
        html += "<table id=\"sectionAnim\" class=\"table treetable\">";
        html += "<tr>";
        html += "  <th>Name</th>";
        html += "  <th>Target node</th>";
        html += "  <th>Path</th>";
        html += "  <th>Interpolation</th>";
        html += "  <th>Keys</th>";
        html += "</tr>";


        sizes.animations = 0;

        for (let i = 0; i < gltf.json.animations.length; i++)
        {
            for (let j = 0; j < gltf.json.animations[i].samplers.length; j++)
            {
                let bufView = gltf.json.accessors[gltf.json.animations[i].samplers[j].input].bufferView;
                if (sizeBufferViews.indexOf(bufView) == -1)
                {
                    sizeBufferViews.push(bufView);
                    sizes.animations += gltf.json.bufferViews[bufView].byteLength;
                }

                bufView = gltf.json.accessors[gltf.json.animations[i].samplers[j].output].bufferView;
                if (sizeBufferViews.indexOf(bufView) == -1)
                {
                    sizeBufferViews.push(bufView);
                    sizes.animations += gltf.json.bufferViews[bufView].byteLength;
                }
            }

            for (let j = 0; j < gltf.json.animations[i].channels.length; j++)
            {
                html += "<tr>";
                html += "  <td> Anim " + i + ": " + gltf.json.animations[i].name + "</td>";

                html += "  <td>" + gltf.nodes[gltf.json.animations[i].channels[j].target.node].name + "</td>";
                html += "  <td>";
                html += gltf.json.animations[i].channels[j].target.path + " ";
                html += "  </td>";

                const smplidx = gltf.json.animations[i].channels[j].sampler;
                const smplr = gltf.json.animations[i].samplers[smplidx];

                html += "  <td>" + smplr.interpolation + "</td>";

                html += "  <td>" + gltf.json.accessors[smplr.output].count;
                numKeyframes += gltf.json.accessors[smplr.output].count;

                // html += "&nbsp;&nbsp;<a onclick=\"gui.corePatch().getOpById('" + op.id + "').showAnim('" + i + "','" + j + "')\" class=\"icon icon-search\"></a>";

                html += "</td>";

                html += "</tr>";
            }
        }

        html += "<tr>";
        html += "  <td></td>";
        html += "  <td></td>";
        html += "  <td></td>";
        html += "  <td></td>";
        html += "  <td>" + numKeyframes + " total</td>";
        html += "</tr>";
        html += "</table>";
    }
    else
    {

    }

    // / ///////////////////

    let numImages = 0;
    if (gltf.json.images)numImages = gltf.json.images.length;
    html += "<div id=\"groupImages\">Images (" + numImages + ")</div>";

    if (gltf.json.images)
    {
        html += "<table id=\"sectionImages\" class=\"table treetable\">";

        html += "<tr>";
        html += "  <th>name</th>";
        html += "  <th>type</th>";
        html += "  <th>func</th>";
        html += "</tr>";

        sizes.images = 0;

        for (let i = 0; i < gltf.json.images.length; i++)
        {
            if (gltf.json.images[i].hasOwnProperty("bufferView"))
            {
                // if (sizeBufferViews.indexOf(gltf.json.images[i].hasOwnProperty("bufferView")) == -1)console.log("image bufferview already there?!");
                // else
                sizes.images += gltf.json.bufferViews[gltf.json.images[i].bufferView].byteLength;
            }
            else console.log("image has no bufferview?!");

            html += "<tr>";
            html += "<td>" + gltf.json.images[i].name + "</td>";
            html += "<td>" + gltf.json.images[i].mimeType + "</td>";
            html += "<td>";

            let name = gltf.json.images[i].name;
            if (name === undefined)name = gltf.json.images[i].bufferView;

            html += "<a onclick=\"gui.corePatch().getOpById('" + op.id + "').exposeTexture('" + name + "')\" class=\"treebutton\">Expose</a>";
            html += "</td>";

            html += "<tr>";
        }
        html += "</table>";
    }

    // / ///////////////////////

    let numCameras = 0;
    if (gltf.json.cameras)numCameras = gltf.json.cameras.length;
    html += "<div id=\"groupCameras\">Cameras (" + numCameras + ")</div>";

    if (gltf.json.cameras)
    {
        html += "<table id=\"sectionCameras\" class=\"table treetable\">";

        html += "<tr>";
        html += "  <th>name</th>";
        html += "  <th>type</th>";
        html += "  <th>info</th>";
        html += "</tr>";

        for (let i = 0; i < gltf.json.cameras.length; i++)
        {
            html += "<tr>";
            html += "<td>" + gltf.json.cameras[i].name + "</td>";
            html += "<td>" + gltf.json.cameras[i].type + "</td>";
            html += "<td>";

            if (gltf.json.cameras[i].perspective)
            {
                html += "yfov: " + Math.round(gltf.json.cameras[i].perspective.yfov * 100) / 100;
                html += ", ";
                html += "zfar: " + Math.round(gltf.json.cameras[i].perspective.zfar * 100) / 100;
                html += ", ";
                html += "znear: " + Math.round(gltf.json.cameras[i].perspective.znear * 100) / 100;
            }
            html += "</td>";

            html += "<tr>";
        }
        html += "</table>";
    }

    // / ////////////////////////////////////

    let numSkins = 0;
    if (gltf.json.skins)numSkins = gltf.json.skins.length;
    html += "<div id=\"groupSkins\">Skins (" + numSkins + ")</div>";

    if (gltf.json.skins)
    {
        // html += "<h3>Skins (" + gltf.json.skins.length + ")</h3>";
        html += "<table id=\"sectionSkins\" class=\"table treetable\">";

        html += "<tr>";
        html += "  <th>name</th>";
        html += "  <th></th>";
        html += "  <th>total joints</th>";
        html += "</tr>";

        for (let i = 0; i < gltf.json.skins.length; i++)
        {
            html += "<tr>";
            html += "<td>" + gltf.json.skins[i].name + "</td>";
            html += "<td>" + "</td>";
            html += "<td>" + gltf.json.skins[i].joints.length + "</td>";
            html += "<td>";
            html += "</td>";
            html += "<tr>";
        }
        html += "</table>";
    }

    // / ////////////////////////////////////

    if (gltf.timing)
    {
        html += "<div id=\"groupTiming\">Debug Loading Timing </div>";

        html += "<table id=\"sectionTiming\" class=\"table treetable\">";

        html += "<tr>";
        html += "  <th>task</th>";
        html += "  <th>time used</th>";
        html += "</tr>";

        let lt = 0;
        for (let i = 0; i < gltf.timing.length - 1; i++)
        {
            html += "<tr>";
            html += "  <td>" + gltf.timing[i][0] + "</td>";
            html += "  <td>" + (gltf.timing[i + 1][1] - gltf.timing[i][1]) + " ms</td>";
            html += "</tr>";
            // lt = gltf.timing[i][1];
        }
        html += "</table>";
    }

    // / //////////////////////////

    let sizeBin = 0;
    if (gltf.json.buffers)
        sizeBin = gltf.json.buffers[0].byteLength;

    html += "<div id=\"groupBinary\">File Size Allocation (" + Math.round(sizeBin / 1024) + "k )</div>";

    html += "<table id=\"sectionBinary\" class=\"table treetable\">";
    html += "<tr>";
    html += "  <th>name</th>";
    html += "  <th>size</th>";
    html += "  <th>%</th>";
    html += "</tr>";
    let sizeUnknown = sizeBin;
    for (let i in sizes)
    {
        // html+=i+':'+Math.round(sizes[i]/1024);
        html += "<tr>";
        html += "<td>" + i + "</td>";
        html += "<td>" + readableSize(sizes[i]) + " </td>";
        html += "<td>" + Math.round(sizes[i] / sizeBin * 100) + "% </td>";
        html += "<tr>";
        sizeUnknown -= sizes[i];
    }

    if (sizeUnknown != 0)
    {
        html += "<tr>";
        html += "<td>unknown</td>";
        html += "<td>" + readableSize(sizeUnknown) + " </td>";
        html += "<td>" + Math.round(sizeUnknown / sizeBin * 100) + "% </td>";
        html += "<tr>";
    }

    html += "</table>";
    html += "</div>";

    tab = new CABLES.UI.Tab("GLTF " + CABLES.basename(inFile.get()), { "icon": "cube", "infotext": "tab_gltf", "padding": true, "singleton": true });
    gui.mainTabs.addTab(tab, true);

    tab.addEventListener("close", closeTab);
    tab.html(html);

    CABLES.UI.Collapsable.setup(ele.byId("groupNodes"), ele.byId("sectionNodes"), false);
    CABLES.UI.Collapsable.setup(ele.byId("groupMaterials"), ele.byId("materialtable"), true);
    CABLES.UI.Collapsable.setup(ele.byId("groupAnims"), ele.byId("sectionAnim"), true);
    CABLES.UI.Collapsable.setup(ele.byId("groupMeshes"), ele.byId("meshestable"), true);
    CABLES.UI.Collapsable.setup(ele.byId("groupCameras"), ele.byId("sectionCameras"), true);
    CABLES.UI.Collapsable.setup(ele.byId("groupImages"), ele.byId("sectionImages"), true);
    CABLES.UI.Collapsable.setup(ele.byId("groupSkins"), ele.byId("sectionSkins"), true);
    CABLES.UI.Collapsable.setup(ele.byId("groupBinary"), ele.byId("sectionBinary"), true);
    CABLES.UI.Collapsable.setup(ele.byId("groupTiming"), ele.byId("sectionTiming"), true);

    gui.maintabPanel.show(true);
}

function readableSize(n)
{
    if (n > 1024) return Math.round(n / 1024) + " kb";
    if (n > 1024 * 500) return Math.round(n / 1024) + " mb";
    else return n + " bytes";
}
const GltfSkin = class
{
    constructor(node)
    {
        this._mod = null;
        this._node = node;
        this._lastTime = 0;
        this._matArr = [];
        this._m = mat4.create();
        this._invBindMatrix = mat4.create();
        this.identity = true;
    }

    renderFinish(cgl)
    {
        cgl.popModelMatrix();
        this._mod.unbind();
    }

    renderStart(cgl, time)
    {
        if (!this._mod)
        {
            this._mod = new CGL.ShaderModifier(cgl, op.name + this._node.name);

            this._mod.addModule({
                "priority": -2,
                "name": "MODULE_VERTEX_POSITION",
                "srcHeadVert": attachments.skin_head_vert || "",
                "srcBodyVert": attachments.skin_vert || ""
            });

            this._mod.addUniformVert("m4[]", "MOD_boneMats", []);// bohnenmatze
            const tr = vec3.create();
        }

        const skinIdx = this._node.skin;
        const arrLength = gltf.json.skins[skinIdx].joints.length * 16;

        // if (this._lastTime != time || !time)
        {
            // this._lastTime=inTime.get();
            if (this._matArr.length != arrLength) this._matArr.length = arrLength;

            for (let i = 0; i < gltf.json.skins[skinIdx].joints.length; i++)
            {
                const i16 = i * 16;
                const jointIdx = gltf.json.skins[skinIdx].joints[i];
                const nodeJoint = gltf.nodes[jointIdx];

                for (let j = 0; j < 16; j++)
                    this._invBindMatrix[j] = gltf.accBuffers[gltf.json.skins[skinIdx].inverseBindMatrices][i16 + j];

                mat4.mul(this._m, nodeJoint.modelMatAbs(), this._invBindMatrix);

                for (let j = 0; j < this._m.length; j++) this._matArr[i16 + j] = this._m[j];
            }

            this._mod.setUniformValue("MOD_boneMats", this._matArr);
            this._lastTime = time;
        }

        this._mod.define("SKIN_NUM_BONES", gltf.json.skins[skinIdx].joints.length);
        this._mod.bind();

        // draw mesh...
        cgl.pushModelMatrix();
        if (this.identity)mat4.identity(cgl.mMatrix);
    }
};
const GltfTargetsRenderer = class
{
    constructor(mesh)
    {
        this.mesh = mesh;
        this.tex = null;
        this.numRowsPerTarget = 0;

        this.makeTex(mesh.geom);
    }

    renderFinish(cgl)
    {
        cgl.popModelMatrix();
        this._mod.unbind();
    }

    renderStart(cgl, time)
    {
        if (!this._mod)
        {
            this._mod = new CGL.ShaderModifier(cgl, "gltftarget");

            this._mod.addModule({
                "priority": -2,
                "name": "MODULE_VERTEX_POSITION",
                "srcHeadVert": attachments.targets_head_vert || "",
                "srcBodyVert": attachments.targets_vert || ""
            });

            this._mod.addUniformVert("4f", "MOD_targetTexInfo", [0, 0, 0, 0]);
            this._mod.addUniformVert("t", "MOD_targetTex", 1);
            this._mod.addUniformVert("f[]", "MOD_weights", []);

            const tr = vec3.create();
        }

        this._mod.pushTexture("MOD_targetTex", this.tex);
        if (this.tex && this.mesh.weights)
        {
            this._mod.setUniformValue("MOD_weights", this.mesh.weights);
            this._mod.setUniformValue("MOD_targetTexInfo", [this.tex.width, this.tex.height, this.numRowsPerTarget, this.mesh.weights.length]);

            this._mod.define("MOD_NUM_WEIGHTS", Math.max(1, this.mesh.weights.length));
        }
        else
        {
            this._mod.define("MOD_NUM_WEIGHTS", 1);
        }
        this._mod.bind();

        // draw mesh...
        cgl.pushModelMatrix();
        if (this.identity)mat4.identity(cgl.mMatrix);
    }

    makeTex(geom)
    {
        if (!geom.morphTargets || !geom.morphTargets.length) return;

        let w = geom.morphTargets[0].vertices.length / 3;
        let h = 0;
        this.numRowsPerTarget = 0;

        if (geom.morphTargets[0].vertices && geom.morphTargets[0].vertices.length) this.numRowsPerTarget++;
        if (geom.morphTargets[0].vertexNormals && geom.morphTargets[0].vertexNormals.length) this.numRowsPerTarget++;
        if (geom.morphTargets[0].tangents && geom.morphTargets[0].tangents.length) this.numRowsPerTarget++;
        if (geom.morphTargets[0].bitangents && geom.morphTargets[0].bitangents.length) this.numRowsPerTarget++;

        h = geom.morphTargets.length * this.numRowsPerTarget;

        // console.log("this.numRowsPerTarget", this.numRowsPerTarget);

        const pixels = new Float32Array(w * h * 4);
        let row = 0;

        for (let i = 0; i < geom.morphTargets.length; i++)
        {
            if (geom.morphTargets[i].vertices && geom.morphTargets[i].vertices.length)
            {
                for (let j = 0; j < geom.morphTargets[i].vertices.length; j += 3)
                {
                    pixels[((row * w) + (j / 3)) * 4 + 0] = geom.morphTargets[i].vertices[j + 0];
                    pixels[((row * w) + (j / 3)) * 4 + 1] = geom.morphTargets[i].vertices[j + 1];
                    pixels[((row * w) + (j / 3)) * 4 + 2] = geom.morphTargets[i].vertices[j + 2];
                    pixels[((row * w) + (j / 3)) * 4 + 3] = 1;
                }
                row++;
            }

            if (geom.morphTargets[i].vertexNormals && geom.morphTargets[i].vertexNormals.length)
            {
                for (let j = 0; j < geom.morphTargets[i].vertexNormals.length; j += 3)
                {
                    pixels[(row * w + j / 3) * 4 + 0] = geom.morphTargets[i].vertexNormals[j + 0];
                    pixels[(row * w + j / 3) * 4 + 1] = geom.morphTargets[i].vertexNormals[j + 1];
                    pixels[(row * w + j / 3) * 4 + 2] = geom.morphTargets[i].vertexNormals[j + 2];
                    pixels[(row * w + j / 3) * 4 + 3] = 1;
                }

                row++;
            }

            if (geom.morphTargets[i].tangents && geom.morphTargets[i].tangents.length)
            {
                for (let j = 0; j < geom.morphTargets[i].tangents.length; j += 3)
                {
                    pixels[(row * w + j / 3) * 4 + 0] = geom.morphTargets[i].tangents[j + 0];
                    pixels[(row * w + j / 3) * 4 + 1] = geom.morphTargets[i].tangents[j + 1];
                    pixels[(row * w + j / 3) * 4 + 2] = geom.morphTargets[i].tangents[j + 2];
                    pixels[(row * w + j / 3) * 4 + 3] = 1;
                }
                row++;
            }

            if (geom.morphTargets[i].bitangents && geom.morphTargets[i].bitangents.length)
            {
                for (let j = 0; j < geom.morphTargets[i].bitangents.length; j += 3)
                {
                    pixels[(row * w + j / 3) * 4 + 0] = geom.morphTargets[i].bitangents[j + 0];
                    pixels[(row * w + j / 3) * 4 + 1] = geom.morphTargets[i].bitangents[j + 1];
                    pixels[(row * w + j / 3) * 4 + 2] = geom.morphTargets[i].bitangents[j + 2];
                    pixels[(row * w + j / 3) * 4 + 3] = 1;
                }
                row++;
            }
        }

        this.tex = new CGL.Texture(cgl, { "isFloatingPointTexture": true, "name": "targetsTexture" });

        this.tex.initFromData(pixels, w, h, CGL.Texture.FILTER_LINEAR, CGL.Texture.WRAP_REPEAT);

        // console.log("morphTargets generated texture", w, h);
    }
};
// https://raw.githubusercontent.com/KhronosGroup/glTF/master/specification/2.0/figures/gltfOverview-2.0.0b.png

const
    inExec = op.inTrigger("Render"),
    dataPort = op.inString("data"),
    inFile = op.inUrl("glb File", [".glb"]),
    inRender = op.inBool("Draw", true),
    inCamera = op.inDropDown("Camera", ["None"], "None"),
    inAnimation = op.inString("Animation", ""),
    inShow = op.inTriggerButton("Show Structure"),
    inCenter = op.inSwitch("Center", ["None", "XYZ", "XZ"], "XYZ"),
    inRescale = op.inBool("Rescale", true),
    inRescaleSize = op.inFloat("Rescale Size", 2.5),

    inTime = op.inFloat("Time"),
    inTimeLine = op.inBool("Sync to timeline", false),
    inLoop = op.inBool("Loop", true),

    inNormFormat = op.inSwitch("Normals Format", ["XYZ", "X-ZY"], "XYZ"),
    inVertFormat = op.inSwitch("Vertices Format", ["XYZ", "XZ-Y"], "XYZ"),
    inCalcNormals = op.inSwitch("Calc Normals", ["Auto", "Force Smooth", "Never"], "Auto"),

    inMaterials = op.inObject("Materials"),
    inHideNodes = op.inArray("Hide Nodes"),
    inUseMatProps = op.inBool("Use Material Properties", false),

    inActive = op.inBool("Active", true),

    nextBefore = op.outTrigger("Render Before"),
    next = op.outTrigger("Next"),
    outGenerator = op.outString("Generator"),

    outVersion = op.outNumber("GLTF Version"),
    outExtensions = op.outArray("GLTF Extensions Used"),
    outAnimLength = op.outNumber("Anim Length", 0),
    outAnimTime = op.outNumber("Anim Time", 0),
    outJson = op.outObject("Json"),
    outAnims = op.outArray("Anims"),
    outPoints = op.outArray("BoundingPoints"),
    outBounds = op.outObject("Bounds"),
    outAnimFinished = op.outTrigger("Finished"),
    outLoading = op.outBool("Loading");

op.setPortGroup("Timing", [inTime, inTimeLine, inLoop]);

let cgl = op.patch.cg || op.patch.cgl;
let gltfLoadingErrorMesh = null;
let gltfLoadingError = false;
let gltfTransforms = 0;
let finishedLoading = false;
let cam = null;
let boundingPoints = [];
let gltf = null;
let maxTime = 0;
let time = 0;
let needsMatUpdate = true;
let timedLoader = null;
let loadingId = null;
let data = null;
const scale = vec3.create();
let lastTime = 0;
let doCenter = false;
const boundsCenter = vec3.create();

inFile.onChange =
    inVertFormat.onChange =
    inCalcNormals.onChange =
    inNormFormat.onChange = reloadSoon;

inShow.onTriggered = printInfo;
dataPort.onChange = loadData;
inHideNodes.onChange = hideNodesFromData;
inAnimation.onChange = updateAnimation;
inCenter.onChange = updateCenter;
op.toWorkPortsNeedToBeLinked(inExec);

dataPort.setUiAttribs({ "hideParam": true, "hidePort": true });
op.setPortGroup("Transform", [inRescale, inRescaleSize, inCenter]);

function updateCamera()
{
    const arr = ["None"];
    if (gltf)
    {
        for (let i = 0; i < gltf.nodes.length; i++)
        {
            if (gltf.nodes[i].camera >= 0)
            {
                arr.push(gltf.nodes[i].name);
            }
        }
    }
    inCamera.uiAttribs.values = arr;
}

function updateCenter()
{
    doCenter = inCenter.get() != "None";

    if (gltf && gltf.bounds)
    {
        boundsCenter.set(gltf.bounds.center);
        boundsCenter[0] = -boundsCenter[0];
        boundsCenter[1] = -boundsCenter[1];
        boundsCenter[2] = -boundsCenter[2];
        if (inCenter.get() == "XZ") boundsCenter[1] = -gltf.bounds.minY;
    }
}

inRescale.onChange = function ()
{
    inRescaleSize.setUiAttribs({ "greyout": !inRescale.get() });
};

inMaterials.onChange = function ()
{
    needsMatUpdate = true;
};

op.onDelete = function ()
{
    closeTab();
};

inTimeLine.onChange = function ()
{
    inTime.setUiAttribs({ "greyout": inTimeLine.get() });
};

inCamera.onChange = setCam;

function setCam()
{
    cam = null;
    if (!gltf) return;

    for (let i = 0; i < gltf.nodes.length; i++)
    {
        if (gltf.nodes[i].name == inCamera.get())cam = new gltfCamera(gltf, gltf.nodes[i]);
    }
}

inExec.onTriggered = function ()
{
    cgl = op.patch.cg || op.patch.cgl;

    if (!finishedLoading) return;
    if (!inActive.get()) return;

    if (gltfLoadingError)
    {
        if (!gltfLoadingErrorMesh) gltfLoadingErrorMesh = CGL.MESHES.getSimpleCube(cgl, "ErrorCube");
        gltfLoadingErrorMesh.render(cgl.getShader());
    }

    gltfTransforms = 0;
    if (inTimeLine.get()) time = op.patch.timer.getTime();
    else time = Math.max(0, inTime.get());

    if (inLoop.get())
    {
        time %= maxTime;
        if (time < lastTime) outAnimFinished.trigger();
    }
    else
    {
        if (maxTime > 0 && time >= maxTime) outAnimFinished.trigger();
    }

    lastTime = time;

    cgl.pushModelMatrix();

    outAnimTime.set(time || 0);

    if (finishedLoading && gltf && gltf.bounds)
    {
        if (inRescale.get())
        {
            let sc = inRescaleSize.get() / gltf.bounds.maxAxis;
            gltf.scale = sc;
            vec3.set(scale, sc, sc, sc);
            mat4.scale(cgl.mMatrix, cgl.mMatrix, scale);
        }
        if (doCenter)
        {
            mat4.translate(cgl.mMatrix, cgl.mMatrix, boundsCenter);
        }
    }

    let oldScene = cgl.frameStore.currentScene || null;
    cgl.frameStore.currentScene = gltf;

    nextBefore.trigger();

    if (finishedLoading)
    {
        if (needsMatUpdate) updateMaterials();

        if (cam) cam.start(time);

        if (gltf)
        {
            gltf.time = time;

            if (gltf.bounds && cgl.shouldDrawHelpers(op))
            {
                if (op.isCurrentUiOp()) cgl.pushShader(CABLES.GL_MARKER.getSelectedShader(cgl));
                else cgl.pushShader(CABLES.GL_MARKER.getDefaultShader(cgl));

                gltf.bounds.render(cgl, null, op);
                cgl.popShader();
            }

            if (inRender.get())
            {
                for (let i = 0; i < gltf.nodes.length; i++)
                    if (!gltf.nodes[i].isChild)
                        gltf.nodes[i].render(cgl);
            }
            else
            {
                for (let i = 0; i < gltf.nodes.length; i++)
                    if (!gltf.nodes[i].isChild)
                        gltf.nodes[i].render(cgl, false, true);
            }
        }
    }

    next.trigger();
    cgl.frameStore.currentScene = oldScene;

    cgl.popModelMatrix();

    if (cam)cam.end();
};

function finishLoading()
{
    if (!gltf)
    {
        finishedLoading = true;
        gltfLoadingError = true;
        cgl.patch.loading.finished(loadingId);

        op.setUiError("nogltf", "GLTF File not found");
        return;
    }

    op.setUiError("nogltf", null);

    if (gltf.loadingMeshes > 0)
    {
        // op.log("waiting for async meshes...");
        setTimeout(finishLoading, 100);
        return;
    }

    gltf.timing.push(["finishLoading()", Math.round((performance.now() - gltf.startTime))]);

    needsMatUpdate = true;
    // op.refreshParams();
    outAnimLength.set(maxTime);

    gltf.bounds = new CABLES.CG.BoundingBox();
    // gltf.bounds.applyPos(0, 0, 0);

    // if (!gltf)op.setUiError("urlerror", "could not load gltf:<br/>\"" + inFile.get() + "\"", 2);
    // else op.setUiError("urlerror", null);

    gltf.timing.push(["start calc bounds", Math.round((performance.now() - gltf.startTime))]);

    for (let i = 0; i < gltf.nodes.length; i++)
    {
        const node = gltf.nodes[i];
        node.updateMatrix();
        if (!node.isChild) node.calcBounds(gltf, null, gltf.bounds);
    }

    if (gltf.bounds)outBounds.set(gltf.bounds);

    gltf.timing.push(["calced bounds", Math.round((performance.now() - gltf.startTime))]);

    hideNodesFromData();

    gltf.timing.push(["hideNodesFromData", Math.round((performance.now() - gltf.startTime))]);

    if (tab)printInfo();

    gltf.timing.push(["printinfo", Math.round((performance.now() - gltf.startTime))]);

    updateCamera();
    setCam();
    outPoints.set(boundingPoints);

    if (gltf)
    {
        if (inFile.get() && !inFile.get().startsWith("data:"))
        {
            op.setUiAttrib({ "extendTitle": CABLES.basename(inFile.get()) });
        }

        gltf.loaded = Date.now();
        // if (gltf.bounds)outBounds.set(gltf.bounds);
    }

    if (gltf)
    {
        for (let i = 0; i < gltf.nodes.length; i++)
        {
            if (!gltf.nodes[i].isChild)
            {
                gltf.nodes[i].render(cgl, false, true, true, false, true, 0);
            }
        }

        for (let i = 0; i < gltf.nodes.length; i++)
        {
            const node = gltf.nodes[i];
            node.children = uniqueArray(node.children); // stupid fix why are there too many children ?!
        }
    }

    updateCenter();
    updateAnimation();

    outLoading.set(false);

    cgl.patch.loading.finished(loadingId);
    loadingId = null;

    // if (gltf.chunks.length > 1) gltf.chunks[1] = null;
    // if (gltf.chunks.length > 2) gltf.chunks[2] = null;

    // op.setUiAttrib({ "accBuffersDelete": CABLES.basename(inFile.get()) });

    if (gltf.accBuffersDelete)
    {
        for (let i = 0; i < gltf.accBuffersDelete.length; i++)
        {
            gltf.accBuffers[gltf.accBuffersDelete[i]] = null;
        }
    }

    // setTimeout(() =>
    // {
    //     for (let i = 0; i < gltf.nodes.length; i++)
    //     {
    //     // console.log(gltf.nodes[i]);

    //         if (gltf.nodes[i].mesh && gltf.nodes[i].mesh.meshes)
    //         {
    //         // console.log(gltf.nodes[i].mesh.meshes.length);
    //             for (let j = 0; j < gltf.nodes[i].mesh.meshes.length; j++)
    //             {
    //                 console.log(gltf.nodes[i].mesh.meshes[j]);

    //                 // for (let k = 0; k < gltf.nodes[i].mesh.meshes.length; k++)
    //                 {
    //                     if (gltf.nodes[i].mesh.meshes[j].mesh)
    //                     {
    //                         gltf.nodes[i].mesh.meshes[j].mesh.freeMem();
    //                         // console.log(gltf.nodes[i].mesh.meshes[j].mesh);
    //                         // for (let l = 0; l < gltf.nodes[i].mesh.meshes[j].mesh._attributes.length; l++)
    //                         //     gltf.nodes[i].mesh.meshes[j].mesh._attributes[l] = null;
    //                     }
    //                 }

    //                 gltf.nodes[i].mesh.meshes[j].geom.clear();
    //                 console.log("clear!");
    //             }
    //         }
    //     }
    // }, 1000);

    if (!(gltf.json.images && gltf.json.images.length)) gltf.chunks = null;

    finishedLoading = true;
}

function loadBin(addCacheBuster)
{
    if (!inActive.get()) return;

    if (!loadingId)loadingId = cgl.patch.loading.start("gltfScene", inFile.get(), op);

    let fileToLoad = inFile.get();

    if (!fileToLoad || fileToLoad == "null") return;
    let url = op.patch.getFilePath(String(inFile.get()));
    if (!url) return;
    if (inFile.get() && !inFile.get().startsWith("data:"))
    {
        if (addCacheBuster === true)url += "?rnd=" + CABLES.generateUUID();
    }
    needsMatUpdate = true;
    outLoading.set(true);
    fetch(url)
        .then((res) => { return res.arrayBuffer(); })
        .then((arrayBuffer) =>
        {
            if (inFile.get() != fileToLoad)
            {
                cgl.patch.loading.finished(loadingId);
                loadingId = null;
                return;
            }

            boundingPoints = [];
            maxTime = 0;
            gltf = parseGltf(arrayBuffer);
            arrayBuffer = null;
            finishLoading();
        }).catch((e) =>
        {
            if (loadingId)cgl.patch.loading.finished(loadingId);
            loadingId = null;
            finishLoading();

            op.logError("gltf fetch error", e);
        });
    closeTab();

    const oReq = new XMLHttpRequest();
    oReq.open("GET", url, true);
    oReq.responseType = "arraybuffer";

    cgl.patch.loading.addAssetLoadingTask(() =>
    {

    });
}

// op.onFileChanged = function (fn)
// {
//     gltf.accBuffersDelete[i];
//     if (fn && fn.length > 3 && inFile.get() && inFile.get().indexOf(fn) > -1) reloadSoon(true);
// };

op.onFileChanged = function (fn)
{
    if (inFile.get() && inFile.get().indexOf(fn) > -1)
    {
        reloadSoon(true);
    }
};

inActive.onChange = () =>
{
    if (inActive.get()) reloadSoon();

    if (!inActive.get())
    {
        gltf = null;
    }
};

function reloadSoon(nocache)
{
    clearTimeout(timedLoader);
    timedLoader = setTimeout(function () { loadBin(nocache); }, 30);
}

function updateMaterials()
{
    if (!gltf) return;

    gltf.shaders = {};

    if (inMaterials.links.length == 1 && inMaterials.get())
    {
        // just accept a associative object with s
        needsMatUpdate = true;
        const op = inMaterials.links[0].portOut.op;

        const portShader = op.getPort("Shader");
        const portName = op.getPort("Material Name");

        if (!portShader && !portName)
        {
            const inMats = inMaterials.get();
            for (let matname in inMats)
            {
                if (inMats[matname] && gltf.json.materials)
                    for (let i = 0; i < gltf.json.materials.length; i++)
                    {
                        if (gltf.json.materials[i].name == matname)
                        {
                            if (gltf.shaders[i])
                            {
                                op.warn("double material assignment:", name);
                            }
                            gltf.shaders[i] = inMats[matname];
                        }
                    }
            }
        }
    }

    if (inMaterials.get())
    {
        for (let j = 0; j < inMaterials.links.length; j++)
        {
            const op = inMaterials.links[j].portOut.op;
            const portShader = op.getPort("Shader");
            const portName = op.getPort("Material Name");

            if (portShader && portName && portShader.get())
            {
                const name = portName.get();
                if (gltf.json.materials)
                    for (let i = 0; i < gltf.json.materials.length; i++)
                        if (gltf.json.materials[i].name == name)
                        {
                            if (gltf.shaders[i])
                            {
                                op.warn("double material assignment:", name);
                            }
                            gltf.shaders[i] = portShader.get();
                        }
            }
        }
    }
    needsMatUpdate = false;
    if (tab)printInfo();
}

function hideNodesFromArray()
{
    const hideArr = inHideNodes.get();

    if (!gltf || !data || !data.hiddenNodes) return;
    if (!hideArr)
    {
        return;
    }

    for (let i = 0; i < hideArr.length; i++)
    {
        const n = gltf.getNode(hideArr[i]);
        if (n)n.hidden = true;
    }
}

function hideNodesFromData()
{
    if (!data)loadData();
    if (!gltf) return;

    gltf.unHideAll();

    if (data && data.hiddenNodes)
    {
        for (const i in data.hiddenNodes)
        {
            const n = gltf.getNode(i);
            if (n) n.hidden = true;
            else op.verbose("node to be hidden not found", i, n);
        }
    }
    hideNodesFromArray();
}

function loadData()
{
    data = dataPort.get();

    if (!data || data === "")data = {};
    else data = JSON.parse(data);

    if (gltf)hideNodesFromData();

    return data;
}

function saveData()
{
    dataPort.set(JSON.stringify(data));
}

function updateAnimation()
{
    if (gltf && gltf.nodes)
    {
        for (let i = 0; i < gltf.nodes.length; i++)
        {
            gltf.nodes[i].setAnimAction(inAnimation.get());
        }
    }
}

function findParents(nodes, childNodeIndex)
{
    for (let i = 0; i < gltf.nodes.length; i++)
    {
        if (gltf.nodes[i].children.indexOf(childNodeIndex) >= 0)
        {
            nodes.push(gltf.nodes[i]);
            if (gltf.nodes[i].isChild) findParents(nodes, i);
        }
    }
}

op.exposeTexture = function (name)
{
    const newop = gui.corePatch().addOp("Ops.Gl.GLTF.GltfTexture");
    newop.getPort("Name").set(name);
    setNewOpPosition(newop, 1);
    op.patch.link(op, next.name, newop, "Render");
    gui.patchView.testCollision(newop);
    gui.patchView.centerSelectOp(newop.id, true);
};

op.exposeGeom = function (name, idx)
{
    const newop = gui.corePatch().addOp("Ops.Gl.GLTF.GltfGeometry");
    newop.getPort("Name").set(name);
    newop.getPort("Submesh").set(idx);
    setNewOpPosition(newop, 1);
    op.patch.link(op, next.name, newop, "Update");
    gui.patchView.testCollision(newop);
    gui.patchView.centerSelectOp(newop.id, true);
};

function setNewOpPosition(newOp, num)
{
    num = num || 1;

    newOp.setUiAttrib(
        {
            "subPatch": op.uiAttribs.subPatch,
            "translate": { "x": op.uiAttribs.translate.x, "y": op.uiAttribs.translate.y + num * CABLES.GLUI.glUiConfig.newOpDistanceY }
        });
}

op.exposeNode = function (name, type, options)
{
    let tree = type == "hierarchy";
    if (tree)
    {
        let ops = [];

        for (let i = 0; i < gltf.nodes.length; i++)
        {
            if (gltf.nodes[i].name == name)
            {
                let arrHierarchy = [];
                const node = gltf.nodes[i];
                findParents(arrHierarchy, i);

                arrHierarchy = arrHierarchy.reverse();
                arrHierarchy.push(node, node);

                let prevPort = next.name;
                let prevOp = op;
                for (let j = 0; j < arrHierarchy.length; j++)
                {
                    const newop = gui.corePatch().addOp("Ops.Gl.GLTF.GltfNode_v2");
                    newop.getPort("Node Name").set(arrHierarchy[j].name);
                    op.patch.link(prevOp, prevPort, newop, "Render");
                    setNewOpPosition(newop, j);

                    if (j == arrHierarchy.length - 1)
                    {
                        newop.getPort("Transformation").set(false);
                    }
                    else
                    {
                        newop.getPort("Draw Mesh").set(false);
                        newop.getPort("Draw Childs").set(false);
                    }

                    prevPort = "Next";
                    prevOp = newop;
                    ops.push(newop);
                    gui.patchView.testCollision(newop);
                }
            }
        }

        for (let i = 0; i < ops.length; i++)
        {
            ops[i].selectChilds();
        }
    }
    else
    {
        let newopname = "Ops.Gl.GLTF.GltfNode_v2";
        if (options && options.skin)newopname = "Ops.Gl.GLTF.GltfSkin";
        if (type == "transform")newopname = "Ops.Gl.GLTF.GltfNodeTransform_v2";

        gui.serverOps.loadOpLibs(newopname, () =>
        {
            let newop = gui.corePatch().addOp(newopname);

            newop.getPort("Node Name").set(name);
            setNewOpPosition(newop);
            op.patch.link(op, next.name, newop, "Render");
            gui.patchView.testCollision(newop);
            gui.patchView.centerSelectOp(newop.id, true);
        });
    }
    gui.closeModal();
};

op.assignMaterial = function (name)
{
    const newop = gui.corePatch().addOp("Ops.Gl.GLTF.GltfSetMaterial");
    newop.getPort("Material Name").set(name);
    op.patch.link(op, inMaterials.name, newop, "Material");
    setNewOpPosition(newop);
    gui.patchView.testCollision(newop);
    gui.patchView.centerSelectOp(newop.id, true);

    gui.closeModal();
};

op.toggleNodeVisibility = function (name)
{
    const n = gltf.getNode(name);
    n.hidden = !n.hidden;
    data.hiddenNodes = data.hiddenNodes || {};

    if (n)
        if (n.hidden)data.hiddenNodes[name] = true;
        else delete data.hiddenNodes[name];

    saveData();
};

function uniqueArray(arr)
{
    const u = {}, a = [];
    for (let i = 0, l = arr.length; i < l; ++i)
    {
        if (!u.hasOwnProperty(arr[i]))
        {
            a.push(arr[i]);
            u[arr[i]] = 1;
        }
    }
    return a;
}


};

Ops.Gl.GLTF.GltfScene_v4.prototype = new CABLES.Op();
CABLES.OPS["c9cbb226-46f7-4ca6-8dab-a9d0bdca4331"]={f:Ops.Gl.GLTF.GltfScene_v4,objName:"Ops.Gl.GLTF.GltfScene_v4"};




// **************************************************************
// 
// Ops.Gl.Phong.PhongMaterial_v6
// 
// **************************************************************

Ops.Gl.Phong.PhongMaterial_v6 = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={"phong_frag":"IN vec3 viewDirection;\nIN vec3 normInterpolated;\nIN vec2 texCoord;\n\n#ifdef AO_CHAN_1\n    #ifndef ATTRIB_texCoord1\n        #define ATTRIB_texCoord1\n\n        IN vec2 texCoord1;\n    #endif\n#endif\n\n#ifdef HAS_TEXTURE_AO\nvec2 tcAo;\n#endif\n\n\n\n#ifdef ENABLE_FRESNEL\n    IN vec4 cameraSpace_pos;\n#endif\n\n// IN mat3 normalMatrix; // when instancing...\n\n#ifdef HAS_TEXTURE_NORMAL\n    IN mat3 TBN_Matrix; // tangent bitangent normal space transform matrix\n#endif\n\nIN vec3 fragPos;\nIN vec3 v_viewDirection;\n\nUNI vec4 inDiffuseColor;\nUNI vec4 inMaterialProperties;\n\n#ifdef ADD_EMISSIVE_COLOR\n    UNI vec4 inEmissiveColor; // .w = intensity\n#endif\n\n#ifdef ENABLE_FRESNEL\n    UNI mat4 viewMatrix;\n    UNI vec4 inFresnel;\n    UNI vec2 inFresnelWidthExponent;\n#endif\n\n#ifdef ENVMAP_MATCAP\n    IN vec3 viewSpaceNormal;\n    IN vec3 viewSpacePosition;\n#endif\n\nstruct Light {\n    vec3 color;\n    vec3 position;\n    vec3 specular;\n\n\n    // * SPOT LIGHT * //\n    #ifdef HAS_SPOT\n        vec3 conePointAt;\n        #define COSCONEANGLE x\n        #define COSCONEANGLEINNER y\n        #define SPOTEXPONENT z\n        vec3 spotProperties;\n    #endif\n\n    #define INTENSITY x\n    #define ATTENUATION y\n    #define FALLOFF z\n    #define RADIUS w\n    vec4 lightProperties;\n\n    int castLight;\n};\n\n/* CONSTANTS */\n#define NONE -1\n#define ALBEDO x\n#define ROUGHNESS y\n#define SHININESS z\n#define SPECULAR_AMT w\n#define NORMAL x\n#define AO y\n#define SPECULAR z\n#define EMISSIVE w\nconst float PI = 3.1415926535897932384626433832795;\nconst float TWO_PI = (2. * PI);\nconst float EIGHT_PI = (8. * PI);\n\n#define RECIPROCAL_PI 1./PI\n#define RECIPROCAL_PI2 RECIPROCAL_PI/2.\n\n// TEXTURES\n// #ifdef HAS_TEXTURES\n    UNI vec4 inTextureIntensities;\n\n    #ifdef HAS_TEXTURE_ENV\n        #ifdef TEX_FORMAT_CUBEMAP\n            UNI samplerCube texEnv;\n            #ifndef WEBGL1\n                #define SAMPLETEX textureLod\n            #endif\n            #ifdef WEBGL1\n                #define SAMPLETEX textureCubeLodEXT\n            #endif\n        #endif\n\n        #ifdef TEX_FORMAT_EQUIRECT\n            UNI sampler2D texEnv;\n            #ifdef WEBGL1\n                // #extension GL_EXT_shader_texture_lod : enable\n                #ifdef GL_EXT_shader_texture_lod\n                    #define textureLod texture2DLodEXT\n                #endif\n                // #define textureLod texture2D\n            #endif\n\n            #define SAMPLETEX sampleEquirect\n\n            const vec2 invAtan = vec2(0.1591, 0.3183);\n            vec4 sampleEquirect(sampler2D tex,vec3 direction,float lod)\n            {\n                #ifndef WEBGL1\n                    vec3 newDirection = normalize(direction);\n            \t\tvec2 sampleUV;\n            \t\tsampleUV.x = -1. * (atan( direction.z, direction.x ) * RECIPROCAL_PI2 + 0.75);\n            \t\tsampleUV.y = asin( clamp(direction.y, -1., 1.) ) * RECIPROCAL_PI + 0.5;\n                #endif\n\n                #ifdef WEBGL1\n                    vec3 newDirection = normalize(direction);\n                \t\tvec2 sampleUV = vec2(atan(newDirection.z, newDirection.x), asin(newDirection.y+1e-6));\n                        sampleUV *= vec2(0.1591, 0.3183);\n                        sampleUV += 0.5;\n                #endif\n                return textureLod(tex, sampleUV, lod);\n            }\n        #endif\n        #ifdef ENVMAP_MATCAP\n            UNI sampler2D texEnv;\n            #ifdef WEBGL1\n                // #extension GL_EXT_shader_texture_lod : enable\n                #ifdef GL_EXT_shader_texture_lod\n                    #define textureLod texture2DLodEXT\n                #endif\n                // #define textureLod texture2D\n            #endif\n\n\n            // * taken & modified from https://github.com/mrdoob/three.js/blob/dev/src/renderers/shaders/ShaderLib/meshmatcap_frag.glsl.js\n            vec2 getMatCapUV(vec3 viewSpacePosition, vec3 viewSpaceNormal) {\n                vec3 viewDir = normalize(-viewSpacePosition);\n            \tvec3 x = normalize(vec3(viewDir.z, 0.0, - viewDir.x));\n            \tvec3 y = normalize(cross(viewDir, x));\n            \tvec2 uv = vec2(dot(x, viewSpaceNormal), dot(y, viewSpaceNormal)) * 0.495 + 0.5; // 0.495 to remove artifacts caused by undersized matcap disks\n            \treturn uv;\n            }\n        #endif\n\n        UNI float inEnvMapIntensity;\n        UNI float inEnvMapWidth;\n    #endif\n\n    #ifdef HAS_TEXTURE_LUMINANCE_MASK\n        UNI sampler2D texLuminance;\n        UNI float inLuminanceMaskIntensity;\n    #endif\n\n    #ifdef HAS_TEXTURE_DIFFUSE\n        UNI sampler2D texDiffuse;\n    #endif\n\n    #ifdef HAS_TEXTURE_SPECULAR\n        UNI sampler2D texSpecular;\n    #endif\n\n    #ifdef HAS_TEXTURE_NORMAL\n        UNI sampler2D texNormal;\n    #endif\n\n    #ifdef HAS_TEXTURE_AO\n        UNI sampler2D texAO;\n    #endif\n\n    #ifdef HAS_TEXTURE_EMISSIVE\n        UNI sampler2D texEmissive;\n    #endif\n\n    #ifdef HAS_TEXTURE_EMISSIVE_MASK\n        UNI sampler2D texMaskEmissive;\n        UNI float inEmissiveMaskIntensity;\n    #endif\n    #ifdef HAS_TEXTURE_ALPHA\n        UNI sampler2D texAlpha;\n    #endif\n// #endif\n\n{{MODULES_HEAD}}\n\nfloat when_gt(float x, float y) { return max(sign(x - y), 0.0); } // comparator function\nfloat when_lt(float x, float y) { return max(sign(y - x), 0.0); }\nfloat when_eq(float x, float y) { return 1. - abs(sign(x - y)); } // comparator function\nfloat when_neq(float x, float y) { return abs(sign(x - y)); } // comparator function\nfloat when_ge(float x, float y) { return 1.0 - when_lt(x, y); }\nfloat when_le(float x, float y) { return 1.0 - when_gt(x, y); }\n\n#ifdef FALLOFF_MODE_A\n    float CalculateFalloff(float distance, vec3 lightDirection, float falloff, float radius) {\n        // * original falloff\n        float denom = distance / radius + 1.0;\n        float attenuation = 1.0 / (denom*denom);\n        float t = (attenuation - falloff) / (1.0 - falloff);\n        return max(t, 0.0);\n    }\n#endif\n\n#ifdef FALLOFF_MODE_B\n    float CalculateFalloff(float distance, vec3 lightDirection, float falloff, float radius) {\n        float distanceSquared = dot(lightDirection, lightDirection);\n        float factor = distanceSquared * falloff;\n        float smoothFactor = clamp(1. - factor * factor, 0., 1.);\n        float attenuation = smoothFactor * smoothFactor;\n\n        return attenuation * 1. / max(distanceSquared, 0.00001);\n    }\n#endif\n\n#ifdef FALLOFF_MODE_C\n    float CalculateFalloff(float distance, vec3 lightDirection, float falloff, float radius) {\n        // https://blog.selfshadow.com/publications/s2013-shading-course/karis/s2013_pbs_epic_notes_v2.pdf\n        float falloffNumerator = 1. - pow(distance/radius, 4.);\n        falloffNumerator = clamp(falloffNumerator, 0., 1.);\n        falloffNumerator *= falloffNumerator;\n\n        float denominator = distance*distance + falloff;\n\n        return falloffNumerator/denominator;\n    }\n#endif\n\n#ifdef FALLOFF_MODE_D\n    float CalculateFalloff(float distance, vec3 lightDirection, float falloff, float radius) {\n        // inverse square falloff, \"physically correct\"\n        return 1.0 / max(distance * distance, 0.0001);\n    }\n#endif\n\n#ifdef ENABLE_FRESNEL\n    float CalculateFresnel(vec3 direction, vec3 normal)\n    {\n        vec3 nDirection = normalize( direction );\n        vec3 nNormal = normalize( mat3(viewMatrix) * normal );\n        vec3 halfDirection = normalize( nNormal + nDirection );\n\n        float cosine = dot( halfDirection, nDirection );\n        float product = max( cosine, 0.0 );\n        float factor = pow(product, inFresnelWidthExponent.y);\n\n        return 5. * factor;\n    }\n#endif\n\n#ifdef CONSERVE_ENERGY\n    // http://www.rorydriscoll.com/2009/01/25/energy-conservation-in-games/\n    // http://www.farbrausch.de/~fg/articles/phong.pdf\n    float EnergyConservation(float shininess) {\n        #ifdef SPECULAR_PHONG\n            return (shininess + 2.)/TWO_PI;\n        #endif\n        #ifdef SPECULAR_BLINN\n            return (shininess + 8.)/EIGHT_PI;\n        #endif\n\n        #ifdef SPECULAR_SCHLICK\n            return (shininess + 8.)/EIGHT_PI;\n        #endif\n\n        #ifdef SPECULAR_GAUSS\n            return (shininess + 8.)/EIGHT_PI;\n        #endif\n    }\n#endif\n\n#ifdef ENABLE_OREN_NAYAR_DIFFUSE\n    float CalculateOrenNayar(vec3 lightDirection, vec3 viewDirection, vec3 normal) {\n        float LdotV = dot(lightDirection, viewDirection);\n        float NdotL = dot(lightDirection, normal);\n        float NdotV = dot(normal, viewDirection);\n\n        float albedo = inMaterialProperties.ALBEDO;\n        albedo *= 1.8;\n        float s = LdotV - NdotL * NdotV;\n        float t = mix(1., max(NdotL, NdotV), step(0., s));\n\n        float roughness = inMaterialProperties.ROUGHNESS;\n        float sigma2 = roughness * roughness;\n        float A = 1. + sigma2 * (albedo / (sigma2 + 0.13) + 0.5 / (sigma2 + 0.33));\n        float B = 0.45 * sigma2 / (sigma2 + 0.09);\n\n        float factor = albedo * max(0., NdotL) * (A + B * s / t) / PI;\n\n        return factor;\n\n    }\n#endif\n\nvec3 CalculateDiffuseColor(\n    vec3 lightDirection,\n    vec3 viewDirection,\n    vec3 normal,\n    vec3 lightColor,\n    vec3 materialColor,\n    inout float lambert\n) {\n    #ifndef ENABLE_OREN_NAYAR_DIFFUSE\n        lambert = clamp(dot(lightDirection, normal), 0., 1.);\n    #endif\n\n    #ifdef ENABLE_OREN_NAYAR_DIFFUSE\n        lambert = CalculateOrenNayar(lightDirection, viewDirection, normal);\n    #endif\n\n    vec3 diffuseColor = lambert * lightColor * materialColor;\n    return diffuseColor;\n}\n\nvec3 CalculateSpecularColor(\n    vec3 specularColor,\n    float specularCoefficient,\n    float shininess,\n    vec3 lightDirection,\n    vec3 viewDirection,\n    vec3 normal,\n    float lambertian\n) {\n    vec3 resultColor = vec3(0.);\n\n    #ifdef SPECULAR_PHONG\n        vec3 reflectDirection = reflect(-lightDirection, normal);\n        float specularAngle = max(dot(reflectDirection, viewDirection), 0.);\n        float specularFactor = pow(specularAngle, max(0., shininess));\n    resultColor = lambertian * specularFactor * specularCoefficient * specularColor;\n    #endif\n\n    #ifdef SPECULAR_BLINN\n        vec3 halfDirection = normalize(lightDirection + viewDirection);\n        float specularAngle = max(dot(halfDirection, normal), 0.);\n        float specularFactor = pow(specularAngle, max(0., shininess));\n        resultColor = lambertian * specularFactor * specularCoefficient * specularColor;\n    #endif\n\n    #ifdef SPECULAR_SCHLICK\n        vec3 halfDirection = normalize(lightDirection + viewDirection);\n        float specularAngle = dot(halfDirection, normal);\n        float schlickShininess = max(0., shininess);\n        float specularFactor = specularAngle / (schlickShininess - schlickShininess*specularAngle + specularAngle);\n        resultColor = lambertian * specularFactor * specularCoefficient * specularColor;\n    #endif\n\n    #ifdef SPECULAR_GAUSS\n        vec3 halfDirection = normalize(lightDirection + viewDirection);\n        float specularAngle = acos(max(dot(halfDirection, normal), 0.));\n        float exponent = specularAngle * shininess * 0.17;\n        exponent = -(exponent*exponent);\n        float specularFactor = exp(exponent);\n\n        resultColor = lambertian * specularFactor * specularCoefficient * specularColor;\n    #endif\n\n    #ifdef CONSERVE_ENERGY\n        float conserveEnergyFactor = EnergyConservation(shininess);\n        resultColor = conserveEnergyFactor * resultColor;\n    #endif\n\n    return resultColor;\n}\n\n#ifdef HAS_SPOT\n    float CalculateSpotLightEffect(vec3 lightPosition, vec3 conePointAt, float cosConeAngle, float cosConeAngleInner, float spotExponent, vec3 lightDirection) {\n        vec3 spotLightDirection = normalize(lightPosition-conePointAt);\n        float spotAngle = dot(-lightDirection, spotLightDirection);\n        float epsilon = cosConeAngle - cosConeAngleInner;\n\n        float spotIntensity = clamp((spotAngle - cosConeAngle)/epsilon, 0.0, 1.0);\n        spotIntensity = pow(spotIntensity, max(0.01, spotExponent));\n\n        return max(0., spotIntensity);\n    }\n#endif\n\n\n\n{{PHONG_FRAGMENT_HEAD}}\n\n\nvoid main()\n{\n    {{MODULE_BEGIN_FRAG}}\n\n    vec4 col=vec4(0., 0., 0., inDiffuseColor.a);\n    vec3 calculatedColor = vec3(0.);\n    vec3 normal = normalize(normInterpolated);\n    vec3 baseColor = inDiffuseColor.rgb;\n\n    {{MODULE_BASE_COLOR}}\n\n\n\n    #ifdef AO_CHAN_0\n        vec2 tcAo=texCoord;\n    #endif\n    #ifdef AO_CHAN_1\n        vec2 tcAo=texCoord1;\n    #endif\n\n\n    vec3 viewDirection = normalize(v_viewDirection);\n\n    #ifdef DOUBLE_SIDED\n        if(!gl_FrontFacing) normal = normal * -1.0;\n    #endif\n\n    #ifdef HAS_TEXTURES\n        #ifdef HAS_TEXTURE_DIFFUSE\n            baseColor = texture(texDiffuse, texCoord).rgb;\n\n            #ifdef COLORIZE_TEXTURE\n                baseColor *= inDiffuseColor.rgb;\n            #endif\n        #endif\n\n        #ifdef HAS_TEXTURE_NORMAL\n            normal = texture(texNormal, texCoord).rgb;\n            normal = normalize(normal * 2. - 1.);\n            float normalIntensity = inTextureIntensities.NORMAL;\n            normal = normalize(mix(vec3(0., 0., 1.), normal, 2. * normalIntensity));\n            normal = normalize(TBN_Matrix * normal);\n        #endif\n    #endif\n\n    {{PHONG_FRAGMENT_BODY}}\n\n\n\n\n\n\n    #ifdef ENABLE_FRESNEL\n        calculatedColor += inFresnel.rgb * (CalculateFresnel(vec3(cameraSpace_pos), normal) * inFresnel.w * inFresnelWidthExponent.x);\n    #endif\n\n     #ifdef HAS_TEXTURE_ALPHA\n        #ifdef ALPHA_MASK_ALPHA\n            col.a*=texture(texAlpha,texCoord).a;\n        #endif\n        #ifdef ALPHA_MASK_LUMI\n            col.a*= dot(vec3(0.2126,0.7152,0.0722), texture(texAlpha,texCoord).rgb);\n        #endif\n        #ifdef ALPHA_MASK_R\n            col.a*=texture(texAlpha,texCoord).r;\n        #endif\n        #ifdef ALPHA_MASK_G\n            col.a*=texture(texAlpha,texCoord).g;\n        #endif\n        #ifdef ALPHA_MASK_B\n            col.a*=texture(texAlpha,texCoord).b;\n        #endif\n    #endif\n\n    #ifdef DISCARDTRANS\n        if(col.a<0.2) discard;\n    #endif\n\n\n    #ifdef HAS_TEXTURE_ENV\n        vec3 luminanceColor = vec3(0.);\n\n        #ifndef ENVMAP_MATCAP\n            float environmentMapWidth = inEnvMapWidth;\n            float glossyExponent = inMaterialProperties.SHININESS;\n            float glossyCoefficient = inMaterialProperties.SPECULAR_AMT;\n\n            vec3 envMapNormal =  normal;\n            vec3 reflectDirection = reflect(normalize(-viewDirection), normal);\n\n            float lambertianCoefficient = dot(viewDirection, reflectDirection); //0.44; // TODO: need prefiltered map for this\n            // lambertianCoefficient = 1.;\n            float specularAngle = max(dot(reflectDirection, viewDirection), 0.);\n            float specularFactor = pow(specularAngle, max(0., inMaterialProperties.SHININESS));\n\n            glossyExponent = specularFactor;\n\n            float maxMIPLevel = 10.;\n            float MIPlevel = log2(environmentMapWidth / 1024. * sqrt(3.)) - 0.5 * log2(glossyExponent + 1.);\n\n            luminanceColor = inEnvMapIntensity * (\n                inDiffuseColor.rgb *\n                SAMPLETEX(texEnv, envMapNormal, maxMIPLevel).rgb\n                +\n                glossyCoefficient * SAMPLETEX(texEnv, reflectDirection, MIPlevel).rgb\n            );\n        #endif\n        #ifdef ENVMAP_MATCAP\n            luminanceColor = inEnvMapIntensity * (\n                texture(texEnv, getMatCapUV(viewSpacePosition, viewSpaceNormal)).rgb\n                //inDiffuseColor.rgb\n                //* textureLod(texEnv, getMatCapUV(envMapNormal), maxMIPLevel).rgb\n                //+\n                //glossyCoefficient * textureLod(texEnv, getMatCapUV(reflectDirection), MIPlevel).rgb\n            );\n        #endif\n\n\n\n        #ifdef HAS_TEXTURE_LUMINANCE_MASK\n            luminanceColor *= texture(texLuminance, texCoord).r * inLuminanceMaskIntensity;\n        #endif\n\n        #ifdef HAS_TEXTURE_AO\n            luminanceColor *= texture(texAO, tcAo).r*inTextureIntensities.AO;\n        #endif\n\n        #ifdef ENV_BLEND_ADD\n            calculatedColor.rgb += luminanceColor;\n        #endif\n        #ifdef ENV_BLEND_MUL\n            calculatedColor.rgb *= luminanceColor;\n        #endif\n\n        #ifdef ENV_BLEND_MIX\n            calculatedColor.rgb=mix(luminanceColor,calculatedColor.rgb,luminanceColor);\n        #endif\n\n\n    #endif\n\n    #ifdef ADD_EMISSIVE_COLOR\n        vec3 emissiveRadiance = mix(calculatedColor, inEmissiveColor.rgb, inEmissiveColor.w); // .w = intensity of color;\n\n        #ifdef HAS_TEXTURE_EMISSIVE\n            float emissiveIntensity = inTextureIntensities.EMISSIVE;\n            emissiveRadiance = mix(calculatedColor, texture(texEmissive, texCoord).rgb, emissiveIntensity);\n        #endif\n\n        #ifdef HAS_TEXTURE_EMISSIVE_MASK\n           float emissiveMixValue = mix(1., texture(texMaskEmissive, texCoord).r, inEmissiveMaskIntensity);\n           calculatedColor = mix(calculatedColor, emissiveRadiance, emissiveMixValue);\n        #endif\n\n        #ifndef HAS_TEXTURE_EMISSIVE_MASK\n            calculatedColor = emissiveRadiance;\n        #endif\n    #endif\n\n    col.rgb = clamp(calculatedColor, 0., 1.);\n\n\n    {{MODULE_COLOR}}\n\n    outColor = col;\n\n}\n","phong_vert":"\n{{MODULES_HEAD}}\n\n#define NONE -1\n#define AMBIENT 0\n#define POINT 1\n#define DIRECTIONAL 2\n#define SPOT 3\n\n#define TEX_REPEAT_X x;\n#define TEX_REPEAT_Y y;\n#define TEX_OFFSET_X z;\n#define TEX_OFFSET_Y w;\n\nIN vec3 vPosition;\nIN vec2 attrTexCoord;\nIN vec3 attrVertNormal;\nIN float attrVertIndex;\nIN vec3 attrTangent;\nIN vec3 attrBiTangent;\n\nOUT vec2 texCoord;\nOUT vec3 normInterpolated;\nOUT vec3 fragPos;\n\n#ifdef AO_CHAN_1\n    #ifndef ATTRIB_attrTexCoord1\n        IN vec2 attrTexCoord1;\n        OUT vec2 texCoord1;\n        #define ATTRIB_attrTexCoord1\n        #define ATTRIB_texCoord1\n    #endif\n#endif\n\n#ifdef HAS_TEXTURE_NORMAL\n    OUT mat3 TBN_Matrix; // tangent bitangent normal space transform matrix\n#endif\n\n#ifdef ENABLE_FRESNEL\n    OUT vec4 cameraSpace_pos;\n#endif\n\nOUT vec3 v_viewDirection;\nOUT mat3 normalMatrix;\nOUT mat4 mvMatrix;\n\n#ifdef HAS_TEXTURES\n    UNI vec4 inTextureRepeatOffset;\n#endif\n\nUNI vec3 camPos;\nUNI mat4 projMatrix;\nUNI mat4 viewMatrix;\nUNI mat4 modelMatrix;\n\n#ifdef ENVMAP_MATCAP\n    OUT vec3 viewSpaceNormal;\n    OUT vec3 viewSpacePosition;\n#endif\n\n\nmat3 transposeMat3(mat3 m)\n{\n    return mat3(m[0][0], m[1][0], m[2][0],\n        m[0][1], m[1][1], m[2][1],\n        m[0][2], m[1][2], m[2][2]);\n}\n\nmat3 inverseMat3(mat3 m)\n{\n    float a00 = m[0][0], a01 = m[0][1], a02 = m[0][2];\n    float a10 = m[1][0], a11 = m[1][1], a12 = m[1][2];\n    float a20 = m[2][0], a21 = m[2][1], a22 = m[2][2];\n\n    float b01 = a22 * a11 - a12 * a21;\n    float b11 = -a22 * a10 + a12 * a20;\n    float b21 = a21 * a10 - a11 * a20;\n\n    float det = a00 * b01 + a01 * b11 + a02 * b21;\n\n    return mat3(b01, (-a22 * a01 + a02 * a21), (a12 * a01 - a02 * a11),\n        b11, (a22 * a00 - a02 * a20), (-a12 * a00 + a02 * a10),\n        b21, (-a21 * a00 + a01 * a20), (a11 * a00 - a01 * a10)) / det;\n}\n\nvoid main()\n{\n    mat4 mMatrix=modelMatrix;\n    vec4 pos=vec4(vPosition,  1.0);\n\n    texCoord=attrTexCoord;\n    texCoord.y = 1. - texCoord.y;\n\n    #ifdef ATTRIB_texCoord1\n        texCoord1=attrTexCoord1;\n    #endif\n\n    vec3 norm=attrVertNormal;\n    vec3 tangent = attrTangent;\n    vec3 bitangent = attrBiTangent;\n\n    {{MODULE_VERTEX_POSITION}}\n\n    normalMatrix = transposeMat3(inverseMat3(mat3(mMatrix)));\n    mvMatrix = (viewMatrix * mMatrix);\n\n\n\n    #ifdef ENABLE_FRESNEL\n        cameraSpace_pos = mvMatrix * pos;\n    #endif\n\n    #ifdef HAS_TEXTURES\n        float repeatX = inTextureRepeatOffset.TEX_REPEAT_X;\n        float offsetX = inTextureRepeatOffset.TEX_OFFSET_X;\n        float repeatY = inTextureRepeatOffset.TEX_REPEAT_Y;\n        float offsetY = inTextureRepeatOffset.TEX_OFFSET_Y;\n\n        texCoord.x *= repeatX;\n        texCoord.x += offsetX;\n        texCoord.y *= repeatY;\n        texCoord.y += offsetY;\n    #endif\n\n   normInterpolated = vec3(normalMatrix*norm);\n\n    #ifdef HAS_TEXTURE_NORMAL\n        vec3 normCameraSpace = normalize((vec4(normInterpolated, 0.0)).xyz);\n        vec3 tangCameraSpace = normalize((mMatrix * vec4(tangent, 0.0)).xyz);\n        vec3 bitangCameraSpace = normalize((mMatrix * vec4(bitangent, 0.0)).xyz);\n\n        // re orthogonalization for smoother normals\n        tangCameraSpace = normalize(tangCameraSpace - dot(tangCameraSpace, normCameraSpace) * normCameraSpace);\n        bitangCameraSpace = cross(normCameraSpace, tangCameraSpace);\n\n        TBN_Matrix = mat3(tangCameraSpace, bitangCameraSpace, normCameraSpace);\n    #endif\n\n    fragPos = vec3((mMatrix) * pos);\n    v_viewDirection = normalize(camPos - fragPos);\n    // modelPos=mMatrix*pos;\n\n    #ifdef ENVMAP_MATCAP\n        mat3 viewSpaceNormalMatrix = normalMatrix = transposeMat3(inverseMat3(mat3(mvMatrix)));\n        viewSpaceNormal = normalize(viewSpaceNormalMatrix * norm);\n        viewSpacePosition = vec3(mvMatrix * pos);\n    #endif\n\n    mat4 modelViewMatrix=mvMatrix;\n    {{MODULE_VERTEX_MODELVIEW}}\n\n\n    gl_Position = projMatrix * modelViewMatrix * pos;\n}\n","snippet_body_ambient_frag":"    // * AMBIENT LIGHT {{LIGHT_INDEX}} *\n    vec3 diffuseColor{{LIGHT_INDEX}} = phongLight{{LIGHT_INDEX}}.lightProperties.INTENSITY*phongLight{{LIGHT_INDEX}}.color;\n    calculatedColor += diffuseColor{{LIGHT_INDEX}};\n","snippet_body_directional_frag":"    // * DIRECTIONAL LIGHT {{LIGHT_INDEX}} *\n\n    if (phongLight{{LIGHT_INDEX}}.castLight == 1) {\n        vec3 phongLightDirection{{LIGHT_INDEX}} = normalize(phongLight{{LIGHT_INDEX}}.position);\n\n        float phongLambert{{LIGHT_INDEX}} = 1.; // inout variable\n\n        vec3 lightColor{{LIGHT_INDEX}} = phongLight{{LIGHT_INDEX}}.color;\n        vec3 lightSpecular{{LIGHT_INDEX}} = phongLight{{LIGHT_INDEX}}.specular;\n\n        #ifdef HAS_TEXTURES\n            #ifdef HAS_TEXTURE_AO\n                // lightColor{{LIGHT_INDEX}} *= mix(vec3(1.), texture(texAO, texCoord).rgb, inTextureIntensities.AO);\n                lightColor{{LIGHT_INDEX}} *= texture(texAO, tcAo).g, inTextureIntensities.AO;\n\n            #endif\n\n            #ifdef HAS_TEXTURE_SPECULAR\n                lightSpecular{{LIGHT_INDEX}} *= mix(1., texture(texSpecular, texCoord).r, inTextureIntensities.SPECULAR);\n            #endif\n        #endif\n\n        vec3 diffuseColor{{LIGHT_INDEX}} = CalculateDiffuseColor(phongLightDirection{{LIGHT_INDEX}}, viewDirection, normal, lightColor{{LIGHT_INDEX}}, baseColor, phongLambert{{LIGHT_INDEX}});\n        vec3 specularColor{{LIGHT_INDEX}} = CalculateSpecularColor(\n            lightSpecular{{LIGHT_INDEX}},\n            inMaterialProperties.SPECULAR_AMT,\n            inMaterialProperties.SHININESS,\n            phongLightDirection{{LIGHT_INDEX}},\n            viewDirection,\n            normal,\n            phongLambert{{LIGHT_INDEX}}\n        );\n\n        vec3 combinedColor{{LIGHT_INDEX}} = (diffuseColor{{LIGHT_INDEX}} + specularColor{{LIGHT_INDEX}});\n\n        vec3 lightModelDiff{{LIGHT_INDEX}} = phongLight{{LIGHT_INDEX}}.position - fragPos.xyz;\n\n        combinedColor{{LIGHT_INDEX}} *= phongLight{{LIGHT_INDEX}}.lightProperties.INTENSITY;\n        calculatedColor += combinedColor{{LIGHT_INDEX}};\n    }","snippet_body_point_frag":"// * POINT LIGHT {{LIGHT_INDEX}} *\n    if (phongLight{{LIGHT_INDEX}}.castLight == 1) {\n        vec3 phongLightDirection{{LIGHT_INDEX}} = phongLight{{LIGHT_INDEX}}.position - fragPos.xyz;\n        // * get length before normalization for falloff calculation\n        phongLightDirection{{LIGHT_INDEX}} = normalize(phongLightDirection{{LIGHT_INDEX}});\n        float phongLightDistance{{LIGHT_INDEX}} = length(phongLightDirection{{LIGHT_INDEX}});\n\n        float phongLambert{{LIGHT_INDEX}} = 1.; // inout variable\n\n        vec3 lightColor{{LIGHT_INDEX}} = phongLight{{LIGHT_INDEX}}.color;\n        vec3 lightSpecular{{LIGHT_INDEX}} = phongLight{{LIGHT_INDEX}}.specular;\n\n        #ifdef HAS_TEXTURES\n            #ifdef HAS_TEXTURE_AO\n                lightColor{{LIGHT_INDEX}} -= (1.0-texture(texAO, tcAo).g)* (inTextureIntensities.AO);\n            #endif\n\n            #ifdef HAS_TEXTURE_SPECULAR\n                lightSpecular{{LIGHT_INDEX}} *= mix(1., texture(texSpecular, texCoord).r, inTextureIntensities.SPECULAR);\n            #endif\n        #endif\n\n        vec3 diffuseColor{{LIGHT_INDEX}} = CalculateDiffuseColor(phongLightDirection{{LIGHT_INDEX}}, viewDirection, normal, lightColor{{LIGHT_INDEX}}, baseColor, phongLambert{{LIGHT_INDEX}});\n        vec3 specularColor{{LIGHT_INDEX}} = CalculateSpecularColor(\n            lightSpecular{{LIGHT_INDEX}},\n            inMaterialProperties.SPECULAR_AMT,\n            inMaterialProperties.SHININESS,\n            phongLightDirection{{LIGHT_INDEX}},\n            viewDirection,\n            normal,\n            phongLambert{{LIGHT_INDEX}}\n        );\n\n        vec3 combinedColor{{LIGHT_INDEX}} = (diffuseColor{{LIGHT_INDEX}} + specularColor{{LIGHT_INDEX}});\n\n        combinedColor{{LIGHT_INDEX}} *= phongLight{{LIGHT_INDEX}}.lightProperties.INTENSITY;\n\n        float attenuation{{LIGHT_INDEX}} = CalculateFalloff(\n            phongLightDistance{{LIGHT_INDEX}},\n            phongLightDirection{{LIGHT_INDEX}},\n            phongLight{{LIGHT_INDEX}}.lightProperties.FALLOFF,\n            phongLight{{LIGHT_INDEX}}.lightProperties.RADIUS\n        );\n\n        attenuation{{LIGHT_INDEX}} *= when_gt(phongLambert{{LIGHT_INDEX}}, 0.);\n        combinedColor{{LIGHT_INDEX}} *= attenuation{{LIGHT_INDEX}};\n\n        calculatedColor += combinedColor{{LIGHT_INDEX}};\n    }\n","snippet_body_spot_frag":"    // * SPOT LIGHT {{LIGHT_INDEX}} *\n    if (phongLight{{LIGHT_INDEX}}.castLight == 1) {\n        vec3 phongLightDirection{{LIGHT_INDEX}} = phongLight{{LIGHT_INDEX}}.position - fragPos.xyz;\n        phongLightDirection{{LIGHT_INDEX}} = normalize( phongLightDirection{{LIGHT_INDEX}});\n        float phongLightDistance{{LIGHT_INDEX}} = length(phongLightDirection{{LIGHT_INDEX}});\n\n        float phongLambert{{LIGHT_INDEX}} = 1.; // inout variable\n\n        vec3 lightColor{{LIGHT_INDEX}} = phongLight{{LIGHT_INDEX}}.color;\n        vec3 lightSpecular{{LIGHT_INDEX}} = phongLight{{LIGHT_INDEX}}.specular;\n\n        #ifdef HAS_TEXTURES\n            #ifdef HAS_TEXTURE_AO\n                // lightColor{{LIGHT_INDEX}} *= mix(vec3(1.), texture(texAO, texCoord).rgb, inTextureIntensities.AO);\n                lightColor{{LIGHT_INDEX}} *= texture(texAO, texCoord).g, inTextureIntensities.AO;\n\n            #endif\n\n            #ifdef HAS_TEXTURE_SPECULAR\n                lightSpecular{{LIGHT_INDEX}} *= mix(1., texture(texSpecular, texCoord).r, inTextureIntensities.SPECULAR);\n            #endif\n        #endif\n\n        vec3 diffuseColor{{LIGHT_INDEX}} = CalculateDiffuseColor(phongLightDirection{{LIGHT_INDEX}}, viewDirection, normal, lightColor{{LIGHT_INDEX}}, baseColor, phongLambert{{LIGHT_INDEX}});\n        vec3 specularColor{{LIGHT_INDEX}} = CalculateSpecularColor(\n            lightSpecular{{LIGHT_INDEX}},\n            inMaterialProperties.SPECULAR_AMT,\n            inMaterialProperties.SHININESS,\n            phongLightDirection{{LIGHT_INDEX}},\n            viewDirection,\n            normal,\n            phongLambert{{LIGHT_INDEX}}\n        );\n\n        vec3 combinedColor{{LIGHT_INDEX}} = (diffuseColor{{LIGHT_INDEX}} + specularColor{{LIGHT_INDEX}});\n\n        float spotIntensity{{LIGHT_INDEX}} = CalculateSpotLightEffect(\n            phongLight{{LIGHT_INDEX}}.position, phongLight{{LIGHT_INDEX}}.conePointAt, phongLight{{LIGHT_INDEX}}.spotProperties.COSCONEANGLE,\n            phongLight{{LIGHT_INDEX}}.spotProperties.COSCONEANGLEINNER, phongLight{{LIGHT_INDEX}}.spotProperties.SPOTEXPONENT,\n            phongLightDirection{{LIGHT_INDEX}}\n        );\n\n        combinedColor{{LIGHT_INDEX}} *= spotIntensity{{LIGHT_INDEX}};\n\n        vec3 lightModelDiff{{LIGHT_INDEX}} = phongLight{{LIGHT_INDEX}}.position - fragPos.xyz;\n\n        float attenuation{{LIGHT_INDEX}} = CalculateFalloff(\n            phongLightDistance{{LIGHT_INDEX}},\n            phongLightDirection{{LIGHT_INDEX}},\n            phongLight{{LIGHT_INDEX}}.lightProperties.FALLOFF,\n            phongLight{{LIGHT_INDEX}}.lightProperties.RADIUS\n        );\n\n        attenuation{{LIGHT_INDEX}} *= when_gt(phongLambert{{LIGHT_INDEX}}, 0.);\n\n        combinedColor{{LIGHT_INDEX}} *= attenuation{{LIGHT_INDEX}};\n\n        combinedColor{{LIGHT_INDEX}} *= phongLight{{LIGHT_INDEX}}.lightProperties.INTENSITY;\n        calculatedColor += combinedColor{{LIGHT_INDEX}};\n    }","snippet_head_frag":"UNI Light phongLight{{LIGHT_INDEX}};\n",};
const cgl = op.patch.cgl;

const attachmentFragmentHead = attachments.snippet_head_frag;
const snippets = {
    "point": attachments.snippet_body_point_frag,
    "spot": attachments.snippet_body_spot_frag,
    "ambient": attachments.snippet_body_ambient_frag,
    "directional": attachments.snippet_body_directional_frag,
    "area": attachments.snippet_body_area_frag,
};
const LIGHT_INDEX_REGEX = new RegExp("{{LIGHT_INDEX}}", "g");

const createFragmentHead = (n) => { return attachmentFragmentHead.replace("{{LIGHT_INDEX}}", n); };
const createFragmentBody = (n, type) => { return snippets[type].replace(LIGHT_INDEX_REGEX, n); };

function createDefaultShader()
{
    const vertexShader = attachments.phong_vert;
    let fragmentShader = attachments.phong_frag;

    let fragmentHead = createFragmentHead(0);
    let fragmentBody = createFragmentBody(0, DEFAULT_LIGHTSTACK[0].type);

    fragmentShader = fragmentShader.replace(FRAGMENT_HEAD_REGEX, fragmentHead);
    fragmentShader = fragmentShader.replace(FRAGMENT_BODY_REGEX, fragmentBody);

    shader.setSource(vertexShader, fragmentShader);
    shader.define("HAS_POINT");
    shader.removeDefine("HAS_SPOT");
    shader.removeDefine("HAS_DIRECTIONAL");
    shader.removeDefine("HAS_AMBIENT");
}

const inTrigger = op.inTrigger("Trigger In");

// * DIFFUSE *
const inDiffuseR = op.inFloat("R", Math.random());
const inDiffuseG = op.inFloat("G", Math.random());
const inDiffuseB = op.inFloat("B", Math.random());
const inDiffuseA = op.inFloatSlider("A", 1);
const diffuseColors = [inDiffuseR, inDiffuseG, inDiffuseB, inDiffuseA];
op.setPortGroup("Diffuse Color", diffuseColors);

const inToggleOrenNayar = op.inBool("Enable", false);
const inAlbedo = op.inFloatSlider("Albedo", 0.707);
const inRoughness = op.inFloatSlider("Roughness", 0.835);

inToggleOrenNayar.setUiAttribs({ "hidePort": true });
inAlbedo.setUiAttribs({ "greyout": true });
inRoughness.setUiAttribs({ "greyout": true });
inDiffuseR.setUiAttribs({ "colorPick": true });
op.setPortGroup("Oren-Nayar Diffuse", [inToggleOrenNayar, inAlbedo, inRoughness]);
op.toWorkShouldNotBeChild("Ops.Gl.TextureEffects.ImageCompose", CABLES.OP_PORT_TYPE_FUNCTION);

inToggleOrenNayar.onChange = function ()
{
    shader.toggleDefine("ENABLE_OREN_NAYAR_DIFFUSE", inToggleOrenNayar);
    inAlbedo.setUiAttribs({ "greyout": !inToggleOrenNayar.get() });
    inRoughness.setUiAttribs({ "greyout": !inToggleOrenNayar.get() });
};

// * FRESNEL *
const inToggleFresnel = op.inValueBool("Active", false);
inToggleFresnel.setUiAttribs({ "hidePort": true });
const inFresnel = op.inValueSlider("Fresnel Intensity", 0.7);
const inFresnelWidth = op.inFloat("Fresnel Width", 1);
const inFresnelExponent = op.inFloat("Fresnel Exponent", 6);
const inFresnelR = op.inFloat("Fresnel R", 1);
const inFresnelG = op.inFloat("Fresnel G", 1);
const inFresnelB = op.inFloat("Fresnel B", 1);
inFresnelR.setUiAttribs({ "colorPick": true });

const fresnelArr = [inFresnel, inFresnelWidth, inFresnelExponent, inFresnelR, inFresnelG, inFresnelB];
fresnelArr.forEach(function (port) { port.setUiAttribs({ "greyout": true }); });
op.setPortGroup("Fresnel", fresnelArr.concat([inToggleFresnel]));

let uniFresnel = null;
let uniFresnelWidthExponent = null;
inToggleFresnel.onChange = function ()
{
    shader.toggleDefine("ENABLE_FRESNEL", inToggleFresnel);
    if (inToggleFresnel.get())
    {
        if (!uniFresnel) uniFresnel = new CGL.Uniform(shader, "4f", "inFresnel", inFresnelR, inFresnelG, inFresnelB, inFresnel);
        if (!uniFresnelWidthExponent) uniFresnelWidthExponent = new CGL.Uniform(shader, "2f", "inFresnelWidthExponent", inFresnelWidth, inFresnelExponent);
    }
    else
    {
        if (uniFresnel)
        {
            shader.removeUniform("inFresnel");
            uniFresnel = null;
        }

        if (uniFresnelWidthExponent)
        {
            shader.removeUniform("inFresnelWidthExponent");
            uniFresnelWidthExponent = null;
        }
    }

    fresnelArr.forEach(function (port) { port.setUiAttribs({ "greyout": !inToggleFresnel.get() }); });
};
// * EMISSIVE *
const inEmissiveActive = op.inBool("Emissive Active", false);
const inEmissiveColorIntensity = op.inFloatSlider("Color Intensity", 0.3);
const inEmissiveR = op.inFloatSlider("Emissive R", Math.random());
const inEmissiveG = op.inFloatSlider("Emissive G", Math.random());
const inEmissiveB = op.inFloatSlider("Emissive B", Math.random());
inEmissiveR.setUiAttribs({ "colorPick": true });
op.setPortGroup("Emissive Color", [inEmissiveActive, inEmissiveColorIntensity, inEmissiveR, inEmissiveG, inEmissiveB]);

inEmissiveColorIntensity.setUiAttribs({ "greyout": !inEmissiveActive.get() });
inEmissiveR.setUiAttribs({ "greyout": !inEmissiveActive.get() });
inEmissiveG.setUiAttribs({ "greyout": !inEmissiveActive.get() });
inEmissiveB.setUiAttribs({ "greyout": !inEmissiveActive.get() });

let uniEmissiveColor = null;

inEmissiveActive.onChange = () =>
{
    shader.toggleDefine("ADD_EMISSIVE_COLOR", inEmissiveActive);

    if (inEmissiveActive.get())
    {
        uniEmissiveColor = new CGL.Uniform(shader, "4f", "inEmissiveColor", inEmissiveR, inEmissiveG, inEmissiveB, inEmissiveColorIntensity);
        inEmissiveTexture.setUiAttribs({ "greyout": false });
        inEmissiveMaskTexture.setUiAttribs({ "greyout": false });

        if (inEmissiveTexture.get()) inEmissiveIntensity.setUiAttribs({ "greyout": false });
        if (inEmissiveMaskTexture.get()) inEmissiveMaskIntensity.setUiAttribs({ "greyout": false });
    }
    else
    {
        op.log("ayayay");
        inEmissiveTexture.setUiAttribs({ "greyout": true });
        inEmissiveMaskTexture.setUiAttribs({ "greyout": true });
        inEmissiveIntensity.setUiAttribs({ "greyout": true });
        inEmissiveMaskIntensity.setUiAttribs({ "greyout": true });

        shader.removeUniform("inEmissiveColor");
        uniEmissiveColor = null;
    }

    if (inEmissiveTexture.get())
    {
        inEmissiveColorIntensity.setUiAttribs({ "greyout": true });
        inEmissiveR.setUiAttribs({ "greyout": true });
        inEmissiveG.setUiAttribs({ "greyout": true });
        inEmissiveB.setUiAttribs({ "greyout": true });
    }
    else
    {
        if (inEmissiveActive.get())
        {
            inEmissiveColorIntensity.setUiAttribs({ "greyout": false });
            inEmissiveR.setUiAttribs({ "greyout": false });
            inEmissiveG.setUiAttribs({ "greyout": false });
            inEmissiveB.setUiAttribs({ "greyout": false });
        }
        else
        {
            inEmissiveColorIntensity.setUiAttribs({ "greyout": true });
            inEmissiveR.setUiAttribs({ "greyout": true });
            inEmissiveG.setUiAttribs({ "greyout": true });
            inEmissiveB.setUiAttribs({ "greyout": true });
        }
    }
};
// * SPECULAR *
const inShininess = op.inFloat("Shininess", 4);
const inSpecularCoefficient = op.inFloatSlider("Specular Amount", 0.5);
const inSpecularMode = op.inSwitch("Specular Model", ["Blinn", "Schlick", "Phong", "Gauss"], "Blinn");

inSpecularMode.setUiAttribs({ "hidePort": true });
const specularColors = [inShininess, inSpecularCoefficient, inSpecularMode];
op.setPortGroup("Specular", specularColors);

// * LIGHT *
const inEnergyConservation = op.inValueBool("Energy Conservation", false);
const inToggleDoubleSided = op.inBool("Double Sided Material", false);
const inFalloffMode = op.inSwitch("Falloff Mode", ["A", "B", "C", "D"], "A");
inEnergyConservation.setUiAttribs({ "hidePort": true });
inToggleDoubleSided.setUiAttribs({ "hidePort": true });
inFalloffMode.setUiAttribs({ "hidePort": true });
inFalloffMode.onChange = () =>
{
    const MODES = ["A", "B", "C", "D"];
    shader.define("FALLOFF_MODE_" + inFalloffMode.get());
    MODES.filter((mode) => { return mode !== inFalloffMode.get(); })
        .forEach((mode) => { return shader.removeDefine("FALLOFF_MODE_" + mode); });
};

const lightProps = [inEnergyConservation, inToggleDoubleSided, inFalloffMode];
op.setPortGroup("Light Options", lightProps);

// TEXTURES
const inDiffuseTexture = op.inTexture("Diffuse Texture");
const inSpecularTexture = op.inTexture("Specular Texture");
const inNormalTexture = op.inTexture("Normal Map");
const inAoTexture = op.inTexture("AO Texture");
const inEmissiveTexture = op.inTexture("Emissive Texture");
const inEmissiveMaskTexture = op.inTexture("Emissive Mask");
const inAlphaTexture = op.inTexture("Opacity Texture");
const inEnvTexture = op.inTexture("Environment Map");
const inLuminanceMaskTexture = op.inTexture("Env Map Mask");
op.setPortGroup("Textures", [inDiffuseTexture, inSpecularTexture, inNormalTexture, inAoTexture, inEmissiveTexture, inEmissiveMaskTexture, inAlphaTexture, inEnvTexture, inLuminanceMaskTexture]);

// TEXTURE TRANSFORMS
const inColorizeTexture = op.inBool("Colorize Texture", false);
const inDiffuseRepeatX = op.inFloat("Diffuse Repeat X", 1);
const inDiffuseRepeatY = op.inFloat("Diffuse Repeat Y", 1);
const inTextureOffsetX = op.inFloat("Texture Offset X", 0);
const inTextureOffsetY = op.inFloat("Texture Offset Y", 0);

const inSpecularIntensity = op.inFloatSlider("Specular Intensity", 1);
const inNormalIntensity = op.inFloatSlider("Normal Map Intensity", 0.5);
const inAoIntensity = op.inFloatSlider("AO Intensity", 1);
const inAoChannel = op.inSwitch("AO UV Channel", ["1", "2"], 1);
const inEmissiveIntensity = op.inFloatSlider("Emissive Intensity", 1);
const inEmissiveMaskIntensity = op.inFloatSlider("Emissive Mask Intensity", 1);
const inEnvMapIntensity = op.inFloatSlider("Env Map Intensity", 1);
const inEnvMapBlend = op.inSwitch("Env Map Blend", ["Add", "Multiply", "Mix"], "Add");
const inLuminanceMaskIntensity = op.inFloatSlider("Env Mask Intensity", 1);

inColorizeTexture.setUiAttribs({ "hidePort": true });
op.setPortGroup("Texture Transforms", [inColorizeTexture, inDiffuseRepeatY, inDiffuseRepeatX, inTextureOffsetY, inTextureOffsetX]);
op.setPortGroup("Texture Intensities", [inNormalIntensity, inAoIntensity, inSpecularIntensity, inEmissiveIntensity, inEnvMapBlend, inEmissiveMaskIntensity, inEnvMapIntensity, inLuminanceMaskIntensity]);
const alphaMaskSource = op.inSwitch("Alpha Mask Source", ["Luminance", "R", "G", "B", "A"], "Luminance");
alphaMaskSource.setUiAttribs({ "greyout": true });

const discardTransPxl = op.inValueBool("Discard Transparent Pixels");
discardTransPxl.setUiAttribs({ "hidePort": true });

op.setPortGroup("Opacity Texture", [alphaMaskSource, discardTransPxl]);

inAoChannel.onChange =
    inEnvMapBlend.onChange =
    alphaMaskSource.onChange = updateDefines;

const outTrigger = op.outTrigger("Trigger Out");
const shaderOut = op.outObject("Shader", null, "shader");
shaderOut.ignoreValueSerialize = true;

const shader = new CGL.Shader(cgl, "phongmaterial_" + op.id, this);
shader.op = this;
shader.setModules(["MODULE_VERTEX_POSITION", "MODULE_COLOR", "MODULE_BEGIN_FRAG", "MODULE_BASE_COLOR", "MODULE_VERTEX_MODELVIEW"]);
shader.setSource(attachments.simosphong_vert, attachments.simosphong_frag);
// let recompileShader = false;
shader.define("FALLOFF_MODE_A");

if (cgl.glVersion < 2)
{
    shader.enableExtension("GL_OES_standard_derivatives");

    if (cgl.enableExtension("OES_texture_float")) shader.enableExtension("GL_OES_texture_float");
    else op.log("error loading extension OES_texture_float");

    if (cgl.enableExtension("OES_texture_float_linear")) shader.enableExtension("GL_OES_texture_float_linear");
    else op.log("error loading extention OES_texture_float_linear");

    if (cgl.enableExtension("GL_OES_texture_half_float")) shader.enableExtension("GL_OES_texture_half_float");
    else op.log("error loading extention GL_OES_texture_half_float");

    if (cgl.enableExtension("GL_OES_texture_half_float_linear")) shader.enableExtension("GL_OES_texture_half_float_linear");
    else op.log("error loading extention GL_OES_texture_half_float_linear");
}

const FRAGMENT_HEAD_REGEX = new RegExp("{{PHONG_FRAGMENT_HEAD}}", "g");
const FRAGMENT_BODY_REGEX = new RegExp("{{PHONG_FRAGMENT_BODY}}", "g");

const hasLight = {
    "directional": false,
    "spot": false,
    "ambient": false,
    "point": false,
};

function createShader(lightStack)
{
    let fragmentShader = attachments.phong_frag;

    let fragmentHead = "";
    let fragmentBody = "";

    hasLight.directional = false;
    hasLight.spot = false;
    hasLight.ambient = false;
    hasLight.point = false;

    for (let i = 0; i < lightStack.length; i += 1)
    {
        const light = lightStack[i];

        const type = light.type;

        if (!hasLight[type])
        {
            hasLight[type] = true;
        }

        fragmentHead = fragmentHead.concat(createFragmentHead(i));
        fragmentBody = fragmentBody.concat(createFragmentBody(i, light.type));
    }

    fragmentShader = fragmentShader.replace(FRAGMENT_HEAD_REGEX, fragmentHead);
    fragmentShader = fragmentShader.replace(FRAGMENT_BODY_REGEX, fragmentBody);

    shader.setSource(attachments.phong_vert, fragmentShader);

    for (let i = 0, keys = Object.keys(hasLight); i < keys.length; i += 1)
    {
        const key = keys[i];

        if (hasLight[key])
        {
            if (!shader.hasDefine("HAS_" + key.toUpperCase()))
            {
                shader.define("HAS_" + key.toUpperCase());
            }
        }
        else
        {
            if (shader.hasDefine("HAS_" + key.toUpperCase()))
            {
                shader.removeDefine("HAS_" + key.toUpperCase());
            }
        }
    }
}

shaderOut.set(shader);

let diffuseTextureUniform = null;
let specularTextureUniform = null;
let normalTextureUniform = null;
let aoTextureUniform = null;
let emissiveTextureUniform = null;
let emissiveMaskTextureUniform = null;
let emissiveMaskIntensityUniform = null;
let alphaTextureUniform = null;
let envTextureUniform = null;
let inEnvMapIntensityUni = null;
let inEnvMapWidthUni = null;
let luminanceTextureUniform = null;
let inLuminanceMaskIntensityUniform = null;

inColorizeTexture.onChange = function ()
{
    shader.toggleDefine("COLORIZE_TEXTURE", inColorizeTexture.get());
};

function updateDiffuseTexture()
{
    if (inDiffuseTexture.get())
    {
        if (!shader.hasDefine("HAS_TEXTURE_DIFFUSE"))
        {
            shader.define("HAS_TEXTURE_DIFFUSE");
            if (!diffuseTextureUniform) diffuseTextureUniform = new CGL.Uniform(shader, "t", "texDiffuse", 0);
        }
    }
    else
    {
        shader.removeUniform("texDiffuse");
        shader.removeDefine("HAS_TEXTURE_DIFFUSE");
        diffuseTextureUniform = null;
    }
}

function updateSpecularTexture()
{
    if (inSpecularTexture.get())
    {
        inSpecularIntensity.setUiAttribs({ "greyout": false });
        if (!shader.hasDefine("HAS_TEXTURE_SPECULAR"))
        {
            shader.define("HAS_TEXTURE_SPECULAR");
            if (!specularTextureUniform) specularTextureUniform = new CGL.Uniform(shader, "t", "texSpecular", 0);
        }
    }
    else
    {
        inSpecularIntensity.setUiAttribs({ "greyout": true });
        shader.removeUniform("texSpecular");
        shader.removeDefine("HAS_TEXTURE_SPECULAR");
        specularTextureUniform = null;
    }
}

function updateNormalTexture()
{
    if (inNormalTexture.get())
    {
        inNormalIntensity.setUiAttribs({ "greyout": false });

        if (!shader.hasDefine("HAS_TEXTURE_NORMAL"))
        {
            shader.define("HAS_TEXTURE_NORMAL");
            if (!normalTextureUniform) normalTextureUniform = new CGL.Uniform(shader, "t", "texNormal", 0);
        }
    }
    else
    {
        inNormalIntensity.setUiAttribs({ "greyout": true });

        shader.removeUniform("texNormal");
        shader.removeDefine("HAS_TEXTURE_NORMAL");
        normalTextureUniform = null;
    }
}

aoTextureUniform = new CGL.Uniform(shader, "t", "texAO");

function updateAoTexture()
{
    shader.toggleDefine("HAS_TEXTURE_AO", inAoTexture.get());

    inAoIntensity.setUiAttribs({ "greyout": !inAoTexture.get() });

    // if (inAoTexture.get())
    // {
    //     // inAoIntensity.setUiAttribs({ "greyout": false });

    //     // if (!shader.hasDefine("HAS_TEXTURE_AO"))
    //     // {
    //         // shader.define("HAS_TEXTURE_AO");
    //         // if (!aoTextureUniform)
    //         aoTextureUniform = new CGL.Uniform(shader, "t", "texAO", 0);
    //     // }
    // }
    // else
    // {
    //     // inAoIntensity.setUiAttribs({ "greyout": true });

    //     shader.removeUniform("texAO");
    //     // shader.removeDefine("HAS_TEXTURE_AO");
    //     aoTextureUniform = null;
    // }
}

function updateEmissiveTexture()
{
    if (inEmissiveTexture.get())
    {
        inEmissiveR.setUiAttribs({ "greyout": true });
        inEmissiveG.setUiAttribs({ "greyout": true });
        inEmissiveB.setUiAttribs({ "greyout": true });
        inEmissiveColorIntensity.setUiAttribs({ "greyout": true });

        if (inEmissiveActive.get())
        {
            inEmissiveIntensity.setUiAttribs({ "greyout": false });
        }

        if (!shader.hasDefine("HAS_TEXTURE_EMISSIVE"))
        {
            shader.define("HAS_TEXTURE_EMISSIVE");
            if (!emissiveTextureUniform) emissiveTextureUniform = new CGL.Uniform(shader, "t", "texEmissive", 0);
        }
    }
    else
    {
        inEmissiveIntensity.setUiAttribs({ "greyout": true });

        if (inEmissiveActive.get())
        {
            inEmissiveR.setUiAttribs({ "greyout": false });
            inEmissiveG.setUiAttribs({ "greyout": false });
            inEmissiveB.setUiAttribs({ "greyout": false });
            inEmissiveColorIntensity.setUiAttribs({ "greyout": false });
        }
        else
        {
            inEmissiveTexture.setUiAttribs({ "greyout": true });
        }

        shader.removeUniform("texEmissive");
        shader.removeDefine("HAS_TEXTURE_EMISSIVE");
        emissiveTextureUniform = null;
    }
}

function updateEmissiveMaskTexture()
{
    if (inEmissiveMaskTexture.get())
    { // we have a emissive texture
        if (inEmissiveActive.get())
        {
            inEmissiveMaskIntensity.setUiAttribs({ "greyout": false });
        }

        if (!shader.hasDefine("HAS_TEXTURE_EMISSIVE_MASK"))
        {
            shader.define("HAS_TEXTURE_EMISSIVE_MASK");
            if (!emissiveMaskTextureUniform) emissiveMaskTextureUniform = new CGL.Uniform(shader, "t", "texMaskEmissive", 0);
            if (!emissiveMaskIntensityUniform) emissiveMaskIntensityUniform = new CGL.Uniform(shader, "f", "inEmissiveMaskIntensity", inEmissiveMaskIntensity);
        }
    }
    else
    {
        if (!inEmissiveActive.get())
        {
            inEmissiveMaskTexture.setUiAttribs({ "greyout": true });
        }
        inEmissiveMaskIntensity.setUiAttribs({ "greyout": true });
        shader.removeUniform("texMaskEmissive");
        shader.removeUniform("inEmissiveMaskIntensity");
        shader.removeDefine("HAS_TEXTURE_EMISSIVE_MASK");
        emissiveMaskTextureUniform = null;
        emissiveMaskIntensityUniform = null;
    }
}

let updateEnvTextureLater = false;
function updateEnvTexture()
{
    shader.toggleDefine("HAS_TEXTURE_ENV", inEnvTexture.get());

    inEnvMapIntensity.setUiAttribs({ "greyout": !inEnvTexture.get() });

    if (inEnvTexture.get())
    {
        if (!envTextureUniform) envTextureUniform = new CGL.Uniform(shader, "t", "texEnv", 0);

        shader.toggleDefine("TEX_FORMAT_CUBEMAP", inEnvTexture.get().cubemap);

        if (inEnvTexture.get().cubemap)
        {
            shader.removeDefine("TEX_FORMAT_EQUIRECT");
            shader.removeDefine("ENVMAP_MATCAP");
            if (!inEnvMapIntensityUni)inEnvMapIntensityUni = new CGL.Uniform(shader, "f", "inEnvMapIntensity", inEnvMapIntensity);
            if (!inEnvMapWidthUni)inEnvMapWidthUni = new CGL.Uniform(shader, "f", "inEnvMapWidth", inEnvTexture.get().cubemap.width);
        }
        else
        {
            const isSquare = inEnvTexture.get().width === inEnvTexture.get().height;
            shader.toggleDefine("TEX_FORMAT_EQUIRECT", !isSquare);
            shader.toggleDefine("ENVMAP_MATCAP", isSquare);

            if (!inEnvMapIntensityUni)inEnvMapIntensityUni = new CGL.Uniform(shader, "f", "inEnvMapIntensity", inEnvMapIntensity);
            if (!inEnvMapWidthUni) inEnvMapWidthUni = new CGL.Uniform(shader, "f", "inEnvMapWidth", inEnvTexture.get().width);
        }
    }
    else
    {
        shader.removeUniform("inEnvMapIntensity");
        shader.removeUniform("inEnvMapWidth");
        shader.removeUniform("texEnv");
        shader.removeDefine("HAS_TEXTURE_ENV");
        shader.removeDefine("ENVMAP_MATCAP");
        envTextureUniform = null;
        inEnvMapIntensityUni = null;
    }

    updateEnvTextureLater = false;
}

function updateLuminanceMaskTexture()
{
    if (inLuminanceMaskTexture.get())
    {
        inLuminanceMaskIntensity.setUiAttribs({ "greyout": false });
        if (!luminanceTextureUniform)
        {
            shader.define("HAS_TEXTURE_LUMINANCE_MASK");
            luminanceTextureUniform = new CGL.Uniform(shader, "t", "texLuminance", 0);
            inLuminanceMaskIntensityUniform = new CGL.Uniform(shader, "f", "inLuminanceMaskIntensity", inLuminanceMaskIntensity);
        }
    }
    else
    {
        inLuminanceMaskIntensity.setUiAttribs({ "greyout": true });
        shader.removeDefine("HAS_TEXTURE_LUMINANCE_MASK");
        shader.removeUniform("inLuminanceMaskIntensity");
        shader.removeUniform("texLuminance");
        luminanceTextureUniform = null;
        inLuminanceMaskIntensityUniform = null;
    }
}

// TEX OPACITY

function updateDefines()
{
    shader.toggleDefine("ENV_BLEND_ADD", inEnvMapBlend.get() == "Add");
    shader.toggleDefine("ENV_BLEND_MUL", inEnvMapBlend.get() == "Multiply");
    shader.toggleDefine("ENV_BLEND_MIX", inEnvMapBlend.get() == "Mix");

    shader.toggleDefine("ALPHA_MASK_ALPHA", alphaMaskSource.get() == "A" || alphaMaskSource.get() == "Alpha");
    shader.toggleDefine("ALPHA_MASK_LUMI", alphaMaskSource.get() == "Luminance");
    shader.toggleDefine("ALPHA_MASK_R", alphaMaskSource.get() == "R");
    shader.toggleDefine("ALPHA_MASK_G", alphaMaskSource.get() == "G");
    shader.toggleDefine("ALPHA_MASK_B", alphaMaskSource.get() == "B");

    shader.toggleDefine("AO_CHAN_0", inAoChannel.get() == "1");
    shader.toggleDefine("AO_CHAN_1", inAoChannel.get() == "2");
}

function updateAlphaTexture()
{
    if (inAlphaTexture.get())
    {
        if (alphaTextureUniform !== null) return;
        shader.removeUniform("texAlpha");
        shader.define("HAS_TEXTURE_ALPHA");
        if (!alphaTextureUniform) alphaTextureUniform = new CGL.Uniform(shader, "t", "texAlpha", 0);

        alphaMaskSource.setUiAttribs({ "greyout": false });
        discardTransPxl.setUiAttribs({ "greyout": false });
    }
    else
    {
        shader.removeUniform("texAlpha");
        shader.removeDefine("HAS_TEXTURE_ALPHA");
        alphaTextureUniform = null;

        alphaMaskSource.setUiAttribs({ "greyout": true });
        discardTransPxl.setUiAttribs({ "greyout": true });
    }
    updateDefines();
}

discardTransPxl.onChange = function ()
{
    shader.toggleDefine("DISCARDTRANS", discardTransPxl.get());
};

inDiffuseTexture.onChange = updateDiffuseTexture;
inSpecularTexture.onChange = updateSpecularTexture;
inNormalTexture.onChange = updateNormalTexture;
inAoTexture.onChange = updateAoTexture;
inEmissiveTexture.onChange = updateEmissiveTexture;
inEmissiveMaskTexture.onChange = updateEmissiveMaskTexture;
inAlphaTexture.onChange = updateAlphaTexture;
inEnvTexture.onChange = () => { updateEnvTextureLater = true; };
inLuminanceMaskTexture.onChange = updateLuminanceMaskTexture;

const MAX_UNIFORM_FRAGMENTS = cgl.maxUniformsFrag;
const MAX_LIGHTS = MAX_UNIFORM_FRAGMENTS === 64 ? 6 : 16;

shader.define("MAX_LIGHTS", MAX_LIGHTS.toString());
shader.define("SPECULAR_PHONG");

inSpecularMode.onChange = function ()
{
    if (inSpecularMode.get() === "Phong")
    {
        shader.define("SPECULAR_PHONG");
        shader.removeDefine("SPECULAR_BLINN");
        shader.removeDefine("SPECULAR_GAUSS");
        shader.removeDefine("SPECULAR_SCHLICK");
    }
    else if (inSpecularMode.get() === "Blinn")
    {
        shader.define("SPECULAR_BLINN");
        shader.removeDefine("SPECULAR_PHONG");
        shader.removeDefine("SPECULAR_GAUSS");
        shader.removeDefine("SPECULAR_SCHLICK");
    }
    else if (inSpecularMode.get() === "Gauss")
    {
        shader.define("SPECULAR_GAUSS");
        shader.removeDefine("SPECULAR_BLINN");
        shader.removeDefine("SPECULAR_PHONG");
        shader.removeDefine("SPECULAR_SCHLICK");
    }
    else if (inSpecularMode.get() === "Schlick")
    {
        shader.define("SPECULAR_SCHLICK");
        shader.removeDefine("SPECULAR_BLINN");
        shader.removeDefine("SPECULAR_PHONG");
        shader.removeDefine("SPECULAR_GAUSS");
    }
};

inEnergyConservation.onChange = function ()
{
    shader.toggleDefine("CONSERVE_ENERGY", inEnergyConservation.get());
};

inToggleDoubleSided.onChange = function ()
{
    shader.toggleDefine("DOUBLE_SIDED", inToggleDoubleSided.get());
};

// * INIT UNIFORMS *

const uniMaterialProps = new CGL.Uniform(shader, "4f", "inMaterialProperties", inAlbedo, inRoughness, inShininess, inSpecularCoefficient);
const uniDiffuseColor = new CGL.Uniform(shader, "4f", "inDiffuseColor", inDiffuseR, inDiffuseG, inDiffuseB, inDiffuseA);
const uniTextureIntensities = new CGL.Uniform(shader, "4f", "inTextureIntensities", inNormalIntensity, inAoIntensity, inSpecularIntensity, inEmissiveIntensity);
const uniTextureRepeatOffset = new CGL.Uniform(shader, "4f", "inTextureRepeatOffset", inDiffuseRepeatX, inDiffuseRepeatY, inTextureOffsetX, inTextureOffsetY);

shader.uniformColorDiffuse = uniDiffuseColor;

const lightUniforms = [];
let oldCount = 0;

function createUniforms(lightsCount)
{
    for (let i = 0; i < lightUniforms.length; i += 1)
    {
        lightUniforms[i] = null;
    }

    for (let i = 0; i < lightsCount; i += 1)
    {
        lightUniforms[i] = null;
        if (!lightUniforms[i])
        {
            lightUniforms[i] = {
                "color": new CGL.Uniform(shader, "3f", "phongLight" + i + ".color", [1, 1, 1]),
                "position": new CGL.Uniform(shader, "3f", "phongLight" + i + ".position", [0, 11, 0]),
                "specular": new CGL.Uniform(shader, "3f", "phongLight" + i + ".specular", [1, 1, 1]),
                // intensity, attenuation, falloff, radius
                "lightProperties": new CGL.Uniform(shader, "4f", "phongLight" + i + ".lightProperties", [1, 1, 1, 1]),

                "conePointAt": new CGL.Uniform(shader, "3f", "phongLight" + i + ".conePointAt", vec3.create()),
                "spotProperties": new CGL.Uniform(shader, "3f", "phongLight" + i + ".spotProperties", [0, 0, 0, 0]),
                "castLight": new CGL.Uniform(shader, "i", "phongLight" + i + ".castLight", 1),

            };
        }
    }
}

function setDefaultUniform(light)
{
    defaultUniform.position.setValue(light.position);
    defaultUniform.color.setValue(light.color);
    defaultUniform.specular.setValue(light.specular);
    defaultUniform.lightProperties.setValue([
        light.intensity,
        light.attenuation,
        light.falloff,
        light.radius,
    ]);

    defaultUniform.conePointAt.setValue(light.conePointAt);
    defaultUniform.spotProperties.setValue([
        light.cosConeAngle,
        light.cosConeAngleInner,
        light.spotExponent,
    ]);
}

function setUniforms(lightStack)
{
    for (let i = 0; i < lightStack.length; i += 1)
    {
        const light = lightStack[i];
        light.isUsed = true;

        lightUniforms[i].position.setValue(light.position);
        lightUniforms[i].color.setValue(light.color);
        lightUniforms[i].specular.setValue(light.specular);

        lightUniforms[i].lightProperties.setValue([
            light.intensity,
            light.attenuation,
            light.falloff,
            light.radius,
        ]);

        lightUniforms[i].conePointAt.setValue(light.conePointAt);
        lightUniforms[i].spotProperties.setValue([
            light.cosConeAngle,
            light.cosConeAngleInner,
            light.spotExponent,
        ]);

        lightUniforms[i].castLight.setValue(light.castLight);
    }
}

function compareLights(lightStack)
{
    if (lightStack.length !== oldCount)
    {
        createShader(lightStack);
        createUniforms(lightStack.length);
        oldCount = lightStack.length;
        setUniforms(lightStack);
        // recompileShader = false;
    }
    else
    {
        // if (recompileShader)
        // {
        //     createShader(lightStack);
        //     createUniforms(lightStack.length);
        //     recompileShader = false;
        // }
        setUniforms(lightStack);
    }
}

let defaultUniform = null;

function createDefaultUniform()
{
    defaultUniform = {
        "color": new CGL.Uniform(shader, "3f", "phongLight" + 0 + ".color", [1, 1, 1]),
        "specular": new CGL.Uniform(shader, "3f", "phongLight" + 0 + ".specular", [1, 1, 1]),
        "position": new CGL.Uniform(shader, "3f", "phongLight" + 0 + ".position", [0, 11, 0]),
        // intensity, attenuation, falloff, radius
        "lightProperties": new CGL.Uniform(shader, "4f", "phongLight" + 0 + ".lightProperties", [1, 1, 1, 1]),
        "conePointAt": new CGL.Uniform(shader, "3f", "phongLight" + 0 + ".conePointAt", vec3.create()),
        "spotProperties": new CGL.Uniform(shader, "3f", "phongLight" + 0 + ".spotProperties", [0, 0, 0, 0]),
        "castLight": new CGL.Uniform(shader, "i", "phongLight" + 0 + ".castLight", 1),
    };
}

const DEFAULT_LIGHTSTACK = [{
    "type": "point",
    "position": [5, 5, 5],
    "color": [1, 1, 1],
    "specular": [1, 1, 1],
    "intensity": 1,
    "attenuation": 0,
    "falloff": 0.5,
    "radius": 80,
    "castLight": 1,
}];

const iViewMatrix = mat4.create();

function updateLights()
{
    if (cgl.frameStore.lightStack)
    {
        if (cgl.frameStore.lightStack.length === 0)
        {
            op.setUiError("deflight", "Default light is enabled. Please add lights to your patch to make this warning disappear.", 1);
        }
        else op.setUiError("deflight", null);
    }

    if ((!cgl.frameStore.lightStack || !cgl.frameStore.lightStack.length))
    {
        // if no light in light stack, use default light & set count to -1
        // so when a new light gets added, the shader does recompile
        if (!defaultUniform)
        {
            createDefaultShader();
            createDefaultUniform();
        }

        mat4.invert(iViewMatrix, cgl.vMatrix);
        // set default light position to camera position
        DEFAULT_LIGHTSTACK[0].position = [iViewMatrix[12], iViewMatrix[13], iViewMatrix[14]];
        setDefaultUniform(DEFAULT_LIGHTSTACK[0]);

        oldCount = -1;
    }
    else
    {
        if (shader)
        {
            if (cgl.frameStore.lightStack)
            {
                if (cgl.frameStore.lightStack.length)
                {
                    defaultUniform = null;
                    compareLights(cgl.frameStore.lightStack);
                }
            }
        }
    }
}

const render = function ()
{
    if (!shader)
    {
        op.log("NO SHADER");
        return;
    }

    cgl.pushShader(shader);
    shader.popTextures();

    outTrigger.trigger();
    cgl.popShader();
};

op.preRender = function ()
{
    shader.bind();
    render();
};

/* transform for default light */
const inverseViewMat = mat4.create();
const vecTemp = vec3.create();
const camPos = vec3.create();

inTrigger.onTriggered = function ()
{
    if (!shader)
    {
        op.log("phong has no shader...");
        return;
    }

    if (updateEnvTextureLater)updateEnvTexture();

    cgl.pushShader(shader);

    shader.popTextures();

    if (inDiffuseTexture.get()) shader.pushTexture(diffuseTextureUniform, inDiffuseTexture.get());
    if (inSpecularTexture.get()) shader.pushTexture(specularTextureUniform, inSpecularTexture.get());
    if (inNormalTexture.get()) shader.pushTexture(normalTextureUniform, inNormalTexture.get());
    if (inAoTexture.get()) shader.pushTexture(aoTextureUniform, inAoTexture.get());
    if (inEmissiveTexture.get()) shader.pushTexture(emissiveTextureUniform, inEmissiveTexture.get());
    if (inEmissiveMaskTexture.get()) shader.pushTexture(emissiveMaskTextureUniform, inEmissiveMaskTexture.get());
    if (inAlphaTexture.get()) shader.pushTexture(alphaTextureUniform, inAlphaTexture.get());
    if (inEnvTexture.get())
    {
        if (inEnvTexture.get().cubemap) shader.pushTexture(envTextureUniform, inEnvTexture.get().cubemap, cgl.gl.TEXTURE_CUBE_MAP);
        else shader.pushTexture(envTextureUniform, inEnvTexture.get());
    }

    if (inLuminanceMaskTexture.get())
    {
        shader.pushTexture(luminanceTextureUniform, inLuminanceMaskTexture.get());
    }

    updateLights();

    outTrigger.trigger();

    cgl.popShader();
};

if (cgl.glVersion == 1)
{
    if (!cgl.enableExtension("EXT_shader_texture_lod"))
    {
        op.log("no EXT_shader_texture_lod texture extension");
        // throw "no EXT_shader_texture_lod texture extension";
    }
    else
    {
        shader.enableExtension("GL_EXT_shader_texture_lod");
        cgl.enableExtension("OES_texture_float");
        cgl.enableExtension("OES_texture_float_linear");
        cgl.enableExtension("OES_texture_half_float");
        cgl.enableExtension("OES_texture_half_float_linear");

        shader.enableExtension("GL_OES_standard_derivatives");
        shader.enableExtension("GL_OES_texture_float");
        shader.enableExtension("GL_OES_texture_float_linear");
        shader.enableExtension("GL_OES_texture_half_float");
        shader.enableExtension("GL_OES_texture_half_float_linear");
    }
}

updateDiffuseTexture();
updateSpecularTexture();
updateNormalTexture();
updateAoTexture();
updateAlphaTexture();
updateEmissiveTexture();
updateEmissiveMaskTexture();
updateEnvTexture();
updateLuminanceMaskTexture();


};

Ops.Gl.Phong.PhongMaterial_v6.prototype = new CABLES.Op();
CABLES.OPS["0d83ed06-cdbe-4fe0-87bb-0ccece7fb6e1"]={f:Ops.Gl.Phong.PhongMaterial_v6,objName:"Ops.Gl.Phong.PhongMaterial_v6"};




// **************************************************************
// 
// Ops.Gl.GLTF.GltfGeometry
// 
// **************************************************************

Ops.Gl.GLTF.GltfGeometry = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    exec = op.inTrigger("Update"),
    inNodeName = op.inString("Name", "default"),
    inSubmesh = op.inInt("Submesh", 0),
    next = op.outTrigger("Next"),
    outGeom = op.outObject("Geometry", null, "geometry"),
    outFound = op.outBoolNum("Found");

const cgl = op.patch.cgl;
let mesh = null;
let currentSceneLoaded = null;

inSubmesh.onChange =
inNodeName.onChange = function ()
{
    outGeom.set(null);
    mesh = null;
    outFound.set(false);
    op.setUiAttrib({ "extendTitle": inNodeName.get() + "." + inSubmesh.get() });
};

exec.onTriggered = () =>
{
    if (!cgl.frameStore.currentScene) return;
    if (currentSceneLoaded != cgl.frameStore.currentScene.loaded) mesh = null;

    if (!mesh)
    {
        if (!cgl.frameStore || !cgl.frameStore.currentScene || !cgl.frameStore.currentScene.nodes || !cgl.frameStore.currentScene.loaded)
        {
            return;
        }
        outFound.set(false);
        outGeom.set(null);
        const name = inNodeName.get();

        currentSceneLoaded = cgl.frameStore.currentScene.loaded;

        for (let i = 0; i < cgl.frameStore.currentScene.meshes.length; i++)
        {
            if (cgl.frameStore.currentScene.meshes[i].name == name)
            {
                mesh = cgl.frameStore.currentScene.meshes[i];

                const idx = Math.abs(inSubmesh.get());
                if (mesh.meshes[idx] && mesh.meshes[idx].geom)
                {
                    outFound.set(true);
                    outGeom.set(mesh.meshes[idx].geom);
                }
            }
        }
    }

    next.trigger();
};


};

Ops.Gl.GLTF.GltfGeometry.prototype = new CABLES.Op();
CABLES.OPS["2e59da07-455a-457c-99d8-1c23a1ddeea2"]={f:Ops.Gl.GLTF.GltfGeometry,objName:"Ops.Gl.GLTF.GltfGeometry"};




// **************************************************************
// 
// Ops.Graphics.Geometry.DivideGeometry
// 
// **************************************************************

Ops.Graphics.Geometry.DivideGeometry = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
let geometry = op.inObject("Geometry");
let outGeom = op.outObject("Result");

geometry.onChange = update;

function update()
{
    outGeom.set(null);
    if (geometry.get())
    {
        let geom = geometry.get();
        let newGeom = new CGL.Geometry(op.name);

        let newVerts = [];
        let newFaces = [];
        let newNormals = [];
        let newTexCoords = [];

        for (let i = 0; i < geom.verticesIndices.length; i += 3)
        {
            newFaces.push(newVerts.length / 3);
            newVerts.push(geom.vertices[geom.verticesIndices[i + 0] * 3 + 0]);
            newVerts.push(geom.vertices[geom.verticesIndices[i + 0] * 3 + 1]);
            newVerts.push(geom.vertices[geom.verticesIndices[i + 0] * 3 + 2]);
            newNormals.push(geom.vertexNormals[geom.verticesIndices[i + 0] * 3 + 0]);
            newNormals.push(geom.vertexNormals[geom.verticesIndices[i + 0] * 3 + 1]);
            newNormals.push(geom.vertexNormals[geom.verticesIndices[i + 0] * 3 + 2]);
            newTexCoords.push(geom.texCoords[geom.verticesIndices[i + 0] * 2 + 0]);
            newTexCoords.push(geom.texCoords[geom.verticesIndices[i + 0] * 2 + 1]);

            newFaces.push(newVerts.length / 3);
            newVerts.push(geom.vertices[geom.verticesIndices[i + 1] * 3 + 0]);
            newVerts.push(geom.vertices[geom.verticesIndices[i + 1] * 3 + 1]);
            newVerts.push(geom.vertices[geom.verticesIndices[i + 1] * 3 + 2]);
            newNormals.push(geom.vertexNormals[geom.verticesIndices[i + 1] * 3 + 0]);
            newNormals.push(geom.vertexNormals[geom.verticesIndices[i + 1] * 3 + 1]);
            newNormals.push(geom.vertexNormals[geom.verticesIndices[i + 1] * 3 + 2]);
            newTexCoords.push(geom.texCoords[geom.verticesIndices[i + 1] * 2 + 0]);
            newTexCoords.push(geom.texCoords[geom.verticesIndices[i + 1] * 2 + 1]);

            newFaces.push(newVerts.length / 3);
            newVerts.push(geom.vertices[geom.verticesIndices[i + 2] * 3 + 0]);
            newVerts.push(geom.vertices[geom.verticesIndices[i + 2] * 3 + 1]);
            newVerts.push(geom.vertices[geom.verticesIndices[i + 2] * 3 + 2]);
            newNormals.push(geom.vertexNormals[geom.verticesIndices[i + 2] * 3 + 0]);
            newNormals.push(geom.vertexNormals[geom.verticesIndices[i + 2] * 3 + 1]);
            newNormals.push(geom.vertexNormals[geom.verticesIndices[i + 2] * 3 + 2]);
            newTexCoords.push(geom.texCoords[geom.verticesIndices[i + 2] * 2 + 0]);
            newTexCoords.push(geom.texCoords[geom.verticesIndices[i + 2] * 2 + 1]);
        }

        newGeom.vertices = newVerts;
        newGeom.vertexNormals = newNormals;
        newGeom.verticesIndices = newFaces;
        newGeom.setTexCoords(newTexCoords);

        outGeom.set(newGeom);
    }
}


};

Ops.Graphics.Geometry.DivideGeometry.prototype = new CABLES.Op();
CABLES.OPS["ab0c768e-e684-47ba-b11f-f95d86532df2"]={f:Ops.Graphics.Geometry.DivideGeometry,objName:"Ops.Graphics.Geometry.DivideGeometry"};




// **************************************************************
// 
// Ops.Gl.ShaderEffects.ExplodeDividedMesh_v2
// 
// **************************************************************

Ops.Gl.ShaderEffects.ExplodeDividedMesh_v2 = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={"explode_divided_mesh_vert":"\nfloat MOD_rand(vec2 co)\n{\n    return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);\n}\n\nvec4 MOD_deform(vec4 pos,vec3 normal,float index)\n{\n    index=floor(index/3.0);\n\n    vec4 p=abs(pos);\n    p.x+=MOD_x+0.01;\n    p.y+=MOD_y+0.01;\n    p.z+=MOD_z+0.01;\n\n    vec4 pp=vec4(normal*(MOD_rand(vec2(index)) * MOD_dist-MOD_dist/2.0),1.0) * p;\n\n    #ifdef MOD_ABSOLUTE\n        pp=abs(pp);\n    #endif\n\n    pp.x*=MOD_mulx;\n    pp.y*=MOD_muly;\n    pp.z*=MOD_mulz;\n\n\n    float MOD_falloff=0.2;\n    float distMul=distance(vec3(MOD_posx,MOD_posy,MOD_posz),pos.xyz);\n    distMul=1.0-smoothstep(MOD_falloff*MOD_size,MOD_size,distMul);\n\n\n\n    pos.xyz += distMul*pp.xyz;\n\n    return pos;\n}\n",};
const
    render = op.inTrigger("Render"),
    inDistance = op.inValue("Distance", 1),
    inSize = op.inValue("Size", 1),

    inAbsolute = op.inValueBool("Absolute", false),
    x = op.inValue("add x"),
    y = op.inValue("add y"),
    z = op.inValue("add z"),

    mulx = op.inValue("mul x", 1),
    muly = op.inValue("mul y", 1),
    mulz = op.inValue("mul z", 1),

    posx = op.inValue("x"),
    posy = op.inValue("y"),
    posz = op.inValue("z"),

    next = op.outTrigger("Next");

op.setPortGroup("Add", [x, z, y]);
op.setPortGroup("Multiply", [mulx, mulz, muly]);
op.setPortGroup("Position", [posx, posz, posy]);

const cgl = op.patch.cgl;
const srcHeadVert = attachments.explode_divided_mesh_vert;

const srcBodyVert = ""
    .endl() + "pos=MOD_deform(pos,attrVertNormal,attrVertIndex);"
    .endl();

inAbsolute.onChange = function ()
{
    mod.toggleDefine("MOD_ABSOLUTE", inAbsolute.get());
};

const mod = new CGL.ShaderModifier(cgl, op.name, { "opId": op.id });
mod.addModule({
    "title": op.objName,
    "name": "MODULE_VERTEX_POSITION",
    "srcHeadVert": srcHeadVert,
    "srcBodyVert": srcBodyVert
});

mod.addUniform("f", "MOD_dist", inDistance);

mod.addUniform("f", "MOD_x", x);
mod.addUniform("f", "MOD_y", y);
mod.addUniform("f", "MOD_z", z);

mod.addUniform("f", "MOD_mulx", mulx);
mod.addUniform("f", "MOD_muly", muly);
mod.addUniform("f", "MOD_mulz", mulz);

mod.addUniform("f", "MOD_posx", posx);
mod.addUniform("f", "MOD_posy", posy);
mod.addUniform("f", "MOD_posz", posz);

mod.addUniform("f", "MOD_size", inSize);

render.onTriggered = function ()
{
    if (op.isCurrentUiOp())
        gui.setTransformGizmo(
            {
                "posX": posx,
                "posY": posy,
                "posZ": posz
            });

    mod.bind();
    next.trigger();
    mod.unbind();
};















};

Ops.Gl.ShaderEffects.ExplodeDividedMesh_v2.prototype = new CABLES.Op();
CABLES.OPS["a12f2aab-0cde-44ce-923e-f78a605c783c"]={f:Ops.Gl.ShaderEffects.ExplodeDividedMesh_v2,objName:"Ops.Gl.ShaderEffects.ExplodeDividedMesh_v2"};




// **************************************************************
// 
// Ops.Gl.RenderGeometry_v2
// 
// **************************************************************

Ops.Gl.RenderGeometry_v2 = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    render = op.inTrigger("render"),
    geometry = op.inObject("Geometry", null, "geometry"),
    inActive = op.inBool("Render Mesh", true),

    inVertNums = op.inBool("Add Vertex Numbers", true),
    trigger = op.outTrigger("trigger");

op.toWorkPortsNeedToBeLinked(geometry, render);

geometry.ignoreValueSerialize = true;

let mesh = null;
let needsUpdate = true;

geometry.onLinkChanged =
inVertNums.onChange =
    geometry.onChange = () => { needsUpdate = true; };

render.onTriggered = function ()
{
    if (needsUpdate) update();
    if (mesh && inActive.get()) mesh.render(op.patch.cgl.getShader());
    trigger.trigger();
};

function update()
{
    needsUpdate = false;
    const geom = geometry.get();
    if (geom && geom.isGeometry)
    {
        if (mesh)
        {
            mesh.dispose();
            mesh = null;
        }
        if (!mesh)
        {
            mesh = new CGL.Mesh(op.patch.cgl, geom);
            mesh.addVertexNumbers = inVertNums.get();
            mesh.setGeom(geom);
        }
    }
    else
    {
        mesh = null;
    }
}


};

Ops.Gl.RenderGeometry_v2.prototype = new CABLES.Op();
CABLES.OPS["0a9bdb39-8250-460e-8d99-50fe6825d956"]={f:Ops.Gl.RenderGeometry_v2,objName:"Ops.Gl.RenderGeometry_v2"};




// **************************************************************
// 
// Ops.Gl.Matrix.TransformView
// 
// **************************************************************

Ops.Gl.Matrix.TransformView = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    render = op.inTrigger("render"),
    posX = op.inValueFloat("posX"),
    posY = op.inValueFloat("posY"),
    posZ = op.inValueFloat("posZ"),
    scale = op.inValueFloat("scale"),
    rotX = op.inValueFloat("rotX"),
    rotY = op.inValueFloat("rotY"),
    rotZ = op.inValueFloat("rotZ"),
    trigger = op.outTrigger("trigger");

op.setPortGroup("Position", [posX, posY, posZ]);
op.setPortGroup("Scale", [scale]);
op.setPortGroup("Rotation", [rotX, rotZ, rotY]);

const vPos = vec3.create();
const vScale = vec3.create();
const transMatrix = mat4.create();
mat4.identity(transMatrix);

let doScale = false;
let doTranslate = false;

let translationChanged = true;
let didScaleChanged = true;
let didRotChanged = true;

render.onTriggered = function ()
{
    const cg = op.patch.cgl;

    let updateMatrix = false;
    if (translationChanged)
    {
        updateTranslation();
        updateMatrix = true;
    }
    if (didScaleChanged)
    {
        updateScale();
        updateMatrix = true;
    }
    if (didRotChanged)
    {
        updateMatrix = true;
    }
    if (updateMatrix)doUpdateMatrix();

    cg.pushViewMatrix();
    mat4.multiply(cg.vMatrix, cg.vMatrix, transMatrix);

    trigger.trigger();
    cg.popViewMatrix();

    if (op.isCurrentUiOp())
        gui.setTransformGizmo(
            {
                "posX": posX,
                "posY": posY,
                "posZ": posZ,
            });
};

op.transform3d = function ()
{
    return {
        "pos": [posX, posY, posZ]
    };
};

function doUpdateMatrix()
{
    mat4.identity(transMatrix);
    if (doTranslate)mat4.translate(transMatrix, transMatrix, vPos);

    if (rotX.get() !== 0)mat4.rotateX(transMatrix, transMatrix, rotX.get() * CGL.DEG2RAD);
    if (rotY.get() !== 0)mat4.rotateY(transMatrix, transMatrix, rotY.get() * CGL.DEG2RAD);
    if (rotZ.get() !== 0)mat4.rotateZ(transMatrix, transMatrix, rotZ.get() * CGL.DEG2RAD);

    if (doScale)mat4.scale(transMatrix, transMatrix, vScale);
    rotChanged = false;
}

function updateTranslation()
{
    doTranslate = false;
    if (posX.get() !== 0.0 || posY.get() !== 0.0 || posZ.get() !== 0.0) doTranslate = true;
    vec3.set(vPos, posX.get(), posY.get(), posZ.get());
    translationChanged = false;
}

function updateScale()
{
    doScale = false;
    if (scale.get() !== 0.0)doScale = true;
    vec3.set(vScale, scale.get(), scale.get(), scale.get());
    scaleChanged = false;
}

function translateChanged()
{
    translationChanged = true;
}

function scaleChanged()
{
    didScaleChanged = true;
}

function rotChanged()
{
    didRotChanged = true;
}

rotX.onChange =
rotY.onChange =
rotZ.onChange = rotChanged;

scale.onChange = scaleChanged;

posX.onChange =
posY.onChange =
posZ.onChange = translateChanged;

rotX.set(0.0);
rotY.set(0.0);
rotZ.set(0.0);

scale.set(1.0);

posX.set(0.0);
posY.set(0.0);
posZ.set(0.0);

doUpdateMatrix();


};

Ops.Gl.Matrix.TransformView.prototype = new CABLES.Op();
CABLES.OPS["0b3e04f7-323e-4ac8-8a22-a21e2f36e0e9"]={f:Ops.Gl.Matrix.TransformView,objName:"Ops.Gl.Matrix.TransformView"};




// **************************************************************
// 
// Ops.Trigger.TriggerOnce
// 
// **************************************************************

Ops.Trigger.TriggerOnce = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    exe = op.inTriggerButton("Exec"),
    reset = op.inTriggerButton("Reset"),
    next = op.outTrigger("Next"),
    outTriggered = op.outBoolNum("Was Triggered");

let triggered = false;

op.toWorkPortsNeedToBeLinked(exe);

reset.onTriggered = function ()
{
    triggered = false;
    outTriggered.set(triggered);
};

exe.onTriggered = function ()
{
    if (triggered) return;

    triggered = true;
    next.trigger();
    outTriggered.set(triggered);
};


};

Ops.Trigger.TriggerOnce.prototype = new CABLES.Op();
CABLES.OPS["cf3544e4-e392-432b-89fd-fcfb5c974388"]={f:Ops.Trigger.TriggerOnce,objName:"Ops.Trigger.TriggerOnce"};




// **************************************************************
// 
// Ops.Gl.GLTF.GltfSetMaterial
// 
// **************************************************************

Ops.Gl.GLTF.GltfSetMaterial = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    inShader = op.inObject("Shader", null, "shader"),
    inName = op.inString("Material Name", "none"),
    outMat = op.outObject("Material");

inName.onChange =
inShader.onChange = function ()
{
    op.setUiAttrib({ "extendTitle": inName.get() });
    outMat.setRef(inShader.get() || op.patch.cgl.getDefaultShader());
};


};

Ops.Gl.GLTF.GltfSetMaterial.prototype = new CABLES.Op();
CABLES.OPS["baf968ea-e4df-4fca-9cda-e6ddd38a4200"]={f:Ops.Gl.GLTF.GltfSetMaterial,objName:"Ops.Gl.GLTF.GltfSetMaterial"};




// **************************************************************
// 
// Ops.Gl.Meshes.Pyramid_v2
// 
// **************************************************************

Ops.Gl.Meshes.Pyramid_v2 = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    render = op.inTrigger("Render"),
    sizeW = op.inValue("Width", 1),
    sizeL = op.inValue("Length", 1),
    sizeH = op.inValue("Height", 2),
    inSmooth = op.inValueBool("Smooth", false),
    inDraw = op.inValueBool("Draw", true),
    trigger = op.outTrigger("trigger"),
    geomOut = op.outObject("geometry");

const cgl = op.patch.cgl;
let geom = null;
let mesh = null;

sizeW.onChange =
    sizeH.onChange =
    sizeL.onChange =
    inSmooth.onChange = () => { mesh = null; };

render.onTriggered = function ()
{
    if (!mesh)create();
    if (inDraw.get())mesh.render(cgl.getShader());
    trigger.trigger();
};

function create()
{
    if (!geom)geom = new CGL.Geometry(op.name);
    let w = sizeW.get();
    let h = sizeH.get();
    let l = sizeL.get();

    geom.vertices = [
        // -w,-l,0,
        // w,-l,0,
        // w,l,0,
        // -w,l,0,
        // 0,0,h,
        -w, 0, -l,
        w, 0, -l,
        w, 0, l,
        -w, 0, l,
        0, h, 0
    ];

    geom.vertexNormals = [
        0.0, 0.0, 1.0,
        0.0, 0.0, 1.0,
        0.0, 0.0, 1.0,
        0.0, 0.0, 1.0,
        0.0, 0.0, 1.0
    ];

    geom.texCoords = [
        0.5, 0.0,
        1.0, 1.0,
        0.0, 1.0,
        0.0, 1.0,
        0.0, 1.0,
    ];

    geom.verticesIndices = [
        0, 1, 2,
        0, 2, 3, // bottom

        4, 1, 0,
        4, 3, 2,
        0, 3, 4,
        4, 2, 1
    ];

    if (!inSmooth.get())geom.unIndex();
    geom.calculateNormals({ "forceZUp": false });

    mesh = new CGL.Mesh(cgl, geom);
    geomOut.set(null);
    geomOut.set(geom);
}


};

Ops.Gl.Meshes.Pyramid_v2.prototype = new CABLES.Op();
CABLES.OPS["f5443b2c-cd07-4361-8b7b-99ddf83e62ec"]={f:Ops.Gl.Meshes.Pyramid_v2,objName:"Ops.Gl.Meshes.Pyramid_v2"};




// **************************************************************
// 
// Ops.Gl.MeshInstancer_v4
// 
// **************************************************************

Ops.Gl.MeshInstancer_v4 = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={"billboard_vert":"\n#ifdef BILLBOARDING\n\n    modelViewMatrix[0][0] = 1.0;\n    modelViewMatrix[0][1] = 0.0;\n    modelViewMatrix[0][2] = 0.0;\n\n    #ifndef BILLBOARDING_CYLINDRIC\n        modelViewMatrix[1][0] = 0.0;\n        modelViewMatrix[1][1] = 1.0;\n        modelViewMatrix[1][2] = 0.0;\n    #endif\n\n    modelViewMatrix[2][0] = 0.0;\n    modelViewMatrix[2][1] = 0.0;\n    modelViewMatrix[2][2] = 1.0;\n\n#endif","instancer_body_frag":"#define INSTANCING\n#ifdef COLORIZE_INSTANCES\n    #ifdef BLEND_MODE_MULTIPLY\n        col.rgb *= frag_instColor.rgb;\n        col.a *= frag_instColor.a;\n    #endif\n\n    #ifdef BLEND_MODE_ADD\n        col.rgb += frag_instColor.rgb;\n        col.a += frag_instColor.a;\n    #endif\n\n    #ifdef BLEND_MODE_NONE\n        col.rgb = frag_instColor.rgb;\n        col.a = frag_instColor.a;\n    #endif\n#endif\n","instancer_body_vert":"\n\n#ifdef HAS_TEXCOORDS\ntexCoord=(texCoord*instTexCoords.zw)+instTexCoords.xy;\n#endif\n\nmMatrix*=instMat;\npos.xyz*=MOD_scale;\n\n#ifdef HAS_COLORS\nfrag_instColor=instColor;\n#endif\n#ifndef HAS_COLORS\nfrag_instColor=vec4(1.0);\n#endif\n\n\nfrag_instIndex=instanceIndex;\n\n","instancer_head_frag":"IN vec4 frag_instColor;\n\n#ifdef WEBGL2\n    flat IN float frag_instIndex;\n#endif\n#ifdef WEBGL1\n    IN float frag_instIndex;\n#endif\n","instancer_head_vert":"\nIN vec4 instColor;\nIN mat4 instMat;\nIN vec4 instTexCoords;\nIN float instanceIndex;\nOUT mat4 instModelMat;\nOUT vec4 frag_instColor;\n\n#ifdef WEBGL2\n    flat OUT float frag_instIndex;\n#endif\n#ifdef WEBGL1\n    OUT float frag_instIndex;\n#endif\n\n\n\n#define INSTANCING\n\n",};
const
    exe = op.inTrigger("exe"),
    geom = op.inObject("geom", null, "geometry"),
    inScale = op.inValue("Scale", 1),
    doLimit = op.inValueBool("Limit Instances", false),
    inLimit = op.inValueInt("Limit", 100),
    inTranslates = op.inArray("positions", 3),
    inScales = op.inArray("Scale Array", 3),
    inRot = op.inArray("Rotations", 3),
    inRotMeth = op.inSwitch("Rotation Type", ["Euler", "Quaternions", "Normals"], "Euler"),

    inBillboarding = op.inSwitch("Billboarding", ["Off", "Spherical", "Cylindrical"], "Off"),

    inBlendMode = op.inSwitch("Material blend mode", ["Multiply", "Add", "Normal"], "Multiply"),
    inColor = op.inArray("Colors", 4),
    inTexCoords = op.inArray("TexCoords", 4),
    outTrigger = op.outTrigger("Trigger Out"),
    outNum = op.outNumber("Num");

op.setPortGroup("Limit Number of Instances", [inLimit, doLimit]);
op.setPortGroup("Parameters", [inScales, inRot, inTranslates, inRotMeth]);
op.toWorkPortsNeedToBeLinked(geom);
op.toWorkPortsNeedToBeLinked(exe);

geom.ignoreValueSerialize = true;

const cgl = op.patch.cgl;
const m = mat4.create();
let
    matrixArray = new Float32Array(1),
    instColorArray = new Float32Array(1),
    instTexcoordArray = new Float32Array(1),
    mesh = null,
    recalc = true,
    num = 0,
    arrayChangedColor = true,
    arrayChangedTexcoords = true,
    arrayChangedTrans = true;

const mod = new CGL.ShaderModifier(cgl, op.name, { "opId": op.id });
mod.addModule({
    "name": "MODULE_VERTEX_POSITION",
    "title": op.name,
    "priority": -2,
    "srcHeadVert": attachments.instancer_head_vert,
    "srcBodyVert": attachments.instancer_body_vert
});

mod.addModule({
    "name": "MODULE_VERTEX_MODELVIEW",
    "title": op.name + "_billboard",
    "srcBodyVert": attachments.billboard_vert
});

mod.addModule({
    "name": "MODULE_COLOR",
    "priority": -2,
    "title": op.name,
    "srcHeadFrag": attachments.instancer_head_frag,
    "srcBodyFrag": attachments.instancer_body_frag,
});

mod.addUniformVert("f", "MOD_scale", inScale);

let needsUpdateDefines = true;

inBlendMode.onChange = () => { needsUpdateDefines = true; };

doLimit.onChange = updateLimit;
exe.onTriggered = doRender;
exe.onLinkChanged = function ()
{
    if (!exe.isLinked()) removeModule();
};

updateLimit();

inRot.onChange =
inScales.onChange =
inTranslates.onChange =
inRotMeth.onChange =
    function ()
    {
        arrayChangedTrans = true;
        recalc = true;
    };

inBillboarding.onChange =
inTexCoords.onChange = function ()
{
    arrayChangedTexcoords = true;
    recalc = true;
    needsUpdateDefines = true;
};

inColor.onChange = function ()
{
    arrayChangedColor = true;
    recalc = true;
    needsUpdateDefines = true;
};

function reset()
{
    arrayChangedColor = true,
    arrayChangedTrans = true;
    recalc = true;
}

function updateDefines()
{
    mod.toggleDefine("BILLBOARDING", inBillboarding.get() != "Off");
    mod.toggleDefine("BILLBOARDING_CYLINDRIC", inBillboarding.get() == "Cylindrical");

    mod.toggleDefine("COLORIZE_INSTANCES", inColor.get());
    mod.toggleDefine("TEXCOORDS_INSTANCES", inTexCoords.get());
    mod.toggleDefine("BLEND_MODE_MULTIPLY", inBlendMode.get() === "Multiply");
    mod.toggleDefine("BLEND_MODE_ADD", inBlendMode.get() === "Add");
    mod.toggleDefine("BLEND_MODE_NONE", inBlendMode.get() === "Normal");
    needsUpdateDefines = false;
}

geom.onChange = function ()
{
    if (mesh)mesh.dispose();
    if (!geom.get())
    {
        mesh = null;
        return;
    }

    mesh = new CGL.Mesh(cgl, geom.get());
    reset();
};

function removeModule()
{

}

function setupArray()
{
    if (!mesh) return;

    let transforms = inTranslates.get();
    if (!transforms) transforms = [0, 0, 0];

    num = Math.floor(transforms.length / 3);

    if (needsUpdateDefines)updateDefines();

    const colArr = inColor.get();
    const tcArr = inTexCoords.get();
    const scales = inScales.get();
    const useQuats = inRotMeth.get() == "Quaternions";
    const useEuler = inRotMeth.get() == "Euler";
    const useNormals = inRotMeth.get() == "Normals";

    let stride = 3;
    if (useQuats)stride = 4;
    inRot.setUiAttribs({ "stride": stride });

    if (scales && scales.length != transforms.length) op.setUiError("lengthScales", "Scales array has wrong length");
    else op.setUiError("lengthScales", null);

    if (matrixArray.length != num * 16) matrixArray = new Float32Array(num * 16);
    if (instColorArray.length != num * 4)
    {
        arrayChangedColor = true;
        instColorArray = new Float32Array(num * 4);
    }
    if (instTexcoordArray.length != num * 4)
    {
        arrayChangedTexcoords = true;
        instTexcoordArray = new Float32Array(num * 4);
    }

    const rotArr = inRot.get();

    for (let i = 0; i < num; i++)
    {
        mat4.identity(m);

        mat4.translate(m, m, [
            transforms[i * 3],
            transforms[i * 3 + 1],
            transforms[i * 3 + 2]
        ]);

        if (rotArr)
        {
            if (useQuats)
            {
                const mq = mat4.create();
                const q = [rotArr[i * 4 + 0], rotArr[i * 4 + 1], rotArr[i * 4 + 2], rotArr[i * 4 + 3]];
                quat.normalize(q, q);
                mat4.fromQuat(mq, q);
                mat4.mul(m, m, mq);
            }
            else
            if (useNormals)
            {
                const n = [rotArr[i * 3 + 0], rotArr[i * 3 + 1], rotArr[i * 3 + 2]];
                const up = [1, 0, 0];
                const v = vec3.create();

                vec3.cross(v, up, n);
                vec3.normalize(v, v);

                const angle = Math.acos(vec3.dot(up, n));
                const q = quat.create();

                quat.setAxisAngle(q, v, angle);
                quat.normalize(q, q);

                const mq = mat4.create();

                mat4.fromQuat(mq, q);
                mat4.mul(m, m, mq);
            }
            if (useEuler)
            {
                mat4.rotateX(m, m, rotArr[i * 3 + 0] * CGL.DEG2RAD);
                mat4.rotateY(m, m, rotArr[i * 3 + 1] * CGL.DEG2RAD);
                mat4.rotateZ(m, m, rotArr[i * 3 + 2] * CGL.DEG2RAD);
            }
        }

        if (arrayChangedColor && colArr)
        {
            instColorArray[i * 4 + 0] = colArr[i * 4 + 0];
            instColorArray[i * 4 + 1] = colArr[i * 4 + 1];
            instColorArray[i * 4 + 2] = colArr[i * 4 + 2];
            instColorArray[i * 4 + 3] = colArr[i * 4 + 3];
        }

        if (arrayChangedTexcoords && tcArr)
        {
            instTexcoordArray[i * 4 + 0] = tcArr[i * 4 + 0];
            instTexcoordArray[i * 4 + 1] = tcArr[i * 4 + 1];
            instTexcoordArray[i * 4 + 2] = tcArr[i * 4 + 2];
            instTexcoordArray[i * 4 + 3] = tcArr[i * 4 + 3];
        }

        if (scales && scales.length > i) mat4.scale(m, m, [scales[i * 3], scales[i * 3 + 1], scales[i * 3 + 2]]);
        else mat4.scale(m, m, [1, 1, 1]);

        for (let a = 0; a < 16; a++) matrixArray[i * 16 + a] = m[a];
    }

    // mesh.numInstances = num;
    mesh.setNumInstances(num);

    if (arrayChangedTrans) mesh.addAttribute("instMat", matrixArray, 16);
    if (arrayChangedColor) mesh.addAttribute("instColor", instColorArray, 4, { "instanced": true });
    if (arrayChangedTexcoords) mesh.addAttribute("instTexCoords", instTexcoordArray, 4, { "instanced": true });

    mod.toggleDefine("HAS_TEXCOORDS", tcArr);
    mod.toggleDefine("HAS_COLORS", colArr);

    arrayChangedColor = false;
    recalc = false;
}

function updateLimit()
{
    inLimit.setUiAttribs({ "greyout": !doLimit.get() });
}

function doRender()
{
    if (!mesh) return;
    if (recalc) setupArray();

    mod.bind();

    if (doLimit.get()) mesh.setNumInstances(Math.min(num, inLimit.get()));
    else mesh.setNumInstances(num);

    outNum.set(mesh.numInstances);

    if (mesh.numInstances > 0) mesh.render(cgl.getShader());

    outTrigger.trigger();

    mod.unbind();
}


};

Ops.Gl.MeshInstancer_v4.prototype = new CABLES.Op();
CABLES.OPS["cb58f461-a0bd-4159-a3cb-5e396198b4e9"]={f:Ops.Gl.MeshInstancer_v4,objName:"Ops.Gl.MeshInstancer_v4"};




// **************************************************************
// 
// Ops.Gl.Meshes.TriangleSphere
// 
// **************************************************************

Ops.Gl.Meshes.TriangleSphere = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
// http://paulbourke.net/geometry/circlesphere/

// http://paulbourke.net/geometry/circlesphere/csource3.c
//! !!! http://paulbourke.net/geometry/circlesphere/csource2.c

const
    render = op.inTrigger("render"),
    next = op.outTrigger("next"),
    inIterations = op.inValue("Iterations", 4),
    geomOut = op.outObject("Geometry"),
    flat = op.inValueBool("Flat", false),
    inDraw = op.inValueBool("Draw", true);

const cgl = op.patch.cgl;
let verts = [];
let geom = null;
let mesh = null;
let needsUpdate = true;

flat.onChange =
inIterations.onChange = () =>
{
    needsUpdate = true;
};

render.onTriggered = function ()
{
    if (needsUpdate) generate();

    if (inDraw.get() && mesh) mesh.render(cgl.getShader());
    next.trigger();
};

function normalize(v)
{
    const len = Math.sqrt((v[0] * v[0]) + (v[1] * v[1]) + (v[2] * v[2]));
    v[0] /= len;
    v[1] /= len;
    v[2] /= len;
    return v;
}

function index(verts, geom)
{
    const num = verts.length / 3;
    const arr = [];
    const ind = [], tc = [];

    for (let i = 0; i < num; i++)
    {
        let found = false;

        for (let j = 0; j < arr.length; j += 3)
        {
            if (
                arr[j + 0] == verts[i * 3 + 0] &&
                arr[j + 1] == verts[i * 3 + 1] &&
                arr[j + 2] == verts[i * 3 + 2])
            {
                ind.push(j / 3);
                found = true;
                continue;
            }
        }

        if (!found)
        {
            arr.push(verts[i * 3 + 0]);
            arr.push(verts[i * 3 + 1]);
            arr.push(verts[i * 3 + 2]);
            ind.push(arr.length / 3 - 1);

            tc.push(verts[i * 3 + 0]);
            tc.push(verts[i * 3 + 1]);
        }
    }

    geom.verticesIndices = ind;
    geom.vertices = arr;
    geom.texCoords = tc;
}

function generate()
{
    let startTime = performance.now();
    let iterations = Math.max(1, Math.floor(inIterations.get()));
    iterations = Math.min(6, iterations);
    const f = [];
    let i, it;
    const p = [[0, 0, 1], [0, 0, -1], [-1, -1, 0], [1, -1, 0], [1, 1, 0], [-1, 1, 0]];

    let nt = 0, ntold;

    /* Create the level 0 object */
    const a = 1 / Math.sqrt(2.0);
    for (i = 0; i < 6; i++)
    {
        p[i][0] *= a;
        p[i][1] *= a;
    }

    for (i = 0; i < 8; i++)
    {
        f[i] = [[], [], []];
    }
    f[0][0] = p[0]; f[0][1] = p[3]; f[0][2] = p[4];
    f[1][0] = p[0]; f[1][1] = p[4]; f[1][2] = p[5];
    f[2][0] = p[0]; f[2][1] = p[5]; f[2][2] = p[2];
    f[3][0] = p[0]; f[3][1] = p[2]; f[3][2] = p[3];
    f[4][0] = p[1]; f[4][1] = p[4]; f[4][2] = p[3];
    f[5][0] = p[1]; f[5][1] = p[5]; f[5][2] = p[4];
    f[6][0] = p[1]; f[6][1] = p[2]; f[6][2] = p[5];
    f[7][0] = p[1]; f[7][1] = p[3]; f[7][2] = p[2];
    nt = 8;

    if (iterations > 1)
    {
        /* Bisect each edge and move to the surface of a unit sphere */
        for (it = 0; it < iterations; it++)
        {
            ntold = nt;
            for (i = 0; i < ntold; i++)
            {
                const pa = [], pb = [], pc = [];
                pa[0] = (f[i][0][0] + f[i][1][0]) / 2;
                pa[1] = (f[i][0][1] + f[i][1][1]) / 2;
                pa[2] = (f[i][0][2] + f[i][1][2]) / 2;
                pb[0] = (f[i][1][0] + f[i][2][0]) / 2;
                pb[1] = (f[i][1][1] + f[i][2][1]) / 2;
                pb[2] = (f[i][1][2] + f[i][2][2]) / 2;
                pc[0] = (f[i][2][0] + f[i][0][0]) / 2;
                pc[1] = (f[i][2][1] + f[i][0][1]) / 2;
                pc[2] = (f[i][2][2] + f[i][0][2]) / 2;

                normalize(pa);
                normalize(pb);
                normalize(pc);

                f.push([]);
                f[nt][0] = f[i][0]; f[nt][1] = pa; f[nt][2] = pc; nt++;
                f.push([]);
                f[nt][0] = pa; f[nt][1] = f[i][1]; f[nt][2] = pb; nt++;
                f.push([]);
                f[nt][0] = pb; f[nt][1] = f[i][2]; f[nt][2] = pc; nt++;

                f[i][0] = pa;
                f[i][1] = pb;
                f[i][2] = pc;
            }
        }
    }

    if (!geom)geom = new CGL.Geometry(op.name);
    geom.clear();

    verts = f.flat(Infinity);

    if (!flat.get()) index(verts, geom);
    else
    {
        geom.unIndex();
        const indices = [];
        for (i = 0; i < verts.length / 3; i++)indices.push(i);
        geom.vertices = verts;
        geom.verticesIndices = indices;
    }

    geom.calculateNormals({ "forceZUp": false });
    geom.calcTangentsBitangents();

    mesh = new CGL.Mesh(cgl, geom);

    geomOut.setRef(geom);
    needsUpdate = false;

    // console.log("trianglesphere took", performance.now() - startTime);
}


};

Ops.Gl.Meshes.TriangleSphere.prototype = new CABLES.Op();
CABLES.OPS["ad0e8831-9554-46b3-ac03-c5c166921eda"]={f:Ops.Gl.Meshes.TriangleSphere,objName:"Ops.Gl.Meshes.TriangleSphere"};




// **************************************************************
// 
// Ops.Graphics.Geometry.GeometryAttributes
// 
// **************************************************************

Ops.Graphics.Geometry.GeometryAttributes = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    geometry = op.inObject("Geometry"),
    outFaces = op.outArray("Faces", 3),
    outVertices = op.outArray("Vertices", 3),
    outNormals = op.outArray("Normals", 3),
    outTextcoords = op.outArray("TexCoords", 2),
    outVertexColors = op.outArray("Vertex Colors", 4),
    outTangents = op.outArray("Tangents", 3),
    outBiTangents = op.outArray("BiTangents", 3);

geometry.onChange = function ()
{
    let geom = geometry.get();
    if (!geom)
    {
        outVertices.setRef(null);
        outFaces.setRef(null);
        outTextcoords.setRef(null);
        outNormals.setRef(null);
        outTangents.setRef(null);
        outBiTangents.setRef(null);
        outVertexColors.setRef(null);

        return;
    }

    // convert float32array to array
    let verts = Array.prototype.slice.call(geom.vertices);

    outVertices.setRef(verts);
    outFaces.setRef(geom.verticesIndices);
    outTextcoords.setRef(geom.texCoords);
    outNormals.setRef(geom.vertexNormals);
    outTangents.setRef(geom.tangents);
    outBiTangents.setRef(geom.biTangents);
    outVertexColors.setRef(geom.vertexColors);
};


};

Ops.Graphics.Geometry.GeometryAttributes.prototype = new CABLES.Op();
CABLES.OPS["b215118b-de1f-4be9-8890-d07a2ecff010"]={f:Ops.Graphics.Geometry.GeometryAttributes,objName:"Ops.Graphics.Geometry.GeometryAttributes"};




// **************************************************************
// 
// Ops.Array.Array3
// 
// **************************************************************

Ops.Array.Array3 = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    inNum = op.inValueInt("Num Triplets", 100),
    inX = op.inValueFloat("X", 0),
    inY = op.inValueFloat("Y", 0),
    inZ = op.inValueFloat("Z", 0),
    outArr = op.outArray("Array", null, 3),
    outTotalPoints = op.outNumber("Total points"),
    outArrayLength = op.outNumber("Array length");

inNum.onChange =
    inX.onChange =
    inY.onChange =
    inZ.onChange = update;

let arr = [];
update();

function update()
{
    let num = Math.floor(inNum.get() * 3);

    if (num < 0)num = 0;
    if (arr.length != num) arr.length = num;

    const x = inX.get();
    const y = inY.get();
    const z = inZ.get();

    for (let i = 0; i < num; i += 3)
    {
        arr[i] = x;
        arr[i + 1] = y;
        arr[i + 2] = z;
    }

    outArr.setRef(arr);
    outTotalPoints.set(num / 3);
    outArrayLength.set(num);
}


};

Ops.Array.Array3.prototype = new CABLES.Op();
CABLES.OPS["2766606a-3ea0-4204-8613-b8950a124435"]={f:Ops.Array.Array3,objName:"Ops.Array.Array3"};




// **************************************************************
// 
// Ops.Array.ArrayLength_v2
// 
// **************************************************************

Ops.Array.ArrayLength_v2 = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    array = op.inArray("array"),
    outLength = op.outNumber("length");

outLength.ignoreValueSerialize = true;

function update()
{
    let l = 0;
    if (array.get()) l = array.get().length;
    outLength.set(l);
}

array.onChange = update;


};

Ops.Array.ArrayLength_v2.prototype = new CABLES.Op();
CABLES.OPS["6f665caa-96ed-45d8-8620-e34f0f8e062c"]={f:Ops.Array.ArrayLength_v2,objName:"Ops.Array.ArrayLength_v2"};




// **************************************************************
// 
// Ops.TimeLine.TimeLineTime
// 
// **************************************************************

Ops.TimeLine.TimeLineTime = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const theTime = op.outNumber("time");

op.onAnimFrame = function (time)
{
    theTime.set(time);
};


};

Ops.TimeLine.TimeLineTime.prototype = new CABLES.Op();
CABLES.OPS["3ab26f26-a12a-4c48-9411-20591a5f569d"]={f:Ops.TimeLine.TimeLineTime,objName:"Ops.TimeLine.TimeLineTime"};




// **************************************************************
// 
// Ops.Math.Multiply
// 
// **************************************************************

Ops.Math.Multiply = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    number1 = op.inValueFloat("number1", 1),
    number2 = op.inValueFloat("number2", 1),
    result = op.outNumber("result");

op.setUiAttribs({ "mathTitle": true });

number1.onChange = number2.onChange = update;
update();

function update()
{
    const n1 = number1.get();
    const n2 = number2.get();

    result.set(n1 * n2);
}


};

Ops.Math.Multiply.prototype = new CABLES.Op();
CABLES.OPS["1bbdae06-fbb2-489b-9bcc-36c9d65bd441"]={f:Ops.Math.Multiply,objName:"Ops.Math.Multiply"};




// **************************************************************
// 
// Ops.Gl.CubeMap.RenderToCubemap_v3
// 
// **************************************************************

Ops.Gl.CubeMap.RenderToCubemap_v3 = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    inTrigger = op.inTrigger("Render"),
    inSize = op.inDropDown("Size", [32, 64, 128, 256, 512, 1024, 2048], 512),
    inPixelFormat = op.inDropDown("Pixel Format", CGL.Texture.PIXELFORMATS, CGL.Texture.PFORMATSTR_RGBA8UB),
    msaa = op.inSwitch("MSAA", ["none", "2x", "4x", "8x"], "none"),
    outTrigger = op.outTrigger("Next"),
    outTex = op.outTexture("cubemap");

const cgl = op.patch.cgl;

let sizeChanged = true;
let fb = null;

inSize.onChange = () => { sizeChanged = true; };

inPixelFormat.onChange = createFbLater;

let emptyCubemap = null;
let recreateFb = true;

function createFbLater()
{
    recreateFb = true;
}

function createFb()
{
    if (fb)fb.delete();

    let ms = true;
    let msSamples = 4;

    if (msaa.get() == "none")
    {
        msSamples = 0;
        ms = false;
    }
    if (msaa.get() == "2x") msSamples = 2;
    if (msaa.get() == "4x") msSamples = 4;
    if (msaa.get() == "8x") msSamples = 8;

    fb = new CGL.CubemapFramebuffer(
        cgl,
        Number(inSize.get()),
        Number(inSize.get()),
        {
            "pixelFormat": inPixelFormat.get(),
            "multisampling": ms,
            "multisamplingSamples": msSamples

        });
}

inTrigger.onTriggered = function ()
{
    if (recreateFb)createFb();
    if (sizeChanged)
    {
        if (fb) fb.setSize(Number(inSize.get()), Number(inSize.get()));
        sizeChanged = false;
    }

    if (fb)
    {
        fb.renderStart();
        for (let i = 0; i < 6; i += 1)
        {
            fb.renderStartCubemapFace(i);
            outTrigger.trigger();
            fb.renderEndCubemapFace();
        }
        fb.renderEnd();
        if (!emptyCubemap)emptyCubemap = CGL.Texture.getEmptyCubemapTexture(cgl);
        outTex.set(emptyCubemap);
        outTex.set(fb.getTextureColor());
    }
    else outTrigger.trigger();
};


};

Ops.Gl.CubeMap.RenderToCubemap_v3.prototype = new CABLES.Op();
CABLES.OPS["b98e311d-530e-4d94-bd49-72c118307539"]={f:Ops.Gl.CubeMap.RenderToCubemap_v3,objName:"Ops.Gl.CubeMap.RenderToCubemap_v3"};




// **************************************************************
// 
// Ops.Math.Clamp
// 
// **************************************************************

Ops.Math.Clamp = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    val = op.inValueFloat("val", 0.5),
    min = op.inValueFloat("min", 0),
    max = op.inValueFloat("max", 1),
    ignore = op.inValueBool("ignore outside values"),
    result = op.outNumber("result");

val.onChange = min.onChange = max.onChange = clamp;

function clamp()
{
    if (ignore.get())
    {
        if (val.get() > max.get()) return;
        if (val.get() < min.get()) return;
    }
    result.set(Math.min(Math.max(val.get(), min.get()), max.get()));
}


};

Ops.Math.Clamp.prototype = new CABLES.Op();
CABLES.OPS["cda1a98e-5e16-40bd-9b18-a67e9eaad5a1"]={f:Ops.Math.Clamp,objName:"Ops.Math.Clamp"};




// **************************************************************
// 
// Ops.Gl.MainLoop_v2
// 
// **************************************************************

Ops.Gl.MainLoop_v2 = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    hdpi = op.inFloat("Max Pixel Density (DPR)", 2),
    fpsLimit = op.inValue("FPS Limit", 0),
    reduceFocusFPS = op.inValueBool("Reduce FPS unfocussed", false),
    clear = op.inValueBool("Transparent", false),
    active = op.inValueBool("Active", 1),
    trigger = op.outTrigger("trigger"),
    width = op.outNumber("width"),
    height = op.outNumber("height"),
    outPixel = op.outNumber("Pixel Density");

op.onAnimFrame = render;
hdpi.onChange = updateHdpi;

const cgl = op.patch.cgl;
let rframes = 0;
let rframeStart = 0;
let timeOutTest = null;
let addedListener = false;
if (!op.patch.cgl) op.uiAttr({ "error": "No webgl cgl context" });

const identTranslate = vec3.create();
vec3.set(identTranslate, 0, 0, 0);
const identTranslateView = vec3.create();
vec3.set(identTranslateView, 0, 0, -2);

let fsElement = null;
let winhasFocus = true;
let winVisible = true;

window.addEventListener("blur", () => { winhasFocus = false; });
window.addEventListener("focus", () => { winhasFocus = true; });
document.addEventListener("visibilitychange", () => { winVisible = !document.hidden; });

testMultiMainloop();

cgl.mainloopOp = this;

function updateHdpi()
{
    setPixelDensity();

    if (CABLES.UI)
    {
        if (hdpi.get() < 1)
            op.patch.cgl.canvas.style.imageRendering = "pixelated";
    }

    op.patch.cgl.updateSize();
    if (CABLES.UI) gui.setLayout();
}

active.onChange = function ()
{
    op.patch.removeOnAnimFrame(op);

    if (active.get())
    {
        op.setUiAttrib({ "extendTitle": "" });
        op.onAnimFrame = render;
        op.patch.addOnAnimFrame(op);
        op.log("adding again!");
    }
    else
    {
        op.setUiAttrib({ "extendTitle": "Inactive" });
    }
};

function getFpsLimit()
{
    if (reduceFocusFPS.get())
    {
        if (!winVisible) return 10;
        if (!winhasFocus) return 30;
    }

    return fpsLimit.get();
}

op.onDelete = function ()
{
    cgl.gl.clearColor(0, 0, 0.0, 0);
    cgl.gl.clear(cgl.gl.COLOR_BUFFER_BIT | cgl.gl.DEPTH_BUFFER_BIT);
};

function setPixelDensity()
{
    if (hdpi.get() != 0) op.patch.cgl.pixelDensity = Math.min(hdpi.get(), window.devicePixelRatio);
    else op.patch.cgl.pixelDensity = window.devicePixelRatio;
}

function render(time)
{
    if (!active.get()) return;
    if (cgl.aborted || cgl.canvas.clientWidth === 0 || cgl.canvas.clientHeight === 0) return;

    op.patch.cg = cgl;

    setPixelDensity();

    // if (hdpi.get())op.patch.cgl.pixelDensity = window.devicePixelRatio;

    const startTime = performance.now();

    op.patch.config.fpsLimit = getFpsLimit();

    if (cgl.canvasWidth == -1)
    {
        cgl.setCanvas(op.patch.config.glCanvasId);
        return;
    }

    if (cgl.canvasWidth != width.get() || cgl.canvasHeight != height.get())
    {
        width.set(cgl.canvasWidth / 1);
        height.set(cgl.canvasHeight / 1);
    }

    if (CABLES.now() - rframeStart > 1000)
    {
        CGL.fpsReport = CGL.fpsReport || [];
        if (op.patch.loading.getProgress() >= 1.0 && rframeStart !== 0)CGL.fpsReport.push(rframes);
        rframes = 0;
        rframeStart = CABLES.now();
    }
    CGL.MESH.lastShader = null;
    CGL.MESH.lastMesh = null;

    cgl.renderStart(cgl, identTranslate, identTranslateView);

    if (!clear.get()) cgl.gl.clearColor(0, 0, 0, 1);
    else cgl.gl.clearColor(0, 0, 0, 0);

    cgl.gl.clear(cgl.gl.COLOR_BUFFER_BIT | cgl.gl.DEPTH_BUFFER_BIT);

    trigger.trigger();

    if (CGL.MESH.lastMesh)CGL.MESH.lastMesh.unBind();

    if (CGL.Texture.previewTexture)
    {
        if (!CGL.Texture.texturePreviewer) CGL.Texture.texturePreviewer = new CGL.Texture.texturePreview(cgl);
        CGL.Texture.texturePreviewer.render(CGL.Texture.previewTexture);
    }
    cgl.renderEnd(cgl);

    op.patch.cg = null;

    if (!clear.get())
    {
        cgl.gl.clearColor(1, 1, 1, 1);
        cgl.gl.colorMask(false, false, false, true);
        cgl.gl.clear(cgl.gl.COLOR_BUFFER_BIT);
        cgl.gl.colorMask(true, true, true, true);
    }

    if (!cgl.frameStore.phong)cgl.frameStore.phong = {};
    rframes++;

    outPixel.set(op.patch.cgl.pixelDensity);
    op.patch.cgl.profileData.profileMainloopMs = performance.now() - startTime;
}

function testMultiMainloop()
{
    clearTimeout(timeOutTest);
    timeOutTest = setTimeout(
        () =>
        {
            if (op.patch.getOpsByObjName(op.name).length > 1)
            {
                op.setUiError("multimainloop", "there should only be one mainloop op!");
                if (!addedListener)addedListener = op.patch.addEventListener("onOpDelete", testMultiMainloop);
            }
            else op.setUiError("multimainloop", null, 1);
        }, 500);
}


};

Ops.Gl.MainLoop_v2.prototype = new CABLES.Op();
CABLES.OPS["f1029550-d877-42da-9b1e-63a5163a0350"]={f:Ops.Gl.MainLoop_v2,objName:"Ops.Gl.MainLoop_v2"};




// **************************************************************
// 
// Ops.Gl.GLTF.GltfDracoCompression
// 
// **************************************************************

Ops.Gl.GLTF.GltfDracoCompression = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
class DracoDecoderClass
{
    constructor()
    {
        this.workerLimit = 4;
        this.workerPool = [];
        this.workerNextTaskID = 1;
        this.workerSourceURL = "";

        this.config = {
            "wasm": Uint8Array.from(atob(DracoDecoderWASM), (c) => { return c.charCodeAt(0); }),
            "wrapper": DracoWASMWrapperCode,
            "decoderSettings": {},
        };

        const dracoWorker = this._DracoWorker.toString();
        const workerCode = dracoWorker.substring(dracoWorker.indexOf("{") + 1, dracoWorker.lastIndexOf("}"));

        const jsContent = this.config.wrapper;
        const body = [
            "/* draco decoder */",
            jsContent,
            "",
            "/* worker */",
            workerCode
        ].join("\n");

        this.workerSourceURL = URL.createObjectURL(new Blob([body]));
    }

    _getWorker(taskID, taskCost)
    {
        if (this.workerPool.length < this.workerLimit)
        {
            const worker = new Worker(this.workerSourceURL);
            worker._callbacks = {};
            worker._taskCosts = {};
            worker._taskLoad = 0;
            worker.postMessage({ "type": "init", "decoderConfig": this.config });
            worker.onmessage = (e) =>
            {
                const message = e.data;

                switch (message.type)
                {
                case "done":
                    worker._callbacks[message.taskID].finishedCallback(message.geometry);
                    break;

                case "error":
                    worker._callbacks[message.taskID].errorCallback(message);
                    break;

                default:
                    op.error("THREE.DRACOLoader: Unexpected message, \"" + message.type + "\"");
                }
                this._releaseTask(worker, message.taskID);
            };
            this.workerPool.push(worker);
        }
        else
        {
            this.workerPool.sort(function (a, b)
            {
                return a._taskLoad > b._taskLoad ? -1 : 1;
            });
        }

        const worker = this.workerPool[this.workerPool.length - 1];
        worker._taskCosts[taskID] = taskCost;
        worker._taskLoad += taskCost;
        return worker;
    }

    decodeGeometry(buffer, finishedCallback, errorCallback = null)
    {
        const taskID = this.workerNextTaskID++;
        const taskCost = buffer.byteLength;

        const worker = this._getWorker(taskID, taskCost);
        worker._callbacks[taskID] = { finishedCallback, errorCallback };
        worker.postMessage({ "type": "decode", "taskID": taskID, buffer }, [buffer]);
    }

    _releaseTask(worker, taskID)
    {
        worker._taskLoad -= worker._taskCosts[taskID];
        delete worker._callbacks[taskID];
        delete worker._taskCosts[taskID];
    }

    _DracoWorker()
    {
        let pendingDecoder;

        onmessage = function (e)
        {
            const message = e.data;
            switch (message.type)
            {
            case "init":
                const decoderConfig = message.decoderConfig;
                const moduleConfig = decoderConfig.decoderSettings;
                pendingDecoder = new Promise(function (resolve)
                {
                    moduleConfig.onModuleLoaded = function (draco)
                    {
                        // Module is Promise-like. Wrap before resolving to avoid loop.
                        resolve({ "draco": draco });
                    };
                    moduleConfig.wasmBinary = decoderConfig.wasm;
                    DracoDecoderModule(moduleConfig); // eslint-disable-line no-undef
                });
                break;
            case "decode":
                pendingDecoder.then((module) =>
                {
                    const draco = module.draco;

                    const f = new draco.Decoder();
                    const dataBuff = new Int8Array(message.buffer);

                    const geometryType = f.GetEncodedGeometryType(dataBuff);
                    const buffer = new draco.DecoderBuffer();
                    buffer.Init(dataBuff, dataBuff.byteLength);

                    let outputGeometry = new draco.Mesh();
                    const status = f.DecodeBufferToMesh(buffer, outputGeometry);
                    const attribute = f.GetAttributeByUniqueId(outputGeometry, 1);
                    const geometry = dracoAttributes(draco, f, outputGeometry, geometryType, name);

                    this.postMessage({ "type": "done", "taskID": message.taskID, "geometry": geometry });

                    draco.destroy(f);
                    draco.destroy(buffer);
                });
                break;
            }
        };

        let dracoAttributes = function (draco, decoder, dracoGeometry, geometryType, name)
        {
            const attributeIDs = {
                "position": draco.POSITION,
                "normal": draco.NORMAL,
                "color": draco.COLOR,
                "uv": draco.TEX_COORD,
                "joints": draco.GENERIC,
                "weights": draco.GENERIC,
            };
            const attributeTypes = {
                "position": "Float32Array",
                "normal": "Float32Array",
                "color": "Float32Array",
                "weights": "Float32Array",
                "joints": "Uint8Array",
                "uv": "Float32Array"
            };

            const geometry = {
                "index": null,
                "attributes": []
            };

            let count = 0;
            for (const attributeName in attributeIDs)
            {
                const attributeType = attributeTypes[attributeName];
                let attributeID = decoder.GetAttributeId(dracoGeometry, attributeIDs[attributeName]);

                count++;
                if (attributeID != -1)
                {
                    let attribute = decoder.GetAttribute(dracoGeometry, attributeID);
                    geometry.attributes.push(decodeAttribute(draco, decoder, dracoGeometry, attributeName, attributeType, attribute));
                }
            }

            if (geometryType === draco.TRIANGULAR_MESH) geometry.index = decodeIndex(draco, decoder, dracoGeometry);
            else op.warn("unknown draco geometryType", geometryType);

            draco.destroy(dracoGeometry);
            return geometry;
        };

        let decodeIndex = function (draco, decoder, dracoGeometry)
        {
            const numFaces = dracoGeometry.num_faces();
            const numIndices = numFaces * 3;
            const byteLength = numIndices * 4;
            const ptr = draco._malloc(byteLength);

            decoder.GetTrianglesUInt32Array(dracoGeometry, byteLength, ptr);
            const index = new Uint32Array(draco.HEAPF32.buffer, ptr, numIndices).slice();

            draco._free(ptr);

            return {
                "array": index,
                "itemSize": 1
            };
        };

        let decodeAttribute = function (draco, decoder, dracoGeometry, attributeName, attributeType, attribute)
        {
            let bytesPerElement = 4;
            if (attributeType === "Float32Array") bytesPerElement = 4;
            else if (attributeType === "Uint8Array") bytesPerElement = 1;
            else op.warn("unknown attrtype bytesPerElement", attributeType);

            const numComponents = attribute.num_components();
            const numPoints = dracoGeometry.num_points();
            const numValues = numPoints * numComponents;
            const byteLength = numValues * bytesPerElement;
            const dataType = getDracoDataType(draco, attributeType);
            const ptr = draco._malloc(byteLength);
            let array = null;

            decoder.GetAttributeDataArrayForAllPoints(dracoGeometry, attribute, dataType, byteLength, ptr);

            if (attributeType === "Float32Array") array = new Float32Array(draco.HEAPF32.buffer, ptr, numValues).slice();
            else if (attributeType === "Uint8Array") array = new Uint8Array(draco.HEAPF32.buffer, ptr, numValues).slice();
            else op.warn("unknown attrtype", attributeType);

            draco._free(ptr);

            return {
                "name": attributeName,
                "array": array,
                "itemSize": numComponents
            };
        };

        let getDracoDataType = function (draco, attributeType)
        {
            switch (attributeType)
            {
            case "Float32Array": return draco.DT_FLOAT32;
            case "Int8Array": return draco.DT_INT8;
            case "Int16Array": return draco.DT_INT16;
            case "Int32Array": return draco.DT_INT32;
            case "Uint8Array": return draco.DT_UINT8;
            case "Uint16Array": return draco.DT_UINT16;
            case "Uint32Array": return draco.DT_UINT32;
            }
        };
    }
}

window.DracoDecoder = new DracoDecoderClass();


};

Ops.Gl.GLTF.GltfDracoCompression.prototype = new CABLES.Op();
CABLES.OPS["4ecdc2ef-a242-4548-ad74-13f617119a64"]={f:Ops.Gl.GLTF.GltfDracoCompression,objName:"Ops.Gl.GLTF.GltfDracoCompression"};




// **************************************************************
// 
// Ops.Gl.Matrix.Camera_v2
// 
// **************************************************************

Ops.Gl.Matrix.Camera_v2 = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const render = op.inTrigger("render");
const trigger = op.outTrigger("trigger");
const inIdentity = op.inBool("Identity", true);
/* Inputs */
// projection | prespective & ortogonal
const projectionMode = op.inValueSelect("projection mode", ["prespective", "ortogonal"], "prespective");
const zNear = op.inValue("frustum near", 0.01);
const zFar = op.inValue("frustum far", 5000.0);

const fov = op.inValue("fov", 45);
const autoAspect = op.inValueBool("Auto Aspect Ratio", true);
const aspect = op.inValue("Aspect Ratio", 1);

// look at camera
const eyeX = op.inValue("eye X", 0);
const eyeY = op.inValue("eye Y", 0);
const eyeZ = op.inValue("eye Z", 5);

const centerX = op.inValue("center X", 0);
const centerY = op.inValue("center Y", 0);
const centerZ = op.inValue("center Z", 0);

// camera transform and movements
const posX = op.inValue("truck", 0);
const posY = op.inValue("boom", 0);
const posZ = op.inValue("dolly", 0);

const rotX = op.inValue("tilt", 0);
const rotY = op.inValue("pan", 0);
const rotZ = op.inValue("roll", 0);

/* Outputs */
const outAsp = op.outNumber("Aspect");
const outArr = op.outArray("Look At Array");

/* logic */
const cgl = op.patch.cgl;

let asp = 0;

const vUp = vec3.create();
const vEye = vec3.create();
const vCenter = vec3.create();
const transMatrix = mat4.create();
mat4.identity(transMatrix);

const arr = [];

// Transform and move
const vPos = vec3.create();
const transMatrixMove = mat4.create();
mat4.identity(transMatrixMove);

let updateCameraMovementMatrix = true;

render.onTriggered = function ()
{
    if (cgl.frameStore.shadowPass) return trigger.trigger();

    // Aspect ration
    if (!autoAspect.get()) asp = aspect.get();
    else asp = cgl.getViewPort()[2] / cgl.getViewPort()[3];
    outAsp.set(asp);

    // translation (truck, boom, dolly)
    cgl.pushViewMatrix();

    if (inIdentity.get())mat4.identity(cgl.vMatrix);

    if (updateCameraMovementMatrix)
    {
        mat4.identity(transMatrixMove);

        vec3.set(vPos, posX.get(), posY.get(), posZ.get());
        if (posX.get() !== 0.0 || posY.get() !== 0.0 || posZ.get() !== 0.0)
            mat4.translate(transMatrixMove, transMatrixMove, vPos);

        if (rotX.get() !== 0)
            mat4.rotateX(transMatrixMove, transMatrixMove, rotX.get() * CGL.DEG2RAD);
        if (rotY.get() !== 0)
            mat4.rotateY(transMatrixMove, transMatrixMove, rotY.get() * CGL.DEG2RAD);
        if (rotZ.get() !== 0)
            mat4.rotateZ(transMatrixMove, transMatrixMove, rotZ.get() * CGL.DEG2RAD);

        updateCameraMovementMatrix = false;
    }

    mat4.multiply(cgl.vMatrix, cgl.vMatrix, transMatrixMove);

    // projection (prespective / ortogonal)
    cgl.pushPMatrix();

    // look at
    cgl.pushViewMatrix();

    if (projectionMode.get() == "prespective")
    {
        mat4.perspective(
            cgl.pMatrix,
            fov.get() * 0.0174533,
            asp,
            zNear.get(),
            zFar.get()
        );
    }
    else if (projectionMode.get() == "ortogonal")
    {
        mat4.ortho(
            cgl.pMatrix,
            -1 * (fov.get() / 14),
            1 * (fov.get() / 14),
            -1 * (fov.get() / 14) / asp,
            1 * (fov.get() / 14) / asp,
            zNear.get(),
            zFar.get()
        );
    }

    arr[0] = eyeX.get();
    arr[1] = eyeY.get();
    arr[2] = eyeZ.get();

    arr[3] = centerX.get();
    arr[4] = centerY.get();
    arr[5] = centerZ.get();

    arr[6] = 0;
    arr[7] = 1;
    arr[8] = 0;

    outArr.setRef(arr);

    vec3.set(vUp, 0, 1, 0);
    vec3.set(vEye, eyeX.get(), eyeY.get(), eyeZ.get());
    vec3.set(vCenter, centerX.get(), centerY.get(), centerZ.get());

    mat4.lookAt(transMatrix, vEye, vCenter, vUp);

    mat4.multiply(cgl.vMatrix, cgl.vMatrix, transMatrix);

    trigger.trigger();

    cgl.popViewMatrix();
    cgl.popPMatrix();

    cgl.popViewMatrix();

    // GUI for dolly, boom and truck
    if (op.isCurrentUiOp())
        gui.setTransformGizmo({
            "posX": posX,
            "posY": posY,
            "posZ": posZ
        });
};

const updateUI = function ()
{
    if (!autoAspect.get())
    {
        aspect.setUiAttribs({ "greyout": false });
    }
    else
    {
        aspect.setUiAttribs({ "greyout": true });
    }
};

const cameraMovementChanged = function ()
{
    updateCameraMovementMatrix = true;
};

// listeners
posX.onChange = cameraMovementChanged;
posY.onChange = cameraMovementChanged;
posZ.onChange = cameraMovementChanged;

rotX.onChange = cameraMovementChanged;
rotY.onChange = cameraMovementChanged;
rotZ.onChange = cameraMovementChanged;

autoAspect.onChange = updateUI;
updateUI();


};

Ops.Gl.Matrix.Camera_v2.prototype = new CABLES.Op();
CABLES.OPS["f7673a93-7772-4ade-9d3d-df7174f5258b"]={f:Ops.Gl.Matrix.Camera_v2,objName:"Ops.Gl.Matrix.Camera_v2"};




// **************************************************************
// 
// Ops.Gl.Phong.PointLight_v5
// 
// **************************************************************

Ops.Gl.Phong.PointLight_v5 = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const cgl = op.patch.cgl;
const gl = cgl.gl;
const mesh = CGL.MESHES.getSimpleRect(cgl, "fullscreenRectangle");

function Light(config)
{
    this.type = config.type || "point";
    this.color = config.color || [1, 1, 1];
    this.specular = config.specular || [0, 0, 0];
    this.position = config.position || null;
    this.intensity = config.intensity || 1;
    this.radius = config.radius || 1;
    this.falloff = config.falloff || 1;
    this.spotExponent = config.spotExponent || 1;
    this.cosConeAngle = Math.cos(CGL.DEG2RAD * this.coneAngle);
    this.conePointAt = config.conePointAt || [0, 0, 0];
    this.castShadow = config.castShadow || false;
    return this;
}

// * OP START *
const inTrigger = op.inTrigger("Trigger In");
const inCastLight = op.inBool("Cast Light", true);
const inIntensity = op.inFloat("Intensity", 2);
const inRadius = op.inFloat("Radius", 15);

const inPosX = op.inFloat("X", 0);
const inPosY = op.inFloat("Y", 2);
const inPosZ = op.inFloat("Z", 0.75);

const positionIn = [inPosX, inPosY, inPosZ];
op.setPortGroup("Position", positionIn);

const inR = op.inFloat("R", 0.8);
const inG = op.inFloat("G", 0.8);
const inB = op.inFloat("B", 0.8);

inR.setUiAttribs({ "colorPick": true });
const colorIn = [inR, inG, inB];
op.setPortGroup("Color", colorIn);

const inSpecularR = op.inFloat("Specular R", 1);
const inSpecularG = op.inFloat("Specular G", 1);
const inSpecularB = op.inFloat("Specular B", 1);

inSpecularR.setUiAttribs({ "colorPick": true });
const colorSpecularIn = [inSpecularR, inSpecularG, inSpecularB];
op.setPortGroup("Specular Color", colorSpecularIn);

const inFalloff = op.inFloatSlider("Falloff", 0.5);

const attribIns = [inIntensity, inCastLight, inRadius];
op.setPortGroup("Light Attributes", attribIns);

const inCastShadow = op.inBool("Cast Shadow", false);
const inRenderMapActive = op.inBool("Rendering Active", true);
const inMapSize = op.inSwitch("Map Size", [256, 512, 1024, 2048], 512);
const inShadowStrength = op.inFloatSlider("Shadow Strength", 1);
const inNear = op.inFloat("Near", 0.1);
const inFar = op.inFloat("Far", 30);
const inBias = op.inFloatSlider("Bias", 0.004);
const inPolygonOffset = op.inInt("Polygon Offset", 0);
op.setPortGroup("", [inCastShadow]);
op.setPortGroup("Shadow Map Settings", [inMapSize, inRenderMapActive, inShadowStrength, inNear, inFar, inBias, inPolygonOffset]);
const shadowProperties = [inNear, inFar];
inMapSize.setUiAttribs({ "greyout": !inCastShadow.get() });
inRenderMapActive.setUiAttribs({ "greyout": !inCastShadow.get() });
inShadowStrength.setUiAttribs({ "greyout": !inCastShadow.get() });
inNear.setUiAttribs({ "greyout": !inCastShadow.get() });
inBias.setUiAttribs({ "greyout": !inCastShadow.get() });
inFar.setUiAttribs({ "greyout": !inCastShadow.get() });
inPolygonOffset.setUiAttribs({ "greyout": !inCastShadow.get() });

let updating = false;

inCastShadow.onChange = function ()
{
    updating = true;
    updateLight = true;

    inMapSize.setUiAttribs({ "greyout": !inCastShadow.get() });
    inRenderMapActive.setUiAttribs({ "greyout": !inCastShadow.get() });
    inShadowStrength.setUiAttribs({ "greyout": !inCastShadow.get() });
    inNear.setUiAttribs({ "greyout": !inCastShadow.get() });
    inFar.setUiAttribs({ "greyout": !inCastShadow.get() });
    inBias.setUiAttribs({ "greyout": !inCastShadow.get() });
    inPolygonOffset.setUiAttribs({ "greyout": !inCastShadow.get() });
};

const outTrigger = op.outTrigger("Trigger Out");
const outCubemap = op.outObject("Cubemap", null, "texture");
const outWorldPosX = op.outNumber("World Position X");
const outWorldPosY = op.outNumber("World Position Y");
const outWorldPosZ = op.outNumber("World Position Z");

const newLight = new CGL.Light(cgl, {
    "type": "point",
    "position": [0, 1, 2].map(function (i) { return positionIn[i].get(); }),
    "color": [0, 1, 2].map(function (i) { return colorIn[i].get(); }),
    "specular": [0, 1, 2].map(function (i) { return colorSpecularIn[i].get(); }),
    "intensity": inIntensity.get(),
    "radius": inRadius.get(),
    "falloff": inFalloff.get(),
    "shadowStrength": inShadowStrength.get(),
    "shadowBias": inBias.get()
});
newLight.castLight = inCastLight.get();

let updateLight = false;

inPosX.onChange = inPosY.onChange = inPosZ.onChange = inR.onChange = inG.onChange = inB.onChange
= inSpecularR.onChange = inSpecularG.onChange = inSpecularB.onChange = inIntensity.onChange
= inCastLight.onChange = inRadius.onChange = inFalloff.onChange = inNear.onChange = inFar.onChange = inShadowStrength.onChange = function ()
        {
            updateLight = true;
        };

inMapSize.onChange = function ()
{
    // TODO: update this one
    updating = true;
};

function updateShadowMapFramebuffer()
{
    if (inCastShadow.get())
    {
        const size = inMapSize.get();
        newLight.createFramebuffer(size, size, {});
        newLight.createShadowMapShader();
    }
    updating = false;
}

const sc = vec3.create();
const result = vec3.create();
const position = vec3.create();
const transVec = vec3.create();

function drawHelpers()
{
    if (cgl.frameStore.shadowPass) return;

    if (CABLES.UI) gui.setTransform(op.id, inPosX.get(), inPosY.get(), inPosZ.get());
    if (op.isCurrentUiOp())
    {
        gui.setTransformGizmo({
            "posX": inPosX,
            "posY": inPosY,
            "posZ": inPosZ,
        });

        cgl.pushModelMatrix();
        mat4.translate(cgl.mMatrix, cgl.mMatrix, transVec);
        CABLES.GL_MARKER.drawSphere(op, inRadius.get());
        cgl.popModelMatrix();
    }
}

let errorActive = false;

inTrigger.onTriggered = function ()
{
    if (updating)
    {
        if (cgl.frameStore.shadowPass) return;
        updateShadowMapFramebuffer();
    }

    if (!cgl.frameStore.shadowPass)
    {
        if (!newLight.isUsed && !errorActive)
        {
            op.setUiError("lightUsed", "No operator is using this light. Make sure this op is positioned before an operator that uses lights. Also make sure there is an operator that uses lights after this.", 1); // newLight.isUsed = false;
            errorActive = true;
        }
        else if (!newLight.isUsed && errorActive) {}
        else if (newLight.isUsed && errorActive)
        {
            op.setUiError("lightUsed", null);
            errorActive = false;
        }
        else if (newLight.isUsed && !errorActive) {}

        newLight.isUsed = false;
    }

    if (updateLight)
    {
        newLight.position = [0, 1, 2].map(function (i) { return positionIn[i].get(); });
        newLight.color = [0, 1, 2].map(function (i) { return colorIn[i].get(); });
        newLight.specular = [0, 1, 2].map(function (i) { return colorSpecularIn[i].get(); });
        newLight.intensity = inIntensity.get();
        newLight.radius = inRadius.get();
        newLight.falloff = inFalloff.get();
        newLight.castShadow = inCastShadow.get();
        newLight.castLight = inCastLight.get();
        newLight.updateProjectionMatrix(null, inNear.get(), inFar.get(), null);
        updateLight = false;
    }

    if (!cgl.frameStore.lightStack) cgl.frameStore.lightStack = [];

    vec3.set(transVec, inPosX.get(), inPosY.get(), inPosZ.get());
    vec3.transformMat4(position, transVec, cgl.mMatrix);

    newLight.position = position;

    outWorldPosX.set(newLight.position[0]);
    outWorldPosY.set(newLight.position[1]);
    outWorldPosZ.set(newLight.position[2]);

    if (!cgl.frameStore.shadowPass) drawHelpers();

    cgl.frameStore.lightStack.push(newLight);

    if (inCastShadow.get())
    {
        if (inRenderMapActive.get()) newLight.renderPasses(inPolygonOffset.get(), null, function () { outTrigger.trigger(); });

        if (!cgl.frameStore.shadowPass)
        {
            cgl.frameStore.lightStack.pop();
            newLight.castShadow = inCastShadow.get();
            newLight.shadowBias = inBias.get();
            newLight.shadowStrength = inShadowStrength.get();

            if (newLight.shadowCubeMap)
            {
                if (newLight.shadowCubeMap.cubemap)
                {
                    outCubemap.set(null);
                    outCubemap.set(newLight.shadowCubeMap);
                    if (inRenderMapActive.get())
                    {
                        // needs to be "cloned", cannot save reference.
                        newLight.positionForShadowMap = [newLight.position[0], newLight.position[1], newLight.position[2]];
                    }
                }
            }
            cgl.frameStore.lightStack.push(newLight);
        }
    }
    else
    {
        outCubemap.set(null);
    }

    outTrigger.trigger();
    cgl.frameStore.lightStack.pop();
};


};

Ops.Gl.Phong.PointLight_v5.prototype = new CABLES.Op();
CABLES.OPS["54e5d3f5-e3f4-4381-990d-d5e32b9a2d39"]={f:Ops.Gl.Phong.PointLight_v5,objName:"Ops.Gl.Phong.PointLight_v5"};




// **************************************************************
// 
// Ops.TimeLine.TimeLineLoop
// 
// **************************************************************

Ops.TimeLine.TimeLineLoop = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    execute = op.inTrigger("Execute"),
    duration = op.inValueFloat("duration", 2),
    trigger = op.outTrigger("trigger");

execute.onTriggered = function ()
{
    if (op.patch.timer.getTime() > duration.get())
        op.patch.timer.setTime(0);

    trigger.trigger();
};


};

Ops.TimeLine.TimeLineLoop.prototype = new CABLES.Op();
CABLES.OPS["e450a850-7311-48b5-abfc-07ec1fea3b8e"]={f:Ops.TimeLine.TimeLineLoop,objName:"Ops.TimeLine.TimeLineLoop"};




// **************************************************************
// 
// Ops.Boolean.IfTrueThen_v2
// 
// **************************************************************

Ops.Boolean.IfTrueThen_v2 = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    exe = op.inTrigger("exe"),
    boolean = op.inValueBool("boolean", false),
    triggerThen = op.outTrigger("then"),
    triggerElse = op.outTrigger("else");

exe.onTriggered = exec;

// let b = false;

// boolean.onChange = () =>
// {
//     b = boolean.get();
// };

function exec()
{
    if (boolean.get()) triggerThen.trigger();
    else triggerElse.trigger();
}


};

Ops.Boolean.IfTrueThen_v2.prototype = new CABLES.Op();
CABLES.OPS["9549e2ed-a544-4d33-a672-05c7854ccf5d"]={f:Ops.Boolean.IfTrueThen_v2,objName:"Ops.Boolean.IfTrueThen_v2"};




// **************************************************************
// 
// Ops.Html.PlayButton
// 
// **************************************************************

Ops.Html.PlayButton = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={"inner_css":"\nborder-style:solid;\nborder-color:transparent transparent transparent #ccc;\nbox-sizing:border-box;\nwidth:50px;\nheight:50px;\nmargin-top:25px;\nmargin-left:36px;\nborder-width:25px 0px 25px 40px;\npointer-events:none;\n","outer_css":"width:100px;\nheight:100px;\nleft:50%;\ntop:50%;\nborder-radius:100%;\nposition:absolute;\ncursor:pointer;\nopacity:0.7;\ntransform:translate(-50%,-50%);\nz-index:999999;\nbackground-color:#333;\nborder:5px solid #333;",};
const
    inExec = op.inTrigger("Trigger"),
    inIfSuspended = op.inValueBool("Only if Audio Suspended"),
    inReset = op.inTriggerButton("Reset"),
    inStyleOuter = op.inStringEditor("Style Outer", attachments.outer_css),
    inStyleInner = op.inStringEditor("Style Inner", attachments.inner_css),
    inActive = op.inBool("Active", true),
    outNext = op.outTrigger("Next"),
    notClickedNext = op.outTrigger("Not Clicked"),
    outState = op.outString("Audiocontext State", "unknown"),
    outEle = op.outObject("Element"),
    outClicked = op.outBoolNum("Clicked", false),
    outClickedTrigger = op.outTrigger("Clicked Trigger");

op.toWorkPortsNeedToBeLinked(inExec);
let audioCtx = CABLES.WEBAUDIO.createAudioContext(op);

const canvas = op.patch.cgl.canvas.parentElement;
let wasClicked = false;
let ele = null;
let elePlay = null;
createElements();

inStyleOuter.onChange =
    inStyleInner.onChange = createElements;

audioCtx.addEventListener("statechange", updateState);
updateState();

inActive.onChange = () =>
{
    if (!inActive.get())ele.style.display = "none";
    else ele.style.display = "block";
};

function createElements()
{
    updateState();
    if (elePlay) elePlay.remove();
    if (ele) ele.remove();

    ele = document.createElement("div");
    ele.style = inStyleOuter.get();
    outEle.set(ele);

    canvas.appendChild(ele);

    elePlay = document.createElement("div");
    elePlay.style = inStyleInner.get();

    ele.appendChild(elePlay);
    ele.classList.add("playButton");

    ele.addEventListener("mouseenter", hover);
    ele.addEventListener("mouseleave", hoverOut);
    ele.addEventListener("click", clicked);
    ele.addEventListener("touchStart", clicked);
    op.onDelete = removeElements;
}

inReset.onTriggered = function ()
{
    createElements();
    wasClicked = false;
    outClicked.set(wasClicked);
};

function updateState()
{
    outState.set(audioCtx.state);
    if (inIfSuspended.get() && audioCtx.state == "running") clicked();
}

inExec.onTriggered = function ()
{
    if (wasClicked) outNext.trigger();
    else notClickedNext.trigger();
};

function clicked()
{
    removeElements();
    if (audioCtx && audioCtx.state == "suspended")audioCtx.resume();
    wasClicked = true;
    outClicked.set(wasClicked);
    outClickedTrigger.trigger();
}

function removeElements()
{
    if (elePlay) elePlay.remove();
    if (ele) ele.remove();
}

function hoverOut()
{
    if (ele) ele.style.opacity = 0.7;
}

function hover()
{
    if (ele) ele.style.opacity = 1.0;
}


};

Ops.Html.PlayButton.prototype = new CABLES.Op();
CABLES.OPS["32e53fa2-4545-4c53-a94d-2204aa079246"]={f:Ops.Html.PlayButton,objName:"Ops.Html.PlayButton"};




// **************************************************************
// 
// Ops.Cables.LoadingStatus_v2
// 
// **************************************************************

Ops.Cables.LoadingStatus_v2 = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    exe = op.inTrigger("exe"),
    preRenderOps = op.inValueBool("PreRender Ops"),
    startTimeLine = op.inBool("Play Timeline", true),
    next = op.outTrigger("Next"),
    outInitialFinished = op.outBoolNum("Finished Initial Loading", false),
    outLoading = op.outBoolNum("Loading"),
    outProgress = op.outNumber("Progress"),
    outList = op.outArray("Jobs"),
    loadingFinished = op.outTrigger("Trigger Loading Finished ");

const cgl = op.patch.cgl;
const patch = op.patch;

let finishedOnce = false;
const preRenderTimes = [];
let firstTime = true;
let timeout = 0;

document.body.classList.add("cables-loading");

let loadingId = cgl.patch.loading.start("loadingStatusInit", "loadingStatusInit", op);

op.patch.loading.on("finishedTask", updateStatus.bind(this));
op.patch.loading.on("startTask", updateStatus.bind(this));

function updateStatus()
{
    const jobs = op.patch.loading.getListJobs();
    outProgress.set(patch.loading.getProgress());

    let hasFinished = jobs.length === 0;
    const notFinished = !hasFinished;

    if (notFinished)
    {
        outList.set(op.patch.loading.getListJobs());
    }

    if (notFinished)
    {
        if (firstTime)
        {
            if (preRenderOps.get()) op.patch.preRenderOps();

            op.patch.timer.setTime(0);
            if (startTimeLine.get())
            {
                op.patch.timer.play();
            }
            else
            {
                op.patch.timer.pause();
            }
        }
        firstTime = false;

        document.body.classList.remove("cables-loading");
        document.body.classList.add("cables-loaded");
    }
    else
    {
        finishedOnce = true;
        outList.set(op.patch.loading.getListJobs());
        if (patch.loading.getProgress() < 1.0)
        {
            op.patch.timer.setTime(0);
            op.patch.timer.pause();
        }
    }

    outInitialFinished.set(finishedOnce);

    if (outLoading.get() && hasFinished) loadingFinished.trigger();

    outLoading.set(notFinished);
    // clearTimeout(timeout);
    // if (notFinished) outLoading.set(notFinished);
    // else
    //     timeout = setTimeout(() =>
    //     {
    //         outLoading.set(notFinished);
    //     }, 100);

    op.setUiAttribs({ "loading": notFinished });
}

exe.onTriggered = () =>
{
    updateStatus();

    next.trigger();

    if (loadingId)
    {
        cgl.patch.loading.finished(loadingId);
        loadingId = null;
    }
};


};

Ops.Cables.LoadingStatus_v2.prototype = new CABLES.Op();
CABLES.OPS["e62f7f4c-7436-437e-8451-6bc3c28545f7"]={f:Ops.Cables.LoadingStatus_v2,objName:"Ops.Cables.LoadingStatus_v2"};




// **************************************************************
// 
// Ops.Gl.Matrix.OrbitControls_v3
// 
// **************************************************************

Ops.Gl.Matrix.OrbitControls_v3 = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    render = op.inTrigger("render"),
    minDist = op.inValueFloat("min distance", 1),
    maxDist = op.inValueFloat("max distance", 999999),

    minRotY = op.inValue("min rot y", 0),
    maxRotY = op.inValue("max rot y", 0),

    initialRadius = op.inValue("initial radius", 2),
    initialAxis = op.inValueSlider("initial axis y", 0.5),
    initialX = op.inValueSlider("initial axis x", 0.25),

    smoothness = op.inValueSlider("Smoothness", 1.0),
    speedX = op.inValue("Speed X", 1),
    speedY = op.inValue("Speed Y", 1),

    active = op.inValueBool("Active", true),

    allowPanning = op.inValueBool("Allow Panning", true),
    allowZooming = op.inValueBool("Allow Zooming", true),
    allowRotation = op.inValueBool("Allow Rotation", true),
    restricted = op.inValueBool("restricted", true),
    inIdentity = op.inBool("Identity", true),
    inReset = op.inTriggerButton("Reset"),

    trigger = op.outTrigger("trigger"),
    outRadius = op.outNumber("radius"),
    outXDeg = op.outNumber("Rot X"),
    outYDeg = op.outNumber("Rot Y");
    // outCoords = op.outArray("Eye/Target Pos");

op.setPortGroup("Initial Values", [initialAxis, initialX, initialRadius]);
op.setPortGroup("Interaction", [smoothness, speedX, speedY]);
op.setPortGroup("Boundaries", [minRotY, maxRotY, minDist, maxDist]);

const halfCircle = Math.PI;
const fullCircle = Math.PI * 2;

const
    vUp = vec3.create(),
    vCenter = vec3.create(),
    viewMatrix = mat4.create(),
    tempViewMatrix = mat4.create(),
    vOffset = vec3.create(),
    finalEyeAbs = vec3.create(),
    tempEye = vec3.create(),
    finalEye = vec3.create(),
    tempCenter = vec3.create(),
    finalCenter = vec3.create();

let eye = vec3.create(),
    mouseDown = false,
    radius = 5,
    lastMouseX = 0, lastMouseY = 0,
    percX = 0, percY = 0,
    px = 0,
    py = 0,
    divisor = 1,
    element = null,
    initializing = true,
    eyeTargetCoord = [0, 0, 0, 0, 0, 0],
    lastPy = 0;

op.onDelete = unbind;
smoothness.onChange = updateSmoothness;
initialRadius.onChange =
    inReset.onTriggered = reset;

eye = circlePos(0);
vec3.set(vCenter, 0, 0, 0);
vec3.set(vUp, 0, 1, 0);
updateSmoothness();
reset();

function reset()
{
    let off = 0;

    if (px % fullCircle < -halfCircle)
    {
        off = -fullCircle;
        px %= -fullCircle;
    }
    else
    if (px % fullCircle > halfCircle)
    {
        off = fullCircle;
        px %= fullCircle;
    }
    else px %= fullCircle;

    py %= (Math.PI);

    vec3.set(vOffset, 0, 0, 0);
    vec3.set(vCenter, 0, 0, 0);
    vec3.set(vUp, 0, 1, 0);

    percX = (initialX.get() * Math.PI * 2 + off);
    percY = (initialAxis.get() - 0.5);

    radius = initialRadius.get();
    eye = circlePos(percY);
}

function updateSmoothness()
{
    divisor = smoothness.get() * 10 + 1;
}

function ip(val, goal)
{
    if (initializing) return goal;
    return val + (goal - val) / divisor;
}

render.onTriggered = function ()
{
    const cgl = op.patch.cg;
    if (!cgl) return;

    if (!element)
    {
        setElement(cgl.canvas);
        bind();
    }

    cgl.pushViewMatrix();

    px = ip(px, percX);
    py = ip(py, percY);

    let degY = (py + 0.5) * 180;

    if (minRotY.get() !== 0 && degY < minRotY.get())
    {
        degY = minRotY.get();
        py = lastPy;
    }
    else if (maxRotY.get() !== 0 && degY > maxRotY.get())
    {
        degY = maxRotY.get();
        py = lastPy;
    }
    else
    {
        lastPy = py;
    }

    const degX = (px) * CGL.RAD2DEG;

    outYDeg.set(degY);
    outXDeg.set(degX);

    circlePosi(eye, py);

    vec3.add(tempEye, eye, vOffset);
    vec3.add(tempCenter, vCenter, vOffset);

    finalEye[0] = ip(finalEye[0], tempEye[0]);
    finalEye[1] = ip(finalEye[1], tempEye[1]);
    finalEye[2] = ip(finalEye[2], tempEye[2]);

    finalCenter[0] = ip(finalCenter[0], tempCenter[0]);
    finalCenter[1] = ip(finalCenter[1], tempCenter[1]);
    finalCenter[2] = ip(finalCenter[2], tempCenter[2]);

    // eyeTargetCoord[0] = finalEye[0];
    // eyeTargetCoord[1] = finalEye[1];
    // eyeTargetCoord[2] = finalEye[2];
    // eyeTargetCoord[3] = finalCenter[0];
    // eyeTargetCoord[4] = finalCenter[1];
    // eyeTargetCoord[5] = finalCenter[2];
    // outCoords.setRef(eyeTargetCoord);

    const empty = vec3.create();

    if (inIdentity.get()) mat4.identity(cgl.vMatrix);

    mat4.lookAt(viewMatrix, finalEye, finalCenter, vUp);
    mat4.rotate(viewMatrix, viewMatrix, px, vUp);

    // finaly multiply current scene viewmatrix
    mat4.multiply(cgl.vMatrix, cgl.vMatrix, viewMatrix);

    trigger.trigger();
    cgl.popViewMatrix();
    initializing = false;
};

function circlePosi(vec, perc)
{
    if (radius < minDist.get()) radius = minDist.get();
    if (radius > maxDist.get()) radius = maxDist.get();

    outRadius.set(radius);

    let i = 0, degInRad = 0;

    degInRad = 360 * perc / 2 * CGL.DEG2RAD;
    vec3.set(vec,
        Math.cos(degInRad) * radius,
        Math.sin(degInRad) * radius,
        0);
    return vec;
}

function circlePos(perc)
{
    if (radius < minDist.get())radius = minDist.get();
    if (radius > maxDist.get())radius = maxDist.get();

    outRadius.set(radius);

    let i = 0, degInRad = 0;
    const vec = vec3.create();
    degInRad = 360 * perc / 2 * CGL.DEG2RAD;
    vec3.set(vec,
        Math.cos(degInRad) * radius,
        Math.sin(degInRad) * radius,
        0);
    return vec;
}

function onmousemove(event)
{
    if (!mouseDown) return;

    const x = event.clientX;
    const y = event.clientY;

    let movementX = (x - lastMouseX);
    let movementY = (y - lastMouseY);

    movementX *= speedX.get();
    movementY *= speedY.get();

    if (event.buttons == 2 && allowPanning.get())
    {
        vOffset[2] += movementX * 0.01;
        vOffset[1] += movementY * 0.01;
    }
    else
    if (event.buttons == 4 && allowZooming.get())
    {
        radius += movementY * 0.05;
        eye = circlePos(percY);
    }
    else
    {
        if (allowRotation.get())
        {
            percX += movementX * 0.003;
            percY += movementY * 0.002;

            if (restricted.get())
            {
                if (percY > 0.5)percY = 0.5;
                if (percY < -0.5)percY = -0.5;
            }
        }
    }

    lastMouseX = x;
    lastMouseY = y;
}

function onMouseDown(event)
{
    lastMouseX = event.clientX;
    lastMouseY = event.clientY;
    mouseDown = true;

    try { element.setPointerCapture(event.pointerId); }
    catch (e) {}
}

function onMouseUp(e)
{
    mouseDown = false;

    try { element.releasePointerCapture(e.pointerId); }
    catch (e) {}
}

function lockChange()
{
    const el = op.patch.cg.canvas;

    if (document.pointerLockElement === el || document.mozPointerLockElement === el || document.webkitPointerLockElement === el)
        document.addEventListener("mousemove", onmousemove, false);
}

function onMouseEnter(e)
{
}

initialX.onChange = function ()
{
    px = percX = (initialX.get() * Math.PI * 2);
};

initialAxis.onChange = function ()
{
    py = percY = (initialAxis.get() - 0.5);
    eye = circlePos(percY);
};

const onMouseWheel = function (event)
{
    if (allowZooming.get())
    {
        const delta = CGL.getWheelSpeed(event) * 0.06;
        radius += (parseFloat(delta)) * 1.2;
        eye = circlePos(percY);
    }
};

const ontouchstart = function (event)
{
    if (event.touches && event.touches.length > 0) onMouseDown(event.touches[0]);
};

const ontouchend = function (event)
{
    onMouseUp();
};

const ontouchmove = function (event)
{
    if (event.touches && event.touches.length > 0) onmousemove(event.touches[0]);
};

active.onChange = function ()
{
    if (active.get())bind();
    else unbind();
};

function setElement(ele)
{
    unbind();
    element = ele;
    bind();
}

function bind()
{
    if (!element) return;
    if (!active.get()) return unbind();

    element.addEventListener("pointermove", onmousemove);
    element.addEventListener("pointerdown", onMouseDown);
    element.addEventListener("pointerup", onMouseUp);
    element.addEventListener("pointerleave", onMouseUp);
    element.addEventListener("pointerenter", onMouseEnter);
    element.addEventListener("contextmenu", function (e) { e.preventDefault(); });
    element.addEventListener("wheel", onMouseWheel, { "passive": true });
}

function unbind()
{
    if (!element) return;

    element.removeEventListener("pointermove", onmousemove);
    element.removeEventListener("pointerdown", onMouseDown);
    element.removeEventListener("pointerup", onMouseUp);
    element.removeEventListener("pointerleave", onMouseUp);
    element.removeEventListener("pointerenter", onMouseUp);
    element.removeEventListener("wheel", onMouseWheel);
}


};

Ops.Gl.Matrix.OrbitControls_v3.prototype = new CABLES.Op();
CABLES.OPS["0655b098-d2a8-4ce2-a0b9-ecb2c78f873a"]={f:Ops.Gl.Matrix.OrbitControls_v3,objName:"Ops.Gl.Matrix.OrbitControls_v3"};




// **************************************************************
// 
// Ops.Anim.SineAnim
// 
// **************************************************************

Ops.Anim.SineAnim = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    exe = op.inTrigger("exe"),
    mode = op.inSwitch("Mode", ["Sine", "Cosine"], "Sine"),
    phase = op.inValueFloat("phase", 0),
    mul = op.inValueFloat("frequency", 1),
    amplitude = op.inValueFloat("amplitude", 1),
    trigOut = op.outTrigger("Trigger out"),
    result = op.outNumber("result");

let selectIndex = 0;
const SINE = 0;
const COSINE = 1;

op.toWorkPortsNeedToBeLinked(exe);

exe.onTriggered = exec;
mode.onChange = onModeChange;

exec();
onModeChange();

function onModeChange()
{
    let modeSelectValue = mode.get();

    if (modeSelectValue === "Sine") selectIndex = SINE;
    else if (modeSelectValue === "Cosine") selectIndex = COSINE;

    exec();
}

function exec()
{
    if (selectIndex == SINE) result.set(amplitude.get() * Math.sin((op.patch.freeTimer.get() * mul.get()) + phase.get()));
    else result.set(amplitude.get() * Math.cos((op.patch.freeTimer.get() * mul.get()) + phase.get()));
    trigOut.trigger();
}


};

Ops.Anim.SineAnim.prototype = new CABLES.Op();
CABLES.OPS["736d3d0e-c920-449e-ade0-f5ca6018fb5c"]={f:Ops.Anim.SineAnim,objName:"Ops.Anim.SineAnim"};




// **************************************************************
// 
// Ops.TimeLine.DemoPrerender
// 
// **************************************************************

Ops.TimeLine.DemoPrerender = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    exec = op.inTrigger("Render"),
    inEvents = op.inArray("Times"),
    inAddTimes = op.inArray("Manual Timestamps"),
    inRecord = op.inBool("Record Events", false),
    inReset = op.inTriggerButton("Reset"),
    inClear = op.inTriggerButton("Clear"),
    inReResize = op.inBool("ReRender on Resize", true),
    next = op.outTrigger("Next"),
    nextPrerendered = op.outTrigger("Prerendered Frame"),
    outProgress = op.outNumber("Progress", 0),
    numEvents = op.outNumber("Num Events");

exec.onTriggered = render;
inEvents.setUiAttribs({ "hidePort": true, "hideParam": true });

let isPrerendering = true;

let prerenderCount = 0;
let delaystart = false;
let restartTime = 0;
let restartTimeFreeTimer = 0;
let events = [0];

op.patch.cgl.on("resize", () =>
{
    if (inReResize.get())
    {
        if (!isPrerendering && outProgress.get() == 1)
        {
            restartTime = op.patch.timer.getTime();
            restartTimeFreeTimer = op.patch.freeTimer.getTime();

            isPrerendering = true;
            prerenderCount = 0;
        }
    }
});

inAddTimes.onChange =
inEvents.onChange = () =>
{
    numEvents.set(getAllTimes().length);
    events = inEvents.get() || [0];
};

op.patch.cgl.on("heavyEvent", (e) =>
{
    if (inRecord.get() && !isPrerendering && CABLES.uniqueArray)
    {
        events.push(Math.round(op.patch.timer.getTime() * 60) / 60);
        events = CABLES.uniqueArray(events);
        inEvents.set(events);
    }
});

let curTime = 0;

inReset.onTriggered = () =>
{
    isPrerendering = true;
};

inClear.onTriggered = () =>
{
    events = [0];
    inEvents.set(events);
};

function fakeNow()
{
    return curTime * 1000;
}

function getAllTimes()
{
    let arr = [];

    arr = arr.concat(inEvents.get() || [0]);
    if (inAddTimes.get())arr = arr.concat(inAddTimes.get());

    return arr;
}

function render()
{
    if (inRecord.get())
    {
        isPrerendering = false;
        outProgress.set(1);
        next.trigger();

        return;
    }
    if (isPrerendering)
    {
        let times = getAllTimes();
        if (prerenderCount < times.length)
        {
            const oldInternalNow = CABLES.internalNow;
            CABLES.internalNow = fakeNow;

            curTime = times[prerenderCount];

            // console.log("curTime", curTime);
            op.patch._frameNum = prerenderCount + 22;

            CABLES.overwriteTime = curTime;
            op.patch.timer.setTime(curTime);
            op.patch.freeTimer.setTime(curTime);

            CABLES.overwriteTime = undefined;
            CABLES.internalNow = oldInternalNow;
        }

        const numExtraFrames = 30;
        if (prerenderCount >= times.length)
        {
            const t = (numExtraFrames - (prerenderCount - times.length)) / numExtraFrames;

            // op.log("empty prerender...", t);
            op.patch.timer.setTime(t);
            op.patch.freeTimer.setTime(t);
        }

        next.trigger();
        next.trigger();
        // next.trigger();
        // next.trigger();
        outProgress.set(Math.min(1, prerenderCount / (times.length + numExtraFrames)));
        // op.log("progress...", outProgress.get());

        nextPrerendered.trigger();

        if (prerenderCount >= times.length + numExtraFrames)
        {
            op.patch.timer.setTime(restartTime);
            op.patch.freeTimer.setTime(restartTimeFreeTimer);

            // setTimeout(() =>
            // {
            //     delaystart = false;
            isPrerendering = false;
            //     op.patch.timer.setTime(0);
            //     op.patch.freeTimer.setTime(0);
            // }, 500);
        }
        else
            prerenderCount++;
    }
    else
    {
        next.trigger();
    }
}


};

Ops.TimeLine.DemoPrerender.prototype = new CABLES.Op();
CABLES.OPS["962ea9e5-39ee-448c-9a2b-b71ceee47c11"]={f:Ops.TimeLine.DemoPrerender,objName:"Ops.TimeLine.DemoPrerender"};




// **************************************************************
// 
// Ops.Math.Compare.IfBetweenThen
// 
// **************************************************************

Ops.Math.Compare.IfBetweenThen = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    exe = op.inTrigger("exe"),
    number = op.inValue("number", 0),
    min = op.inValue("min", 0),
    max = op.inValue("max", 1),
    triggerThen = op.outTrigger("then"),
    triggerElse = op.outTrigger("else"),
    outBetween = op.outBoolNum("bs between");

exe.onTriggered = function ()
{
    if (number.get() >= min.get() && number.get() < max.get())
    {
        outBetween.set(true);
        triggerThen.trigger();
    }
    else
    {
        outBetween.set(false);
        triggerElse.trigger();
    }
};


};

Ops.Math.Compare.IfBetweenThen.prototype = new CABLES.Op();
CABLES.OPS["c80437f0-f0e1-465c-9cea-8a044aa2feaa"]={f:Ops.Math.Compare.IfBetweenThen,objName:"Ops.Math.Compare.IfBetweenThen"};




// **************************************************************
// 
// Ops.WebAudio.AudioBuffer_v2
// 
// **************************************************************

Ops.WebAudio.AudioBuffer_v2 = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const cgl = op.patch.cgl;

const
    audioCtx = CABLES.WEBAUDIO.createAudioContext(op),
    inUrlPort = op.inUrl("URL", "audio"),
    inLoadingTask = op.inBool("Create Loading Task", true),
    audioBufferPort = op.outObject("Audio Buffer", null, "audioBuffer"),
    finishedLoadingPort = op.outBoolNum("Finished Loading", false),
    sampleRatePort = op.outNumber("Sample Rate", 0),
    lengthPort = op.outNumber("Length", 0),
    durationPort = op.outNumber("Duration", 0),
    numberOfChannelsPort = op.outNumber("Number of Channels", 0),
    outLoading = op.outBool("isLoading", 0);

let currentBuffer = null;
let isLoading = false;
let currentFileUrl = null;
let urlToLoadNext = null;
let clearAfterLoad = false;
let fromData = false;
let fromDataNew = false;
let fileReader = new FileReader();
let arrayBuffer = null;
let loadingIdDataURL = 0;

if (!audioBufferPort.isLinked())
{
    op.setUiError("notConnected", "To play back sound, connect this op to a playback operator such as SamplePlayer or AudioBufferPlayer.", 0);
}
else
{
    op.setUiError("notConnected", null);
}

audioBufferPort.onLinkChanged = () =>
{
    if (audioBufferPort.isLinked())
    {
        op.setUiError("notConnected", null);
    }
    else
    {
        op.setUiError("notConnected", "To play back sound, connect this op to a playback operator such as SamplePlayer or AudioBufferPlayer.", 0);
    }
};

function loadAudioFile(url, loadFromData)
{
    currentFileUrl = url;
    isLoading = true;
    outLoading.set(isLoading);

    if (!loadFromData)
    {
        const ext = url.substr(url.lastIndexOf(".") + 1);
        if (ext === "wav")
        {
            op.setUiError("wavFormat", "You are using a .wav file. Make sure the .wav file is 16 bit to be supported by all browsers. Safari does not support 24 bit .wav files.", 1);
        }
        else
        {
            op.setUiError("wavFormat", null);
        }

        CABLES.WEBAUDIO.loadAudioFile(op.patch, url, onLoadFinished, onLoadFailed, inLoadingTask.get());
    }
    else
    {
        let fileBlob = dataURItoBlob(url);

        if (fileBlob.type === "audio/wav")
        {
            op.setUiError("wavFormat", "You are using a .wav file. Make sure the .wav file is 16 bit to be supported by all browsers. Safari does not support 24 bit .wav files.", 1);
        }
        else
        {
            op.setUiError("wavFormat", null);
        }

        if (inLoadingTask.get())
        {
            loadingIdDataURL = cgl.patch.loading.start("audiobuffer from data-url " + op.id, url, op);
            if (cgl.patch.isEditorMode()) gui.jobs().start({ "id": "loadaudio" + loadingIdDataURL, "title": " loading audio data url (" + op.id + ")" });
        }

        fileReader.readAsArrayBuffer(fileBlob);
    }
}

function dataURItoBlob(dataURI)
{
    // convert base64 to raw binary data held in a string
    // doesn't handle URLEncoded DataURIs - see SO answer #6850276 for code that does this
    let byteString = atob(dataURI.split(",")[1]);

    // separate out the mime component
    let mimeString = dataURI.split(",")[0].split(":")[1].split(";")[0];

    // write the bytes of the string to an ArrayBuffer
    let ab = new ArrayBuffer(byteString.length);

    // create a view into the buffer
    let ia = new Uint8Array(ab);

    // set the bytes of the buffer to the correct values
    for (let i = 0; i < byteString.length; i++)
    {
        ia[i] = byteString.charCodeAt(i);
    }

    // write the ArrayBuffer to a blob, and you're done
    let blob = new Blob([ab], { "type": mimeString });
    return blob;
}

// change listeners
inUrlPort.onChange = function ()
{
    if (inUrlPort.get())
    {
        fromData = String(inUrlPort.get()).indexOf("data:") == 0;

        if (isLoading)
        {
            fromDataNew = String(inUrlPort.get()).indexOf("data:") == 0;
            const newUrl = fromDataNew ? inUrlPort.get() : op.patch.getFilePath(inUrlPort.get());
            if (newUrl !== currentFileUrl)
            {
                urlToLoadNext = newUrl;
            }
            else
            {
                urlToLoadNext = null;
            }

            clearAfterLoad = false;
            return;
        }

        invalidateOutPorts();
        const url = fromData ? inUrlPort.get() : op.patch.getFilePath(inUrlPort.get());

        loadAudioFile(url, fromData);
    }
    else
    {
        if (isLoading)
        {
            clearAfterLoad = true;
            return;
        }
        invalidateOutPorts();
        op.setUiError("wavFormat", null);
        op.setUiError("failedLoading", null);
    }
};

fileReader.onloadend = () =>
{
    arrayBuffer = fileReader.result;
    cgl.patch.loading.finished(loadingIdDataURL);
    if (cgl.patch.isEditorMode()) gui.jobs().finish("loadaudio" + loadingIdDataURL);
    loadFromDataURL();
};

function loadFromDataURL()
{
    if (arrayBuffer) audioCtx.decodeAudioData(arrayBuffer, onLoadFinished, onLoadFailed);
}

function onLoadFinished(buffer)
{
    isLoading = false;
    outLoading.set(isLoading);

    if (clearAfterLoad)
    {
        invalidateOutPorts();
        clearAfterLoad = false;
        return;
    }

    if (urlToLoadNext)
    {
        loadAudioFile(urlToLoadNext, fromDataNew);
        urlToLoadNext = null;
    }
    else
    {
        currentBuffer = buffer;
        lengthPort.set(buffer.length);
        durationPort.set(buffer.duration);
        numberOfChannelsPort.set(buffer.numberOfChannels);
        sampleRatePort.set(buffer.sampleRate);
        audioBufferPort.set(buffer);
        op.setUiError("failedLoading", null);
        finishedLoadingPort.set(true);
        fromData = false;
        fromDataNew = false;
    }
}

function onLoadFailed(e)
{
    // op.logError("Error: Loading audio file failed: ", e);
    op.setUiError("failedLoading", "The audio file could not be loaded. Make sure the right file URL is used.", 2);
    isLoading = false;
    invalidateOutPorts();
    outLoading.set(isLoading);
    currentBuffer = null;

    if (urlToLoadNext)
    {
        loadAudioFile(urlToLoadNext, fromDataNew);
        urlToLoadNext = null;
    }
}

function invalidateOutPorts()
{
    lengthPort.set(0);
    durationPort.set(0);
    numberOfChannelsPort.set(0);
    sampleRatePort.set(0);

    audioBufferPort.set(null);

    finishedLoadingPort.set(false);
}


};

Ops.WebAudio.AudioBuffer_v2.prototype = new CABLES.Op();
CABLES.OPS["5f1d6a2f-1c04-4744-b0fb-910825beceee"]={f:Ops.WebAudio.AudioBuffer_v2,objName:"Ops.WebAudio.AudioBuffer_v2"};




// **************************************************************
// 
// Ops.WebAudio.AudioBufferPlayer_v2
// 
// **************************************************************

Ops.WebAudio.AudioBufferPlayer_v2 = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
// input ports
const audioBufferPort = op.inObject("Audio Buffer", null, "audioBuffer");
const playPort = op.inBool("Start / Stop", false);

const loopPort = op.inBool("Loop", false);
const inResetStart = op.inTriggerButton("Restart");
const offsetPort = op.inFloat("Offset", 0);
const playbackRatePort = op.inFloat("Playback Rate", 1);
const detunePort = op.inFloat("Detune", 0);

op.setPortGroup("Playback Controls", [playPort, loopPort, inResetStart]);
op.setPortGroup("Time Controls", [offsetPort]);
op.setPortGroup("Miscellaneous", [playbackRatePort, detunePort]);

// output ports
const audioOutPort = op.outObject("Audio Out", null, "audioNode");
const outPlaying = op.outBool("Is Playing", false);
const outLoading = op.outBool("Loading", false);

// vars
let source = null;
let isPlaying = false;
let hasEnded = false;
let pausedAt = null;
let startedAt = null;
let isLoading = false;

const audioCtx = CABLES.WEBAUDIO.createAudioContext(op);

const gainNode = audioCtx.createGain();

if (!audioBufferPort.isLinked())
{
    op.setUiError("inputNotConnected", "To be able to play back sound, you need to connect an AudioBuffer to this op.", 0);
}
else
{
    op.setUiError("inputNotConnected", null);
}

audioBufferPort.onLinkChanged = () =>
{
    if (!audioBufferPort.isLinked())
    {
        op.setUiError("inputNotConnected", "To be able to play back sound, you need to connect an AudioBuffer to this op.", 0);
    }
    else
    {
        op.setUiError("inputNotConnected", null);
    }
};

if (!audioOutPort.isLinked())
{
    op.setUiError("outputNotConnected", "To be able to hear sound playing, you need to connect this op to an Output op.", 0);
}
else
{
    op.setUiError("outputNotConnected", null);
}

audioOutPort.onLinkChanged = () =>
{
    if (!audioOutPort.isLinked())
    {
        op.setUiError("outputNotConnected", "To be able to hear sound playing, you need to connect this op to an Output op.", 0);
    }
    else
    {
        op.setUiError("outputNotConnected", null);
    }
};

// change listeners
audioBufferPort.onChange = function ()
{
    if (audioBufferPort.get()) createAudioBufferSource();
    else
    {
        if (isLoading)
        {
            isLoading = false;
            outLoading.set(isLoading);
        }

        if (isPlaying)
        {
            stop(0);
            source.buffer = null;
            source = null;
        }
    }
};

playPort.onChange = function ()
{
    if (!audioBufferPort.get()) return;

    if (!source)
    {
        if (!isLoading) createAudioBufferSource();
    }

    if (playPort.get())
    {
        const startTime = 0;
        start(startTime);
    }
    else
    {
        const stopTime = 0;
        stop(stopTime);
    }
};

loopPort.onChange = function ()
{
    if (source)
    {
        source.loop = !!loopPort.get();
    }
};

detunePort.onChange = setDetune;

function setDetune()
{
    if (!source) return;

    const detune = detunePort.get() || 0;
    if (source.detune)
    {
        source.detune.setValueAtTime(
            detune,
            audioCtx.currentTime
        );
    }
}

playbackRatePort.onChange = setPlaybackRate;

function setPlaybackRate()
{
    if (!source) return;

    const playbackRate = playbackRatePort.get() || 0;
    if (playbackRate >= source.playbackRate.minValue && playbackRate <= source.playbackRate.maxValue)
    {
        source.playbackRate.setValueAtTime(
            playbackRate,
            audioCtx.currentTime
        );
    }
}

let resetTriggered = false;
inResetStart.onTriggered = function ()
{
    if (!source) return;
    if (!audioBufferPort.get()) return;
    else
    {
        if (!(audioBufferPort.get() instanceof AudioBuffer)) return;
    }

    if (playPort.get())
    {
        if (isPlaying)
        {
            resetTriggered = true;
            stop(0);
        }
        else
        {
            start(0);
        }
    }
};

// functions
function createAudioBufferSource(dontStart = false)
{
    if (isLoading) return;
    if (!(audioBufferPort.get() instanceof AudioBuffer)) return;

    isLoading = true;
    outLoading.set(isLoading);

    if (source)
    {
        source.onended = null;

        if (source.buffer)
        {
            stop(0);
            source.disconnect(gainNode);
            source.buffer = null;
        }

        source = null;
    }

    source = audioCtx.createBufferSource();

    const buffer = audioBufferPort.get();

    if (!buffer)
    {
        isLoading = false;
        outLoading.set(isLoading);
        return;
    }

    source.buffer = buffer;
    source.onended = onPlaybackEnded;
    source.loop = loopPort.get();

    source.connect(gainNode);
    setPlaybackRate();
    setDetune();
    audioOutPort.set(gainNode);

    isLoading = false;
    outLoading.set(isLoading);

    if (resetTriggered)
    {
        start(0);
        resetTriggered = false;
        return;
    }

    if (playPort.get() && !dontStart)
    {
        // if (!isPlaying)
        start(0);
    }
}

let timeOuting = false;
let timerId = null;

offsetPort.onChange = () =>
{
    if (offsetPort.get() >= 0) op.setUiError("offsetNegative", null);
    else
    {
        op.setUiError("offsetNegative", "Offset cannot be negative. Setting to 0.", 1);
    }

    if (source)
    {
        if (source.buffer)
        {
            if (offsetPort.get() > source.buffer.duration)
            {
                op.setUiError("offsetTooLong", "Your offset value is higher than the total time of your audio file. Please decrease the duration to be able to hear sound when playing back your buffer.", 1);
            }
            else
            {
                op.setUiError("offsetTooLong", null);
            }
        }
    }
};

function start(time)
{
    try
    {
        if (source)
        {
            let offset = Math.max(0, offsetPort.get());
            source.start(time, offset); // 0 = now

            isPlaying = true;
            hasEnded = false;
            outPlaying.set(true);
        }
        else
        {
            op.log("start() but no src...");
        }
    }
    catch (e)
    {
        op.log("Error on start: ", e.message);
        outPlaying.set(false);

        isPlaying = false;
    }
}

function recreateBuffer()
{
    let dontStart = !loopPort.get();
    createAudioBufferSource(dontStart);
}

function stop(time)
{
    try
    {
        if (source)
        {
            source.stop();
            if (!resetTriggered) recreateBuffer();
        }

        isPlaying = false;
        outPlaying.set(false);
    }
    catch (e)
    {
        op.setUiError(e);
        outPlaying.set(false);
    }
}

function onPlaybackEnded()
{
    if (loopPort.get())
    {
        isPlaying = true;
        hasEnded = false;
    }
    else
    {
        isPlaying = false;
        hasEnded = true;
    }
    outPlaying.set(isPlaying);

    recreateBuffer();
}


};

Ops.WebAudio.AudioBufferPlayer_v2.prototype = new CABLES.Op();
CABLES.OPS["3abd0dbb-eeee-4c65-ae31-b8bc2345e2d5"]={f:Ops.WebAudio.AudioBufferPlayer_v2,objName:"Ops.WebAudio.AudioBufferPlayer_v2"};




// **************************************************************
// 
// Ops.WebAudio.Output_v2
// 
// **************************************************************

Ops.WebAudio.Output_v2 = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    inAudio = op.inObject("Audio In", null, "audioNode"),
    inGain = op.inFloatSlider("Volume", 1),
    inMute = op.inBool("Mute", false),
    inShowSusp = op.inBool("Show Audio Suspended Button", true),
    outVol = op.outNumber("Current Volume", 0),
    outState = op.outString("Context State", "unknown");

op.setPortGroup("Volume Settings", [inMute, inGain]);

let isSuspended = false;
let audioCtx = CABLES.WEBAUDIO.createAudioContext(op);
let gainNode = audioCtx.createGain();
const destinationNode = audioCtx.destination;
let oldAudioIn = null;
let connectedToOut = false;

inMute.onChange = () =>
{
    mute(inMute.get());
    updateStateError();
};

inGain.onChange = setVolume;
op.onMasterVolumeChanged = setVolume;

let pauseId = op.patch.on("pause", setVolume);
let resumeId = op.patch.on("resume", setVolume);

audioCtx.addEventListener("statechange", updateStateError);
inShowSusp.onChange = updateAudioStateButton;

updateStateError();
updateAudioStateButton();

op.onDelete = () =>
{
    if (gainNode) gainNode.disconnect();
    gainNode = null;
    if (CABLES.interActionNeededButton) CABLES.interActionNeededButton.remove("audiosuspended");
    if (pauseId) op.patch.off(pauseId);
    if (resumeId) op.patch.off(resumeId);
};

inAudio.onChange = function ()
{
    if (!inAudio.get())
    {
        if (oldAudioIn)
        {
            try
            {
                if (oldAudioIn.disconnect)
                {
                    oldAudioIn.disconnect(gainNode);
                }
            }
            catch (e)
            {
                op.logError(e);
            }
        }

        op.setUiError("multipleInputs", null);

        if (connectedToOut)
        {
            if (gainNode)gainNode.disconnect(destinationNode);
            connectedToOut = false;
        }
    }
    else
    {
        if (inAudio.links.length > 1) op.setUiError("multipleInputs", "You have connected multiple inputs. It is possible that you experience unexpected behaviour. Please use a Mixer op to connect multiple audio streams.", 1);
        else op.setUiError("multipleInputs", null);

        if (inAudio.get().connect) inAudio.get().connect(gainNode);
    }

    oldAudioIn = inAudio.get();

    if (!connectedToOut)
    {
        if (gainNode)gainNode.connect(destinationNode);
        connectedToOut = true;
    }

    setVolume();
};

function setVolume(fromMute)
{
    const masterVolume = op.patch.config.masterVolume || 0;

    let volume = inGain.get() * masterVolume;

    if (op.patch._paused || inMute.get()) volume = 0;

    let addTime = 0.05;
    if (fromMute) addTime = 0.2;

    volume = CABLES.clamp(volume, 0, 1);

    if (!gainNode)
        op.logError("gainNode undefined");

    if (gainNode) gainNode.gain.linearRampToValueAtTime(volume, audioCtx.currentTime + addTime);

    outVol.set(volume);
}

function mute(b)
{
    if (b)
    {
        if (audioCtx.state === "suspended")
        { // make sure that when audio context is suspended node will also be muted
            // this prevents the initial short sound burst being heard when context is suspended
            // and started from user interaction
            // also note, we have to cancle the already scheduled values as we have no influence over
            // the order in which onchange handlers are executed

            if (gainNode)
            {
                gainNode.gain.cancelScheduledValues(audioCtx.currentTime);
                gainNode.gain.value = 0;
                gainNode.gain.setValueAtTime(0, audioCtx.currentTime);
            }

            outVol.set(0);

            return;
        }
    }

    setVolume(true);
}

function updateStateError()
{
    outState.set(audioCtx.state);
    op.logVerbose("audioCtx.state change", audioCtx.state);

    op.setUiError("ctxSusp", null);
    if (audioCtx.state == "suspended")
    {
        const errorText = "Your Browser suspended audio context, use playButton op to play audio after a user interaction";
        let level = 1;
        if (inMute.get()) level = 0;
        op.setUiError("ctxSusp", errorText, level);
    }

    updateAudioStateButton();
}

function updateAudioStateButton()
{
    if (audioCtx.state == "suspended")
    {
        mute(true);
        if (inShowSusp.get())
        {
            isSuspended = true;

            if (CABLES.interActionNeededButton)
            {
                CABLES.interActionNeededButton.add(op.patch, "audiosuspended", () =>
                {
                    if (audioCtx && audioCtx.state == "suspended")
                    {
                        audioCtx.resume();
                        if (CABLES.interActionNeededButton)CABLES.interActionNeededButton.remove("audiosuspended");
                    }
                });
            }
        }
        else
        {
            if (CABLES.interActionNeededButton)CABLES.interActionNeededButton.remove("audiosuspended");
        }
    }
    else
    {
        if (CABLES.interActionNeededButton)CABLES.interActionNeededButton.remove("audiosuspended");

        if (isSuspended)
        {
            op.log("was suspended - set vol");
            setVolume(true);
        }
    }
}


};

Ops.WebAudio.Output_v2.prototype = new CABLES.Op();
CABLES.OPS["90b95403-b0c4-4980-ab3b-b6c354771c81"]={f:Ops.WebAudio.Output_v2,objName:"Ops.WebAudio.Output_v2"};




// **************************************************************
// 
// Ops.TimeLine.TimeLineControls
// 
// **************************************************************

Ops.TimeLine.TimeLineControls = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const plauPause = op.outBoolNum("Play/Stop");
const time = op.outNumber("time");

op.patch.timer.on("playPause", seek);
op.patch.timer.on("timeChange", seek);

function seek()
{
    plauPause.set(false);

    setTimeout(function ()
    {
        time.set(op.patch.timer.getTime());
        plauPause.set(op.patch.timer.isPlaying());
    }, 10);
}


};

Ops.TimeLine.TimeLineControls.prototype = new CABLES.Op();
CABLES.OPS["53cb7b1a-56c7-405f-b427-12db78fbfd2f"]={f:Ops.TimeLine.TimeLineControls,objName:"Ops.TimeLine.TimeLineControls"};




// **************************************************************
// 
// Ops.TimeLine.TimeLinePlay
// 
// **************************************************************

Ops.TimeLine.TimeLinePlay = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const
    play = op.inTriggerButton("Play"),
    pause = op.inTriggerButton("Pause"),
    next = op.outTrigger("Next");

play.onTriggered = function ()
{
    op.patch.timer.play();
    next.trigger();
};

pause.onTriggered = function ()
{
    op.patch.timer.pause();
    next.trigger();
};


};

Ops.TimeLine.TimeLinePlay.prototype = new CABLES.Op();
CABLES.OPS["fc75b841-a55f-4474-8746-61218588598d"]={f:Ops.TimeLine.TimeLinePlay,objName:"Ops.TimeLine.TimeLinePlay"};




// **************************************************************
// 
// Ops.WebAudio.AudioAnalyzer_v2
// 
// **************************************************************

Ops.WebAudio.AudioAnalyzer_v2 = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
const clamp = (val, min, max) => { return Math.min(Math.max(val, min), max); };
const MAX_DBFS_RANGE_24_BIT = -144;
const MAX_DBFS_RANGE_26_BIT = -96;

let audioCtx = CABLES.WEBAUDIO.createAudioContext(op);

const inTrigger = op.inTrigger("Trigger In");

const analyser = audioCtx.createAnalyser();
analyser.smoothingTimeConstant = 0.3;
analyser.fftSize = 256;

const FFT_BUFFER_SIZES = [32, 64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384, 32768];

const audioIn = op.inObject("Audio In", null, "audioNode");
const inFFTSize = op.inDropDown("FFT size", FFT_BUFFER_SIZES, 256);
const inSmoothing = op.inFloatSlider("Smoothing", 0.3);

const inRangeMin = op.inFloat("Min", -90);
const inRangeMax = op.inFloat("Max", 0);

op.setPortGroup("Inputs", [inTrigger, audioIn]);
op.setPortGroup("FFT Options", [inFFTSize, inSmoothing]);
op.setPortGroup("Range (in dBFS)", [inRangeMin, inRangeMax]);
const outTrigger = op.outTrigger("Trigger Out");
const audioOut = op.outObject("Audio Out", null, "audioNode");
const fftOut = op.outArray("FFT Array");
const ampOut = op.outArray("Waveform Array");
const frequencyOut = op.outArray("Frequencies by Index Array");
const fftLength = op.outNumber("Array Length");
const avgVolumePeak = op.outNumber("Average Volume");
const avgVolumeAmp = op.outNumber("Average Volume Time-Domain");
const avgVolumeRMS = op.outNumber("RMS Volume");
let updating = false;

let fftBufferLength = analyser.frequencyBinCount;
let fftDataArray = new Uint8Array(fftBufferLength);
let ampDataArray = new Uint8Array(fftBufferLength);
let frequencyArray = [];
frequencyArray.length = fftBufferLength;
let oldAudioIn = null;

audioIn.onChange = () =>
{
    if (audioIn.get())
    {
        const audioNode = audioIn.get();
        if (audioNode.connect)
        {
            audioNode.connect(analyser);
            audioOut.set(analyser);
        }
    }
    else
    {
        if (oldAudioIn)
        {
            if (oldAudioIn.disconnect) oldAudioIn.disconnect(analyser);
            audioOut.set(null);
        }
    }

    oldAudioIn = audioIn.get();
};

function updateAnalyser()
{
    try
    {
        const fftSize = Number(inFFTSize.get());
        analyser.smoothingTimeConstant = clamp(inSmoothing.get(), 0.0, 1.0);
        analyser.fftSize = fftSize;
        const minDecibels = clamp(inRangeMin.get(), MAX_DBFS_RANGE_24_BIT, -0.0001);
        const maxDecibels = Math.max(inRangeMax.get(), analyser.minDecibels + 0.0001);
        analyser.minDecibels = minDecibels;
        analyser.maxDecibels = maxDecibels;

        if (minDecibels < MAX_DBFS_RANGE_24_BIT)
        {
            op.setUiError("maxDbRangeMin",
                "Your minimum is below the lowest possible dBFS value: "
                + MAX_DBFS_RANGE_24_BIT
                + "dBFS. To make sure your analyser data is correct, try increasing the minimum.",
                1
            );
        }
        else
        {
            op.setUiError("maxDbRangeMin", null);
        }

        if (maxDecibels > 0)
        {
            op.setUiError("maxDbRangeMax", "Your maximum is above 0 dBFS. As digital signals only go to 0 dBFS and not above, you should use 0 as your maximum.", 1);
        }
        else
        {
            op.setUiError("maxDbRangeMax", null);
        }

        if (FFT_BUFFER_SIZES.indexOf(fftSize) >= 6)
        {
            op.setUiError("highFftSize", "Please be careful with high FFT sizes as they can slow down rendering. Check the profiler to see if performance is impacted.", 1);
        }
        else
        {
            op.setUiError("highFftSize", null);
        }
    }
    catch (e)
    {
        op.log(e);
    }
}

inFFTSize.onChange = inSmoothing.onChange
= inRangeMin.onChange = inRangeMax.onChange = () =>
    {
        if (inTrigger.isLinked()) updating = true;
        else updateAnalyser();
    };

inTrigger.onTriggered = function ()
{
    if (updating)
    {
        updateAnalyser();
        updating = false;
    }

    if (fftBufferLength != analyser.frequencyBinCount)
    {
        fftBufferLength = analyser.frequencyBinCount;
        fftDataArray = new Uint8Array(fftBufferLength);
        ampDataArray = new Uint8Array(fftBufferLength);

        frequencyArray = [];
        frequencyArray.length = fftBufferLength;

        for (let index = 0; index < fftBufferLength; index += 1)
        {
            frequencyArray[index] = Math.round(index * audioCtx.sampleRate / (analyser.fftSize * 2));
        }

        frequencyOut.set(null);
        frequencyOut.set(frequencyArray);
    }

    if (!fftDataArray) return;
    if (!ampDataArray) return;

    const fftSize = Number(inFFTSize.get());

    try
    {
        analyser.getByteFrequencyData(fftDataArray);
        analyser.getByteTimeDomainData(ampDataArray);

        let values = 0;
        let peakValues = 0;
        let ampPeakValues = 0;
        for (let i = 0; i < analyser.frequencyBinCount; i++)
        {
            values += ampDataArray[i] * ampDataArray[i];
            peakValues += fftDataArray[i];
            ampPeakValues += ampDataArray[i];
        }

        const peakAverage = peakValues / analyser.frequencyBinCount;
        const peakAmpAverage = ampPeakValues / analyser.frequencyBinCount;

        avgVolumePeak.set(peakAverage / 128);
        avgVolumeAmp.set(peakAmpAverage / 256);

        let rms = Math.sqrt(values / analyser.frequencyBinCount);
        rms = Math.max(rms, rms * inSmoothing.get());
        avgVolumeRMS.set(rms / 256);
    }
    catch (e) { op.log(e); }

    // fftOut.set(null);
    fftOut.setRef(fftDataArray);

    // ampOut.set(null);
    ampOut.setRef(ampDataArray);

    fftLength.set(fftDataArray.length);
    outTrigger.trigger();
};


};

Ops.WebAudio.AudioAnalyzer_v2.prototype = new CABLES.Op();
CABLES.OPS["ff9bf46c-676f-4aa1-95bf-5595a6813ed7"]={f:Ops.WebAudio.AudioAnalyzer_v2,objName:"Ops.WebAudio.AudioAnalyzer_v2"};



window.addEventListener('load', function(event) {
CABLES.jsLoaded=new Event('CABLES.jsLoaded');
document.dispatchEvent(CABLES.jsLoaded);
});
