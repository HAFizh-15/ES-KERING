const About = (name) => new Promise((resolve, reject) => {
    let list = ` Halo ${name} 👋
- about *ES KERING BOT*

Bot ini merupakan program open-source yang dibuat menggunakan Javascript, kamu dapat menyalin, memodifikasi, mengembangkan, dan menerbitkan kembali dengan syarat tidak menghapus author utama dalam bot ini, dan diwajibkan menyantumkan nama author jika ingin mem-publish bot ini.

Dimohon untuk menggunakan seperlunya atau tidak berlebihan.

author: HAFIZH
    `
    resolve(list)
})

module.exports = About
