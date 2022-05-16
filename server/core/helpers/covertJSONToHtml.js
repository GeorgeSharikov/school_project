class ConvertToHTML{

    #insertToBaseParagraphDiv(text){
        return `<div class="I-island-a">${text}</div>`
    }

    #paragraph(data){
        const {text} = data
        let textP = `<p>${text}</p>`
        return this.#insertToBaseParagraphDiv(textP)
    }

    #insertImageToFigure(data){
        return `<figure class="figure-image">${data}</figure>`
    }
    // "data": {
    //     "file": {
    //         "url": "http://localhost:4000/api/static/images/ce61b342-bca2-414c-bc60-ec362fdb80e1.jpg"
    //     },
    //     "caption": "Центра антарктических исследований GAIAЦентра антарктических исследований GAIA",
    //     "withBorder": false,
    //     "stretched": false,
    //     "withBackground": false

    #image(data){

    }

    #createHeader(lvl, text){
        return `<h${lvl}>${text}</h${lvl}>`
    }

    #header(data){
        const {text, level} = data
        return this.#createHeader(level, text)
    }

    #createList(style, items){
        let list = ''
        for(const item of items) {
            list += `<li>${item}</li>\n`
        }
        return style === 'ordered'
            ? `<ol>${list}</ol>`
            : `<ul>${list}</ul>`
    }
    #list(data){
        const {style, items} = data
        const listText = this.#createList(style, items)
        return this.#insertToBaseParagraphDiv(listText)
    }

    #delimiter(){
        const text = '<div class="block-delimiter"></div>'
        return `<figure>
            ${this.#insertToBaseParagraphDiv(text)}
        </figure>`
    }
    #warning({title, message}){
        const text = `<div class="warning">
             <div class="warning_title">
                <span class="warning_sign">&#9757;</span>
                ${title}
              </div>
             <span class="warning_text">${message}</span>
        </div>`
        return this.#insertToBaseParagraphDiv(text)
    }

    #quote({text, caption, alignment}){
        const alignmentClass = alignment === 'left' ? 'quote' : 'quote quote_text_center'
        return `
        <figure>
            <div class="i-island-b">
                <blockquote class="${alignmentClass}">
                    <div class="quote_content">
                        <QuoteMarkSVG />
                        <div class="quote_text">
                            ${text}
                        </div>
                        <div class="quote_author">
                            ${caption}
                        </div>
                    </div>
                </blockquote>
            </div>
        </figure>`
    }
    convert({data, title}){
        const blocks = data["blocks"]
        let html = ''
        for(let {type, data} of blocks){
            console.log(type, data)
            switch (type) {
                case "paragraph":
                    html+=this.#paragraph(data)
                    break
                case "image":
                    html+=this.#image(data)
                    break
                case "header":
                    html+=this.#header(data)
                    break
                case "list":
                    html+=this.#list(data)
                    break
                case "delimiter":
                    html+=this.#delimiter()
                    break
                case "warning":
                    html+=this.#warning(data)
                    break
                case "quote":
                    html+=this.#quote(data)
                    break
            }
        }
        return `<div class="content">
                <h1 class="content_title">${title}</h1>
                <div class="content_main">
                   ${html}
                </div>
            </div>`
    }
}

export const JSONToHtml = new ConvertToHTML()
export const JSONDATA = {
    "data": {
        "time": 1652705914759,
        "blocks": [
            {
                "id": "wYE0Rx2MT3",
                "type": "paragraph",
                "data": {
                    "text": "&nbsp; <a href=\"https://www.youtube.com/\">Классов</a>, используемых в Java или Swift в качестве шаблонов или схем для создания объектов, в JavaScript не существует. В прототипном наследовании есть только объекты.Прототипное наследование может имитировать классическую модель наследования от классов. Для этого в ES6 было представлено ключевое слово class: синтаксический сахар для прототипного наследования.\n"
                }
            },
            {
                "id": "3vpwMagQTV",
                "type": "paragraph",
                "data": {
                    "text": "\nКлассов, используемых в Java или Swift в качестве шаблонов или схем для создания объектов, в JavaScript не существует. В прототипном наследовании есть только объекты.Прототипное наследование может имитировать классическую модель наследования от классов. Для этого в ES6 было представлено ключевое слово class: синтаксический сахар для прототипного наследования."
                }
            },
            {
                "id": "LT6s1wzg5D",
                "type": "image",
                "data": {
                    "file": {
                        "url": "http://localhost:4000/api/static/images/f3c673fc-ef34-481f-ac0d-134117b1be61.jpg"
                    },
                    "caption": "caption",
                    "withBorder": false,
                    "stretched": false,
                    "withBackground": false
                }
            },
            {
                "id": "JM8_5wHfkx",
                "type": "quote",
                "data": {
                    "text": "All roads lead to Rome",
                    "caption": "Unknown",
                    "alignment": "left"
                }
            },
            {
                "id": "p1ZPcHz7iW",
                "type": "delimiter",
                "data": {}
            },
            {
                "id": "q5qHJQ0Ymq",
                "type": "list",
                "data": {
                    "style": "ordered",
                    "items": [
                        "first",
                        "second",
                        "third",
                        "fourth"
                    ]
                }
            },
            {
                "id": "rM4JrQxwW5",
                "type": "warning",
                "data": {
                    "title": "Обратите внимание",
                    "message": "Будьте осторожны"
                }
            }
        ],
        "version": "2.24.3"
    },
    "title": "Header"
}