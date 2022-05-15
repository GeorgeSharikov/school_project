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
    // "id": "X_nRYH1aZQ",
    // "type": "warning",
    // "data": {
    //     "title": "",
    //     "message": "asd"
    // }
    #warning({title, message}){
        const text = `<div class="warning">
             <div><span>&#9757;</span>${title}</div>
             <span>${message}</span>
        </div>`
        return this.#insertToBaseParagraphDiv(text)
    }

    convert(json){
        const blocks = json["blocks"]
        let html = ''
        for(let {type, data} of blocks){
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
                    html+=this.#warning(data)
                    break
            }
        }
    }
}

export const JSONToHtml = new ConvertToHTML()
const JSON = {
    "data": {
        "time": 1652618449343,
        "blocks": [
            {
                "id": "02YKwsIkuH",
                "type": "paragraph",
                "data": {
                    "text": "Четырёхметровая окаменелость поможет изучить эмбриональное развитие ихтиозавров, живших на планете между 129 и 139 миллионами лет назад.Четырёхметровая окаменелость поможет изучить эмбриональное развитие ихтиозавров, живших на планете между 129 и 139 миллионами лет назад."
                }
            },
            {
                "id": "JYM4-bSAZH",
                "type": "image",

            },
            {
                "id": "552WfvJt3o",
                "type": "paragraph",
                "data": {
                    "text": "&nbsp; Чилийские учёные успешно&nbsp;<a href=\"https://www.reuters.com/lifestyle/science/intact-pregnant-ichthyosaur-fossil-recovered-patagonian-glacier-chile-2022-05-11/\" target=\"_blank\">извлекли</a>&nbsp;одну из самых полных в мире окаменелостей ихтиозавра с неповреждёнными эмбрионами на леднике Тиндалла в чилийской Патагонии. Древнюю беременную морскую рептилию специалисты назвали «Фионой».\n\nЧилийские учёные успешно&nbsp;<a href=\"https://www.reuters.com/lifestyle/science/intact-pregnant-ichthyosaur-fossil-recovered-patagonian-glacier-chile-2022-05-11/\" target=\"_blank\">извлекли</a>&nbsp;одну из самых полных в мире окаменелостей ихтиозавра с неповреждёнными эмбрионами на леднике Тиндалла в чилийской Патагонии. Древнюю беременную морскую рептилию специалисты назвали «Фионой».&nbsp;&nbsp;"
                }
            },
            {
                "id": "R686HCLhJQ",
                "type": "paragraph",
                "data": {
                    "text": "Окаменелость обнаружили более десяти лет назад, но экстремальные климатические условия, суровая местность и удалённость этого места сделали извлечение сложной логистической задачей. Учёные потратили 31 день на извлечение окаменелости, которую затем вывозили на вертолёте. В общей сложности палеонтологам пришлось извлечь пять блоков весом 200 килограммов, чтобы сохранить кости целыми.Окаменелость обнаружили более десяти лет назад, но экстремальные климатические условия, суровая местность и удалённость этого места сделали извлечение сложной логистической задачей. Учёные потратили 31 день на извлечение окаменелости, которую затем вывозили на вертолёте. В общей сложности палеонтологам пришлось извлечь пять блоков весом 200 килограммов, чтобы сохранить кости целыми."
                }
            },
            {
                "id": "0L1jQc5WYv",
                "type": "paragraph",
                "data": {
                    "text": "В леднике Тиндалла исследователи обнаружили почти сто скелетов ихтиозавров, что делает этот регион одним из самых многочисленных и хорошо сохранившихся местонахождений ихтиозавров на планете.В леднике Тиндалла исследователи обнаружили почти сто скелетов ихтиозавров, что делает этот регион одним из самых многочисленных и хорошо сохранившихся местонахождений ихтиозавров на планете."
                }
            },
            {
                "id": "YNDH_sv1lH",
                "type": "image",
                "data": {
                    "file": {
                        "url": "http://localhost:4000/api/static/images/c5b6332c-7f1e-4b2a-9dc4-86d36084ed5b.jpg"
                    },
                    "caption": "Центра антарктических исследований GAIAЦентра антарктических исследований GAIA",
                    "withBorder": false,
                    "stretched": false,
                    "withBackground": true
                }
            },
            {
                "id": "EXjc26oCrm",
                "type": "header",
                "data": {
                    "text": "фыввфывфыв",
                    "level": 2
                }
            },
            {
                "id": "ZheNI2Ps2R",
                "type": "delimiter",
                "data": {}
            },
            {

            },
            {
                "id": "X_nRYH1aZQ",
                "type": "warning",
                "data": {
                    "title": "",
                    "message": "asd"
                }
            },
            {
                "id": "a6yffaeZGX",
                "type": "quote",
                "data": {
                    "text": "All roads lead to Rome",
                    "caption": "Xi Jinping 10",
                    "alignment": "left"
                }
            }
        ],
        "version": "2.24.3"
    },
    "title": "Исследователи извлекли самую большую неповреждённую окаменелость беременного ихтиозавра в Чили."
}
JSONToHtml.convert(JSON)
