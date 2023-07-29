import p1 from "/./src/assets/NewLabtops/laptop1.jpg"
import p2 from "/./src/assets/NewLabtops/laptop2.jpg"
import p3 from "/./src/assets/NewLabtops/laptop3.jpg"
import p4 from "/./src/assets/amazing-offer/amz-4.jpg"
import tv1 from "/./src/assets/tv/tv1.png"
import tv2 from "/./src/assets/tv/tv2.png"
import tv3 from "/./src/assets/tv/tv3.png"
import tv4 from "/./src/assets/tv/tv4.jpg"
import p7 from "/./src/assets/amazing-offer/amz-1.jpg"
import phone1 from "/./src/assets/phones/phon1.jpg"
import phone2 from "/./src/assets/phones/phon2.jpg"
import phone3 from "/./src/assets/phones/phon3.jpg"
import phone4 from "/./src/assets/phones/phon4.jpg"
import phone5 from "/./src/assets/phones/phon5.jpg"
import p8 from "/./src/assets/Watchs/watch6.jpg"
import p9 from "/./src/assets/Watchs/watch7.jpg"
import p10 from "/./src/assets/Watchs/watch1.png"
import p11 from "/./src/assets/Watchs/watch2.png"
import p12 from "/./src/assets/Watchs/watch3.png"
import p13 from "/./src/assets/Watchs/watch4.png"
import p14 from "/./src/assets/Watchs/watch5.png"




