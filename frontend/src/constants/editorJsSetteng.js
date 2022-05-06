import Header from "@editorjs/header";
import ImageTool from "@editorjs/image";
import Table from "@editorjs/table";
import Quote from "@editorjs/quote";
import Warning from "@editorjs/warning";
import Delimiter from "@editorjs/delimiter";
import List from "@editorjs/list";
import Marker from "@editorjs/marker";
import Embed from "@editorjs/embed";
import LinkTool from "@editorjs/link";
import Paragraph from '@editorjs/paragraph'

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
            endpoints: {
                byFile: 'http://localhost:3000/'
            }
        },
        table: {
            class: Table,
            inlineToolbar: true,
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

}