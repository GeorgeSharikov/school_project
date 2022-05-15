import Header from "@editorjs/header";
import ImageTool from "@editorjs/image";
import Quote from "@editorjs/quote";
import Warning from "@editorjs/warning";
import Delimiter from "@editorjs/delimiter";
import List from "@editorjs/list";
import Marker from "@editorjs/marker";
import Embed from "@editorjs/embed";
import LinkTool from "@editorjs/link";
import Paragraph from '@editorjs/paragraph'
import {BASE_SERVER_URL} from "./url.js";

const UPLOAD_URL = `${BASE_SERVER_URL}static`

export const settings = {
    holder: 'editorjs',
    placeholder: 'Нажмите Tab для выбора инструмента',
    tools: {
        paragraph: {
            class: Paragraph,
            placeholder: 'Нажмите Tab для выбора инструмента',
            inlineToolbar: true,
        },
        header: {
            class: Header,
            inlineToolbar: true,
            config: {
                placeholder: 'Заголовок',
                defaultLevel: 1
            }
        },
        image: {
            class: ImageTool,
            inlineToolbar: true,
            config: {
                endpoints: {
                    byFile: `${UPLOAD_URL}/uploadImage`
                }
            }
        },
        quote: {
            class: Quote,
            inlineToolbar: true,
            config: {
                quotePlaceholder: 'Введите цитату',
                captionPlaceholder: 'Автор Цитаты',
            },
        },
        warning: {
            class: Warning,
            inlineToolbar: true,
            config: {
                titlePlaceholder: 'Загаловок',
                messagePlaceholder: 'Сообщение',
            }
        },
        delimiter: Delimiter,
        list: {
            class: List,
            inlineToolbar: true,
        },
        Marker: {
            class: Marker,
            inlineToolbar: true,
        },
        embed: {
            class: Embed,
            inlineToolbar: true
        },
        linkTool: {
            class: LinkTool,
        }
    },
    i18n: {
        messages:{
            ui:{
                "inlineToolbar": {
                    "converter": {
                        "Convert to": "Конвертировать в"
                    }
                }
            },
            toolNames: {
                "Text": "Параграф",
                "Heading": "Заголовок",
                "List": "Список",
                "Warning": "Примечание",
                "Checklist": "Чеклист",
                "Quote": "Цитата",
                "Delimiter": "Разделитель",
                "Link": "Ссылка",
                "Marker": "Маркер",
                "Bold": "Полужирный",
                "Italic": "Курсив",
                "InlineCode": "Моноширинный",
                "Image": "Изображение или видео",
            },
            tools: {
                "link": {
                    "Add a link": "Вставьте ссылку"
                }
            }
        }
    },
}