const datas = {
    allProducts: [
        { id: 1, title: "ساعت هوشمند هوآوی مدل GT2 Pro", price: 13000000, offerPercent: 15, src: p1, count: 25, isFavourite: false, cat: "labtop" },
        { id: 20, title: "ساعت هوشمند هوآوی مدل GT2 Pro", price: 14000000, offerPercent: 24, src: tv2, count: 71, isFavourite: false, cat: "Tv" },
        { id: 2, title: "ساعت هوشمند هوآوی مدل GT2 Pro", price: 8000000, offerPercent: 10, src: p2, count: 42, isFavourite: false, cat: "labtop" },
        { id: 16, title: "ساعت هوشمند هوآوی مدل GT2 Pro", price: 25000000, offerPercent: 20, src: phone1, count: 49, isFavourite: false, cat: "phone" },
        { id: 3, title: "ساعت هوشمند هوآوی مدل GT2 Pro", price: 21000000, offerPercent: 21, src: p3, count: 14, isFavourite: false, cat: "labtop" },
        { id: 19, title: "ساعت هوشمند هوآوی مدل GT2 Pro", price: 14000000, offerPercent: 24, src: tv3, count: 71, isFavourite: false, cat: "Tv" },
        { id: 12, title: "ساعت هوشمند هوآوی مدل GT2 Pro", price: 21000000, offerPercent: 21, src: p12, count: 19, isFavourite: false, cat: "watch" },
        { id: 5, title: "ساعت هوشمند هوآوی مدل GT2 Pro", price: 14000000, offerPercent: 24, src: tv4, count: 71, isFavourite: false, cat: "Tv" },
        { id: 15, title: "ساعت هوشمند هوآوی مدل GT2 Pro", price: 25000000, offerPercent: 20, src: phone4, count: 49, isFavourite: false, cat: "phone" },
        { id: 7, title: "ساعت هوشمند هوآوی مدل GT2 Pro", price: 13000000, offerPercent: 15, src: p7, count: 23, isFavourite: false, cat: "labtop" },
        { id: 18, title: "ساعت هوشمند هوآوی مدل GT2 Pro", price: 25000000, offerPercent: 20, src: phone5, count: 49, isFavourite: false, cat: "phone" },
        { id: 8, title: "ساعت هوشمند هوآوی مدل GT2 Pro", price: 8000000, offerPercent: 10, src: p8, count: 12, isFavourite: false, cat: "watch" },
        { id: 21, title: "ساعت هوشمند هوآوی مدل GT2 Pro", price: 14000000, offerPercent: 24, src: tv1, count: 71, isFavourite: false, cat: "Tv" },
        { id: 17, title: "ساعت هوشمند هوآوی مدل GT2 Pro", price: 25000000, offerPercent: 20, src: phone3, count: 49, isFavourite: false, cat: "phone" },
        { id: 9, title: "ساعت هوشمند هوآوی مدل GT2 Pro", price: 21000000, offerPercent: 21, src: p9, count: 15, isFavourite: false, cat: "watch" },
        { id: 10, title: "ساعت هوشمند هوآوی مدل GT2 Pro", price: 21000000, offerPercent: 21, src: p10, count: 24, isFavourite: false, cat: "watch" },
        { id: 4, title: "ساعت هوشمند هوآوی مدل GT2 Pro", price: 17000000, offerPercent: 15, src: p4, count: 17, isFavourite: false, cat: "labtop" },
        { id: 11, title: "ساعت هوشمند هوآوی مدل GT2 Pro", price: 21000000, offerPercent: 21, src: p11, count: 7, isFavourite: false, cat: "watch" },
        { id: 13, title: "ساعت هوشمند هوآوی مدل GT2 Pro", price: 21000000, offerPercent: 21, src: p13, count: 27, isFavourite: false, cat: "watch" },
        { id: 6, title: "ساعت هوشمند هوآوی مدل GT2 Pro", price: 25000000, offerPercent: 20, src: phone2, count: 49, isFavourite: false, cat: "phone" },
        { id: 14, title: "ساعت هوشمند هوآوی مدل GT2 Pro", price: 21000000, offerPercent: 21, src: p14, count: 16, isFavourite: false, cat: "watch" },
    ],
    mostSellInLastWeek: [
        { id: 20, title: "ساعت هوشمند هوآوی مدل GT2 Pro", price: 14000000, offerPercent: 24, src: tv2, count: 71, isFavourite: false, cat: "Tv" },
  { id: 16, title: "ساعت هوشمند هوآوی مدل GT2 Pro", price: 25000000, offerPercent: 20, src: phone1, count: 49, isFavourite: false, cat: "phone" },
        { id: 3, title: "ساعت هوشمند هوآوی مدل GT2 Pro", price: 21000000, offerPercent: 21, src: p3, count: 14, isFavourite: false, cat: "labtop" },
        { id: 4, title: "ساعت هوشمند هوآوی مدل GT2 Pro", price: 17000000, offerPercent: 15, src: p4, count: 17, isFavourite: false, cat: "labtop" },
        { id: 5, title: "ساعت هوشمند هوآوی مدل GT2 Pro", price: 14000000, offerPercent: 24, src: tv2, count: 71, isFavourite: false, cat: "Tv" },
    ],
    newProducts: [
        { id: 1, title: "ساعت هوشمند هوآوی مدل GT2 Pro", price: 21000000, offerPercent: 21, src: p13, count: 7, isFavourite: false, cat: "watch" },
        { id: 2, title: "ساعت هوشمند هوآوی مدل GT2 Pro", price: 21000000, offerPercent: 21, src: p14, count: 14, isFavourite: false, cat: "watch" },
        { id: 3, title: "ساعت هوشمند هوآوی مدل GT2 Pro", price: 17000000, offerPercent: 15, src: p4, count: 11, isFavourite: false, cat: "labtop" },
        { id: 4, title: "ساعت هوشمند هوآوی مدل GT2 Pro", price: 21000000, offerPercent: 21, src: p3, count: 10, isFavourite: false, cat: "labtop" },
        { id: 5, title: "ساعت هوشمند هوآوی مدل GT2 Pro", price: 17000000, offerPercent: 15, src: p4, count: 17, isFavourite: false, cat: "labtop" },
    ],
    newLabtops: [
        { id: 1, title: "ساعت هوشمند هوآوی مدل GT2 Pro", price: 13000000, offerPercent: 15, src: p1, count: 25, isFavourite: false, cat: "labtop" },
        { id: 2, title: "ساعت هوشمند هوآوی مدل GT2 Pro", price: 8000000, offerPercent: 10, src: p2, count: 42, isFavourite: false, cat: "labtop" },
        { id: 3, title: "ساعت هوشمند هوآوی مدل GT2 Pro", price: 21000000, offerPercent: 21, src: p3, count: 14, isFavourite: false, cat: "labtop" },
        { id: 4, title: "ساعت هوشمند هوآوی مدل GT2 Pro", price: 17000000, offerPercent: 15, src: p4, count: 17, isFavourite: false, cat: "labtop" },
        { id: 5, title: "ساعت هوشمند هوآوی مدل GT2 Pro", price: 13000000, offerPercent: 15, src: p7, count: 23, isFavourite: false, cat: "labtop" },
    ],
    newatchs:[
        { id: 1, title: "ساعت هوشمند هوآوی مدل GT2 Pro", price: 8000000, offerPercent: 10, src: p8, count: 12, isFavourite: false, cat: "watch" },
        { id: 2, title: "ساعت هوشمند هوآوی مدل GT2 Pro", price: 21000000, offerPercent: 21, src: p9, count: 15, isFavourite: false, cat: "watch" },
        { id: 3, title: "ساعت هوشمند هوآوی مدل GT2 Pro", price: 21000000, offerPercent: 21, src: p10, count: 24, isFavourite: false, cat: "watch" },
        { id: 4, title: "ساعت هوشمند هوآوی مدل GT2 Pro", price: 21000000, offerPercent: 21, src: p11, count: 7, isFavourite: false, cat: "watch" },
        { id: 5, title: "ساعت هوشمند هوآوی مدل GT2 Pro", price: 21000000, offerPercent: 21, src: p12, count: 19, isFavourite: false, cat: "watch" },
        { id: 6, title: "ساعت هوشمند هوآوی مدل GT2 Pro", price: 21000000, offerPercent: 21, src: p13, count: 27, isFavourite: false, cat: "watch" },
        { id: 7, title: "ساعت هوشمند هوآوی مدل GT2 Pro", price: 21000000, offerPercent: 21, src: p14, count: 16, isFavourite: false, cat: "watch" },
    ],
    offerCodes: [
        { code: "1234", precent: 50, expired: false },
        { code: "5678", precent: 30, expired: false },
        { code: "1111", precent: 10, expired: false },
        { code: "2222", precent: 10, expired: false },

    ]
}

export default datas