// import React, { useState } from "react";
// import { RichTextEditor } from "@mantine/tiptap";
// import { useEditor } from "@tiptap/react";
// import { Notifications } from "@mantine/notifications";
// import { Button } from "@mantine/core";
// import "@mantine/notifications/styles.css";
// import "@mantine/core/styles.css";
// import "@mantine/tiptap/styles.css";
// import Highlight from "@tiptap/extension-highlight";
// import StarterKit from "@tiptap/starter-kit";
// import Underline from "@tiptap/extension-underline";
// import TextAlign from "@tiptap/extension-text-align";
// import Superscript from "@tiptap/extension-superscript";
// import SubScript from "@tiptap/extension-subscript";
// import Link from "@tiptap/extension-link";

// const initialContent =
//   '<h2 style="text-align: center;">Welcome to Mantine rich text editor</h2><p><code>RichTextEditor</code> component focuses on usability and is designed to be as simple as possible to bring a familiar editing experience to regular users. <code>RichTextEditor</code> is based on <a href="https://tiptap.dev/" rel="noopener noreferrer" target="_blank">Tiptap.dev</a> and supports all of its features:</p><ul><li>General text formatting: <strong>bold</strong>, <em>italic</em>, <u>underline</u>, <s>strike-through</s> </li><li>Headings (h1-h6)</li><li>Sub and super scripts (<sup>&lt;sup /&gt;</sup> and <sub>&lt;sub /&gt;</sub> tags)</li><li>Ordered and bullet lists</li><li>Text align&nbsp;</li><li>And all <a href="https://tiptap.dev/extensions" target="_blank" rel="noopener noreferrer">other extensions</a></li></ul>';

// export default function TextEditor() {
//   const [editorContent, setEditorContent] = useState(initialContent);
//   const editor = useEditor({
//     extensions: [
//       StarterKit,
//       Underline,
//       Link,
//       Superscript,
//       SubScript,
//       Highlight,
//       TextAlign.configure({ types: ["heading", "paragraph"] }),
//     ],
//     content: editorContent,
//   });

//   const handleSave = () => {
//     const newContent = editor.getHTML();
//     setEditorContent(newContent);
//     Notifications.info("Changes saved successfully!");
//   };

//   return (
//     <RichTextEditor editor={editor} style={{width:"100%"}}>
//           <RichTextEditor.Toolbarsticky stickyOffset={60}style={{ width: "80%" }}>
//            <RichTextEditor.ControlsGroup>
//               <Button
//                 variant="filled"
//                 style={{ marginRight: "10px", color: "black" }}
//               >
//                 <RichTextEditor.Bold />
//               </Button>
//               <Button
//                 variant="filled"
//                 style={{ marginRight: "10px", color: "black" }}
//               >
//                 <RichTextEditor.Italic />
//               </Button>
//               <Button
//                 variant="filled"
//                 style={{ marginRight: "10px", color: "black" }}
//               >
//                 {" "}
//                 <RichTextEditor.Underline />
//               </Button>
//               <Button
//                 variant="filled"
//                 style={{ marginRight: "10px", color: "black" }}
//               >
//                 {" "}
//                 <RichTextEditor.Strikethrough />
//               </Button>
//               <Button
//                 variant="filled"
//                 style={{ marginRight: "10px", color: "black" }}
//               >
//                 {" "}
//                 <RichTextEditor.ClearFormatting />
//               </Button>
//               <Button
//                 variant="filled"
//                 style={{ marginRight: "10px", color: "black" }}
//               >
//                 {" "}
//                 <RichTextEditor.Highlight />
//               </Button>
//               <Button
//                 variant="filled"
//                 style={{ marginRight: "10px", color: "black" }}
//               >
//                 <RichTextEditor.Code />
//               </Button>
//             </RichTextEditor.ControlsGroup>

//             <RichTextEditor.ControlsGroup>
//               <Button
//                 variant="filled"
//                 style={{ marginRight: "10px", color: "black" }}
//               >
//                 {" "}
//                 <RichTextEditor.H1 />
//               </Button>
//               <Button
//                 variant="filled"
//                 style={{ marginRight: "10px", color: "black" }}
//               >
//                 {" "}
//                 <RichTextEditor.H1 />
//               </Button>
//               <Button
//                 variant="filled"
//                 style={{ marginRight: "10px", color: "black" }}
//               >
//                 {" "}
//                 <RichTextEditor.H3 />
//               </Button>
//               <Button
//                 variant="filled"
//                 style={{ marginRight: "10px", color: "black" }}
//               >
//                 {" "}
//                 <RichTextEditor.H4 />
//               </Button>
//             </RichTextEditor.ControlsGroup>

