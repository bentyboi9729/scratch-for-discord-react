// const toolbox = {
//     kind: "categoryToolbox",
//     contents: [
//         {
//             kind: "category",
//             name: "Logic",
//             colour: "#5C81A6",
//             contents: [
//                 {
//                     kind: "block",
//                     type: "controls_if"
//                 },
//                 {
//                     kind: "block",
//                     type: "logic_compare"
//                 },
//                 {
//                     kind: "block",
//                     type: "logic_operation"
//                 },
//                 {
//                     kind: "block",
//                     type: "logic_negate"
//                 },
//                 {
//                     kind: "block",
//                     type: "logic_null"
//                 },
//                 {
//                     kind: "block",
//                     type: "logic_ternary"
//                 },
//             ],
//         },
//         {
//             kind: "category",
//             name: "Loops",
//             colour: "#5ba55b",
//             contents: [
//                 {
//                     kind: "block",
//                     type: "controls_repeat_ext"
//                 },
//                 {
//                     kind: "block",
//                     type: "controls_for",
//                     inputs: {
//                         FROM: {
//                             block: {
//                                 type: "math_number",
//                                 fields: {
//                                     NUM: 1
//                                 }
//                             }
//                         },
//                         TO: {
//                             block: {
//                                 type: "math_number",
//                                 fields: {
//                                     NUM: 10
//                                 }
//                             }
//                         },
//                         BY: {
//                             block: {
//                                 type: "math_number",
//                                 fields: {
//                                     NUM: 1
//                                 }
//                             }
//                         },
//                     }
//                 }
//             ]
//         },
//         {
//             kind: "category",
//             name: "Math",
//             colour: "#5CA65C",
//             contents: [
//                 {
//                     kind: "block",
//                     type: "math_round",
//                 },
//                 {
//                   kind: "block",
//                   type: "math_number",
//                 },
//             ]
//         }
//     ]
// }
const toolbox = `
<xml xmlns="https://developers.google.com/blockly/xml" id="toolbox" style="display: none">
    <category name="Logic" colour="#5b80a5">
        <block type="controls_if" />
        <block type="logic_compare">
            <field name="OP">EQ</field>
        </block>
        <block type="logic_operation">
            <field name="OP">AND</field>
        </block>
        <block type="logic_negate" />
        <block type="logic_boolean">
            <field name="BOOL">TRUE</field>
        </block>
        <block type="logic_null" />
        <block type="logic_ternary" />
    </category>
    <category name="Loops" colour="#5ba55b">
        <block type="controls_repeat_ext">
            <value name="TIMES">
                <shadow type="math_number">
                    <field name="NUM">10</field>
                </shadow>
            </value>
        </block>
        <block type="controls_whileUntil">
            <field name="MODE">WHILE</field>
        </block>
        <block type="controls_for">
            <field name="VAR" id="0D\`BNNIb2nl,{_^LQ.ro">i</field>
            <value name="FROM">
                <shadow type="math_number">
                    <field name="NUM">1</field>
                </shadow>
            </value>
            <value name="TO">
                <shadow type="math_number">
                    <field name="NUM">10</field>
                </shadow>
            </value>
            <value name="BY">
                <shadow type="math_number">
                    <field name="NUM">1</field>
                </shadow>
            </value>
        </block>
        <block type="controls_forEach">
            <field name="VAR" id="_U%=Z#c;|yP-K;;aC%(K">j</field>
        </block>
        <block type="controls_flow_statements">
            <field name="FLOW">BREAK</field>
        </block>
    </category>
</xml>
`
export default toolbox