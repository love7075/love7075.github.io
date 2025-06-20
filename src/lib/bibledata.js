

export const versionInfo = {
    "zyb": "直译版",
    "hhb": "和合本",
    "kjv": "KJV版"

}
export const bookMap = [
    { key: 'gen', name: '创世纪', chapters: 50, chunk: 1 },
    { key: 'exo', name: '出埃及记', chapters: 40, chunk: 1 },
    { key: 'lvs', name: '利未记', chapters: 27, chunk: 1 },
    { key: 'num', name: '民数记', chapters: 36, chunk: 2 },
    { key: 'deu', name: '申命记', chapters: 34, chunk: 2 },
    { key: 'jos', name: '约书亚记', chapters: 24, chunk: 2 },
    { key: 'jdg', name: '士师记', chapters: 21, chunk: 3 },
    { key: 'rut', name: '路得记', chapters: 4, chunk: 3 },
    { key: '1sa', name: '撒母耳记上', chapters: 31, chunk: 3 },
    { key: '2sa', name: '撒母耳记下', chapters: 24, chunk: 3 },
    { key: '1ki', name: '列王纪上', chapters: 22, chunk: 3 },
    { key: '2ki', name: '列王纪下', chapters: 25, chunk: 3 },
    { key: '1ch', name: '历代志上', chapters: 29, chunk: 4 },
    { key: '2ch', name: '历代志下', chapters: 36, chunk: 4 },
    { key: 'ezr', name: '以斯拉记', chapters: 10, chunk: 4 },
    { key: 'neh', name: '尼希米记', chapters: 13, chunk: 4 },
    { key: 'est', name: '以斯帖记', chapters: 10, chunk: 4 },
    { key: 'job', name: '约伯记', chapters: 42, chunk: 4 },
    { key: 'psa', name: '诗篇', chapters: 150, chunk: 5 },
    { key: 'pro', name: '箴言', chapters: 31, chunk: 6 },
    { key: 'ecc', name: '传道书', chapters: 12, chunk: 6 },
    { key: 'sng', name: '雅歌', chapters: 8, chunk: 6 },
    { key: 'isa', name: '以赛亚书', chapters: 66, chunk: 6 },
    { key: 'jer', name: '耶利米书', chapters: 52, chunk: 6 },
    { key: 'lam', name: '耶利米哀歌', chapters: 5, chunk: 6 },
    { key: 'ezk', name: '以西结书', chapters: 48, chunk: 7 },
    { key: 'dan', name: '但以理书', chapters: 12, chunk: 7 },
    { key: 'hos', name: '何西阿书', chapters: 14, chunk: 7 },
    { key: 'jol', name: '约珥书', chapters: 3, chunk: 7 },
    { key: 'amo', name: '阿摩司书', chapters: 9, chunk: 7 },
    { key: 'oba', name: '俄巴底亚书', chapters: 1, chunk: 7 },
    { key: 'jon', name: '约拿书', chapters: 4, chunk: 7 },
    { key: 'mic', name: '弥迦书', chapters: 7, chunk: 7 },
    { key: 'nam', name: '那鸿书', chapters: 3, chunk: 7 },
    { key: 'hab', name: '哈巴谷书', chapters: 3, chunk: 7 },
    { key: 'zep', name: '西番雅书', chapters: 3, chunk: 7 },
    { key: 'hag', name: '哈该书', chapters: 2 },
    { key: 'zec', name: '撒迦利亚书', chapters: 14, chunk: 7 },
    { key: 'mal', name: '玛拉基书', chapters: 4, chunk: 7 },
    { key: 'mat', name: '马太福音', chapters: 28, chunk: 8 },
    { key: 'mrk', name: '马可福音', chapters: 16, chunk: 8 },
    { key: 'luk', name: '路加福音', chapters: 24, chunk: 8 },
    { key: 'jhn', name: '约翰福音', chapters: 21, chunk: 8 },
    { key: 'act', name: '使徒行传', chapters: 28, chunk: 8 },
    { key: 'rom', name: '罗马书', chapters: 16, chunk: 9 },
    { key: '1co', name: '哥林多前书', chapters: 16, chunk: 9 },
    { key: '2co', name: '哥林多后书', chapters: 13, chunk: 9 },
    { key: 'gal', name: '加拉太书', chapters: 6, chunk: 9 },
    { key: 'eph', name: '以弗所书', chapters: 6, chunk: 9 },
    { key: 'php', name: '腓立比书', chapters: 4, chunk: 9 },
    { key: 'col', name: '歌罗西书', chapters: 4, chunk: 9 },
    { key: '1th', name: '帖撒罗尼迦前书', chapters: 5, chunk: 9 },
    { key: '2th', name: '帖撒罗尼迦后书', chapters: 3, chunk: 9 },
    { key: '1ti', name: '提摩太前书', chapters: 6, chunk: 9 },
    { key: '2ti', name: '提摩太后书', chapters: 4, chunk: 9 },
    { key: 'tit', name: '提多书', chapters: 3, chunk: 9 },
    { key: 'phm', name: '腓利门书', chapters: 1, chunk: 9 },
    { key: 'heb', name: '希伯来书', chapters: 13, chunk: 9 },
    { key: 'jas', name: '雅各书', chapters: 5, chunk: 9 },
    { key: '1pe', name: '彼得前书', chapters: 5, chunk: 9 },
    { key: '2pe', name: '彼得后书', chapters: 3, chunk: 9 },
    { key: '1jn', name: '约翰一书', chapters: 5, chunk: 9 },
    { key: '2jn', name: '约翰二书', chapters: 1, chunk: 9 },
    { key: '3jn', name: '约翰三书', chapters: 1, chunk: 9 },
    { key: 'jud', name: '犹大书', chapters: 1, chunk: 9 },
    { key: 'rev', name: '启示录', chapters: 22, chunk: 9 }

];


export const bookList = Object.entries(bookMap).map(
    ([key, value]) => [key, value.name],
);



export function getPrepage(chapterId) {

    //chapterId ="hhb/gen/3"
    const url_parts = chapterId.split('/');
    const bookKey = url_parts[1];
    const currentChapter = parseInt(url_parts[2]);
    if (currentChapter > 0)
        return `/${url_parts[0]}/${bookKey}/${currentChapter - 1}`

    else {

        if (currentChapter == 0 && bookKey != bookMap[0].key) {
            const index = bookMap.findIndex((b) => b.key === bookKey);
            const preIndex = index - 1;
            const preBook = bookMap[preIndex];
            return `/${url_parts[0]}/${preBook.key}/${preBook.chapters}`
        }

    }
    return '';
}

export function getNextpage(chapterId) {
    //chapterId ="hhb/gen/3"
    const url_parts = chapterId.split('/');
    const bookKey = url_parts[1];
    const currentChapter = parseInt(url_parts[2]);
    const index = bookMap.findIndex((b) => b.key === bookKey);
    // console.log(bookMap[index].chapters)
    // console.log(currentChapter);
    if (currentChapter < bookMap[index].chapters)
        return `/${url_parts[0]}/${bookKey}/${currentChapter + 1}`

    else {
        if (currentChapter == bookMap[index].chapters && bookKey != bookMap[bookMap.length - 1].key) {
            const nextIndex = index + 1;
            const nextBook = bookMap[nextIndex];
            return `/${url_parts[0]}/${nextBook.key}/1`
        }

    }
    return '';
}