//             <RichTextEditor.ControlsGroup>
//               <Button
//                 variant="filled"
//                 style={{ marginRight: "10px", color: "black" }}
//               >
//                 {" "}
//                 <RichTextEditor.Blockquote />
//               </Button>
//               <Button
//                 variant="filled"
//                 style={{ marginRight: "10px", color: "black" }}
//               >
//                 {" "}
//                 <RichTextEditor.Hr />
//               </Button>
//               <Button
//                 variant="filled"
//                 style={{ marginRight: "10px", color: "black" }}
//               >
//                 {" "}
//                 <RichTextEditor.BulletList />
//               </Button>
//               <Button
//                 variant="filled"
//                 style={{ marginRight: "10px", color: "black" }}
//               >
//                 {" "}
//                 <RichTextEditor.OrderedList />
//               </Button>
//               <Button
//                 variant="filled"
//                 style={{ marginRight: "10px", color: "black" }}
//               >
//                 {" "}
//                 <RichTextEditor.Subscript />
//               </Button>
//               <Button
//                 variant="filled"
//                 style={{ marginRight: "10px", color: "black" }}
//               >
//                 {" "}
//                 <RichTextEditor.Superscript />
//               </Button>
//             </RichTextEditor.ControlsGroup>
//            <RichTextEditor.ControlsGroup>
//               <Button
//                 variant="filled"
//                 style={{ marginRight: "10px", color: "black" }}
//               >
//                 {" "}
//                 <RichTextEditor.Link />
//               </Button>
//               <Button
//                 variant="filled"
//                 style={{ marginRight: "10px", color: "black" }}
//               >
//                 {" "}
//                 <RichTextEditor.Unlink />
//               </Button>
//             </RichTextEditor.ControlsGroup>

//             <RichTextEditor.ControlsGroup>
//               <Button
//                 variant="filled"
//                 style={{ marginRight: "10px", color: "black" }}
//               >
//                 {" "}
//                 <RichTextEditor.AlignLeft />
//               </Button>
//               <Button
//                 variant="filled"
//                 style={{ marginRight: "10px", color: "black" }}
//               >
//                 {" "}
//                 <RichTextEditor.AlignCenter />
//               </Button>
//               <Button
//                 variant="filled"
//                 style={{ marginRight: "10px", color: "black" }}
//               >
//                 {" "}
//                 <RichTextEditor.AlignJustify />
//               </Button>
//               <Button
//                 variant="filled"
//                 style={{ marginRight: "10px", color: "black" }}
//               >
//                 {" "}
//                 <RichTextEditor.AlignRight />
//               </Button>
//             </RichTextEditor.ControlsGroup>

//             <RichTextEditor.ControlsGroup>
//               <Button
//                 variant="filled"
//                 style={{ marginRight: "10px", color: "black" }}
//               >
//                 {" "}
//                 <RichTextEditor.Undo />
//               </Button>
//               <Button
//                 variant="filled"
//                 style={{ marginRight: "10px", color: "black" }}
//               >
//                 {" "}
//                 <RichTextEditor.Redo />
//               </Button>
//             </RichTextEditor.ControlsGroup>
//           </RichTextEditor.Toolbar>
      
//       <div style={{width: "100%",display: "flex",justifyContent: "center",onFocus: { border: "none" },}}>
//         <div style={{ width: "80%", border: "1px solid black" }}>
//           <RichTextEditor.Content style={{ onFocus: { border: "none" } }} />
//         </div>
//       </div>
//       <div
//         style={{
//           width: "100%",
//           display: "flex",
//           justifyContent: "center",
//           marginTop: 20,
//         }}
//       >
//         <div
//           style={{
//             width: "80%",
//             display: "flex",
//             justifyContent: "space-between",
//           }}
//         >
//           <button>Cancel</button>
//           <button onClick={handleSave}>Save</button>
//         </div>
//       </div>
//     </RichTextEditor>
//   );
// }
