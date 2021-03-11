module.exports = function () {
    const Jsoup = org.jsoup.Jsoup;
    function getTitle(title, grade) {
        try {
            if(grade == undefined || grade == "" || grade == null) grade = 0;
            return JSON.parse(Jsoup.connect("https://linkkf.app/wp-json/wp/v2/posts?search=" + title).ignoreContentType(true).get().text())[grade].title.rendered;
        } catch (e) {
            return "존재하지 않거나 검색하는데 오류가 발생했습니다?"
        }
    }

    function getLink(title, grade) {
        try {
            if(grade == undefined || grade == "" || grade == null) grade = 0;
            return JSON.parse(Jsoup.connect("https://linkkf.app/wp-json/wp/v2/posts?search=" + title).ignoreContentType(true).get().text())[grade].link;
        } catch (e) {
            return "존재하지 않거나 검색하는데 오류가 발생했습니다?"
        }
    }

    function getId(title, grade) {
        try {
            if(grade == undefined || grade == "" || grade == null) grade = 0;
            return JSON.parse(Jsoup.connect("https://linkkf.app/wp-json/wp/v2/posts?search=" + title).ignoreContentType(true).get().text())[grade].id;
        } catch (e) {
            return "존재하지 않거나 검색하는데 오류가 발생했습니다?"
        }
    }

    function getUploadTime(title, grade) {
        try {
            if(grade == undefined || grade == "" || grade == null) grade = 0;
            return JSON.parse(Jsoup.connect("https://linkkf.app/wp-json/wp/v2/posts?search=" + title).ignoreContentType(true).get().text())[grade].date;
        } catch (e) {
            return "존재하지 않거나 검색하는데 오류가 발생했습니다?"
        }
    }

    return {
        getTitle: getTitle.bind(),
        getLink: getLink.bind(),
        getId: getId.bind(),
        getUploadTime: getUploadTime.bind()
    }
}()