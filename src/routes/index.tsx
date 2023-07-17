import { RichTextRenderer } from "../components/rich-text-renderer";

export const SAMPLE_RICHTEXT_FIELD_DATA = {
  json: {
    content: [
      {
        attrs: {
          level: 1,
          textAlign: "left",
        },
        content: [
          {
            text: "heading 1",
            type: "text",
          },
        ],
        type: "heading",
      },
      {
        attrs: {
          textAlign: "left",
        },
        type: "paragraph",
      },
      {
        attrs: {
          level: 2,
          textAlign: "left",
        },
        content: [
          {
            text: "heading 2",
            type: "text",
          },
        ],
        type: "heading",
      },
      {
        attrs: {
          textAlign: "left",
        },
        type: "paragraph",
      },
      {
        attrs: {
          level: 3,
          textAlign: "left",
        },
        content: [
          {
            text: "heading 3",
            type: "text",
          },
        ],
        type: "heading",
      },
      {
        attrs: {
          textAlign: "left",
        },
        type: "paragraph",
      },
      {
        attrs: {
          level: 4,
          textAlign: "left",
        },
        content: [
          {
            text: "heading 4",
            type: "text",
          },
        ],
        type: "heading",
      },
      {
        attrs: {
          textAlign: "left",
        },
        type: "paragraph",
      },
      {
        attrs: {
          level: 5,
          textAlign: "left",
        },
        content: [
          {
            text: "heading 5",
            type: "text",
          },
        ],
        type: "heading",
      },
      {
        attrs: {
          textAlign: "left",
        },
        type: "paragraph",
      },
      {
        attrs: {
          level: 6,
          textAlign: "left",
        },
        content: [
          {
            text: "heading 6",
            type: "text",
          },
        ],
        type: "heading",
      },
      {
        attrs: {
          textAlign: "left",
        },
        content: [
          {
            type: "hardBreak",
          },
          {
            text: "Something with ",
            type: "text",
          },
          {
            marks: [
              {
                type: "bold",
              },
            ],
            text: "bold",
            type: "text",
          },
        ],
        type: "paragraph",
      },
      {
        attrs: {
          textAlign: "left",
        },
        content: [
          {
            text: "Something with ",
            type: "text",
          },
          {
            marks: [
              {
                type: "italic",
              },
            ],
            text: "italic",
            type: "text",
          },
        ],
        type: "paragraph",
      },
      {
        attrs: {
          textAlign: "left",
        },
        content: [
          {
            text: "Something with ",
            type: "text",
          },
          {
            marks: [
              {
                type: "code",
              },
            ],
            text: "code",
            type: "text",
          },
        ],
        type: "paragraph",
      },
      {
        attrs: {
          textAlign: "left",
        },
        type: "paragraph",
      },
      {
        attrs: {
          textAlign: "left",
        },
        content: [
          {
            text: "Something left aligned",
            type: "text",
          },
        ],
        type: "paragraph",
      },
      {
        attrs: {
          textAlign: "center",
        },
        content: [
          {
            text: "something centerd",
            type: "text",
          },
        ],
        type: "paragraph",
      },
      {
        attrs: {
          textAlign: "right",
        },
        content: [
          {
            text: "Something right alrigned",
            type: "text",
          },
        ],
        type: "paragraph",
      },
      {
        attrs: {
          textAlign: "justify",
        },
        content: [
          {
            text: " ",
            type: "text",
          },
          {
            type: "hardBreak",
          },
          {
            text: "Something stretched",
            type: "text",
          },
        ],
        type: "paragraph",
      },
      {
        attrs: {
          textAlign: "left",
        },
        type: "paragraph",
      },
      {
        attrs: {
          textAlign: "left",
        },
        content: [
          {
            content: [
              {
                attrs: {
                  textAlign: "left",
                },
                content: [
                  {
                    text: "bullet list item 1",
                    type: "text",
                  },
                ],
                type: "paragraph",
              },
            ],
            type: "listItem",
          },
          {
            content: [
              {
                attrs: {
                  textAlign: "left",
                },
                content: [
                  {
                    text: "bullet list item 2",
                    type: "text",
                  },
                ],
                type: "paragraph",
              },
              {
                attrs: {
                  textAlign: "left",
                },
                content: [
                  {
                    content: [
                      {
                        attrs: {
                          textAlign: "left",
                        },
                        content: [
                          {
                            text: "bullet list item 2-2",
                            type: "text",
                          },
                        ],
                        type: "paragraph",
                      },
                    ],
                    type: "listItem",
                  },
                  {
                    content: [
                      {
                        attrs: {
                          textAlign: "left",
                        },
                        content: [
                          {
                            text: "bullet list item with ",
                            type: "text",
                          },
                          {
                            marks: [
                              {
                                type: "bold",
                              },
                            ],
                            text: "bold mark",
                            type: "text",
                          },
                        ],
                        type: "paragraph",
                      },
                    ],
                    type: "listItem",
                  },
                ],
                type: "bulletList",
              },
            ],
            type: "listItem",
          },
        ],
        type: "bulletList",
      },
      {
        attrs: {
          textAlign: "left",
        },
        type: "paragraph",
      },
      {
        attrs: {
          start: 1,
          textAlign: "left",
        },
        content: [
          {
            content: [
              {
                attrs: {
                  textAlign: "left",
                },
                content: [
                  {
                    text: "order list item 1",
                    type: "text",
                  },
                ],
                type: "paragraph",
              },
            ],
            type: "listItem",
          },
          {
            content: [
              {
                attrs: {
                  textAlign: "left",
                },
                content: [
                  {
                    text: "order list item 2",
                    type: "text",
                  },
                ],
                type: "paragraph",
              },
              {
                attrs: {
                  textAlign: "left",
                },
                content: [
                  {
                    content: [
                      {
                        attrs: {
                          textAlign: "left",
                        },
                        content: [
                          {
                            text: "order list item 2-2",
                            type: "text",
                          },
                        ],
                        type: "paragraph",
                      },
                    ],
                    type: "listItem",
                  },
                  {
                    content: [
                      {
                        attrs: {
                          textAlign: "left",
                        },
                        content: [
                          {
                            text: "order list item with ",
                            type: "text",
                          },
                          {
                            marks: [
                              {
                                type: "bold",
                              },
                            ],
                            text: "bold mark",
                            type: "text",
                          },
                        ],
                        type: "paragraph",
                      },
                    ],
                    type: "listItem",
                  },
                ],
                type: "bulletList",
              },
            ],
            type: "listItem",
          },
        ],
        type: "orderedList",
      },
      {
        attrs: {
          textAlign: "left",
        },
        type: "paragraph",
      },
      {
        content: [
          {
            content: [
              {
                attrs: {
                  colspan: 1,
                  colwidth: null,
                  rowspan: 1,
                },
                content: [
                  {
                    attrs: {
                      textAlign: "left",
                    },
                    content: [
                      {
                        text: "table header",
                        type: "text",
                      },
                    ],
                    type: "paragraph",
                  },
                ],
                type: "tableHeader",
              },
              {
                attrs: {
                  colspan: 1,
                  colwidth: null,
                  rowspan: 1,
                },
                content: [
                  {
                    attrs: {
                      textAlign: "left",
                    },
                    content: [
                      {
                        text: "table header 2",
                        type: "text",
                      },
                    ],
                    type: "paragraph",
                  },
                ],
                type: "tableHeader",
              },
              {
                attrs: {
                  colspan: 1,
                  colwidth: null,
                  rowspan: 1,
                },
                content: [
                  {
                    attrs: {
                      textAlign: "left",
                    },
                    content: [
                      {
                        text: "table header 3",
                        type: "text",
                      },
                    ],
                    type: "paragraph",
                  },
                ],
                type: "tableHeader",
              },
            ],
            type: "tableRow",
          },
          {
            content: [
              {
                attrs: {
                  colspan: 1,
                  colwidth: null,
                  rowspan: 1,
                },
                content: [
                  {
                    attrs: {
                      textAlign: "left",
                    },
                    content: [
                      {
                        text: "item normal",
                        type: "text",
                      },
                    ],
                    type: "paragraph",
                  },
                ],
                type: "tableCell",
              },
              {
                attrs: {
                  colspan: 1,
                  colwidth: null,
                  rowspan: 1,
                },
                content: [
                  {
                    attrs: {
                      level: 2,
                      textAlign: "left",
                    },
                    content: [
                      {
                        text: "item headline 2",
                        type: "text",
                      },
                    ],
                    type: "heading",
                  },
                ],
                type: "tableCell",
              },
              {
                attrs: {
                  colspan: 1,
                  colwidth: null,
                  rowspan: 1,
                },
                content: [
                  {
                    attrs: {
                      textAlign: "left",
                    },
                    type: "paragraph",
                  },
                ],
                type: "tableCell",
              },
            ],
            type: "tableRow",
          },
        ],
        type: "table",
      },
      {
        attrs: {
          textAlign: "left",
        },
        type: "paragraph",
      },
      {
        attrs: {
          textAlign: "left",
        },
        content: [
          {
            text: "some ",
            type: "text",
          },
          {
            marks: [
              {
                attrs: {
                  class: null,
                  href: "https://caisy.io",
                  target: "_blank",
                },
                type: "link",
              },
            ],
            text: "link ",
            type: "text",
          },
        ],
        type: "paragraph",
      },
      {
        attrs: {
          textAlign: "left",
        },
        type: "paragraph",
      },
      {
        attrs: {
          allow: null,
          allowfullscreen: null,
          frameborder: "0",
          height: "100px",
          src: "https://www.youtube.com/embed/__mSgDEOyv8",
          title: null,
          width: "100px",
        },
        type: "iframe",
      },
      {
        attrs: {
          textAlign: "left",
        },
        content: [
          {
            text: " asdfasdfasdf",
            type: "text",
          },
        ],
        type: "paragraph",
      },
      {
        content: [
          {
            attrs: {
              textAlign: "left",
            },
            content: [
              {
                text: "Some quote",
                type: "text",
              },
              {
                type: "hardBreak",
              },
            ],
            type: "paragraph",
          },
        ],
        type: "blockquote",
      },
      {
        attrs: {
          textAlign: "left",
        },
        content: [
          {
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum!",
            type: "text",
          },
        ],
        type: "paragraph",
      },
      {
        attrs: {
          textAlign: "left",
        },
        type: "paragraph",
      },
    ],
    type: "doc",
  },
};

export default function Home() {
  return (
    <main class="text-center mx-auto text-gray-700 p-4">
      <div class="flex justify-center align-center">
        <div class="prose lg:prose-xl">
          <RichTextRenderer node={SAMPLE_RICHTEXT_FIELD_DATA.json} />
        </div>
      </div>
    </main>
  );
}
