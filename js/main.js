const data = [
  {
    src: 'https://picsum.photos/200/300?random=1',
    id: 1,
    first_name: "Sophronia",
    last_name: "Stoddart",
    email: "sstoddart0@howstuffworks.com",
    gender: "Female",
    ip_address: "80.215.124.45",
  },
  {
    src: 'https://picsum.photos/200/300?random=2',
    id: 2,
    first_name: "Elie",
    last_name: "Ashenhurst",
    email: "eashenhurst1@ameblo.jp",
    gender: "Female",
    ip_address: "68.37.253.68",
  },
  {
    src: 'https://picsum.photos/200/300?random=3',
    id: 3,
    first_name: "Elianore",
    last_name: "Eaddy",
    email: "eeaddy2@chronoengine.com",
    gender: "Female",
    ip_address: "67.148.137.105",
  },
  {
    src: 'https://picsum.photos/200/300?random=4',
    id: 4,
    first_name: "Brittne",
    last_name: "Heditch",
    email: "bheditch3@businessweek.com",
    gender: "Female",
    ip_address: "100.224.120.91",
  },
  {
    src: 'https://picsum.photos/200/300?random=5',
    id: 5,
    first_name: "Harman",
    last_name: "Mashal",
    email: "hmashal4@sakura.ne.jp",
    gender: "Male",
    ip_address: "135.116.148.60",
  },
  {
    src: 'https://picsum.photos/200/300?random=6',
    id: 6,
    first_name: "Flore",
    last_name: "Zappel",
    email: "fzappel5@tripod.com",
    gender: "Female",
    ip_address: "78.191.118.28",
  },
  {
    src: 'https://picsum.photos/200/300?random=7',
    id: 7,
    first_name: "Angelina",
    last_name: "Manneville",
    email: "amanneville6@lycos.com",
    gender: "Male",
    ip_address: "176.253.242.10",
  },
  {
    src: 'https://picsum.photos/200/300?random=8',
    id: 8,
    first_name: "Merilyn",
    last_name: "Marusik",
    email: "mmarusik7@1und1.de",
    gender: "Female",
    ip_address: "221.137.214.47",
  },
  {
    src: 'https://picsum.photos/200/300?random=9',
    id: 9,
    first_name: "Jeddy",
    last_name: "Brunn",
    email: "jbrunn8@umn.edu",
    gender: "Male",
    ip_address: "9.189.41.129",
  },
  {
    src: 'https://picsum.photos/200/300?random=10',
    id: 10,
    first_name: "Kilian",
    last_name: "Chadderton",
    email: "kchadderton9@wix.com",
    gender: "Male",
    ip_address: "177.47.251.168",
  },
  {
    src: 'https://picsum.photos/200/300?random=11',
    id: 11,
    first_name: "Kilian",
    last_name: "Chadderton",
    email: "kchadderton9@wix.com",
    gender: "Male",
    ip_address: "177.47.251.168",
  },
];

const ul = document.querySelector('ul')

for (let i = 0; data.length -1; i++) {

  const li = document.createElement('li')
  li.className = "user card d-inline-block col-12 col-lg-4 col-md-6 col-xl-3 px-2"

  const div = document.createElement('div')
  div.className = "user__content card-body"

  const img = document.createElement('img')
  img.className = "user__img card-img"
  img.src = data[i].src="https://picsum.photos/200/300"
  img.style.width='275px'
  img.style.height='100px'

  const h3 = document.createElement('h3')
  h3.className = "user__fullname h5 mt-3"
  h3.textContent = `${data[i].first_name} ${data[i].last_name}`

  const a = document.createElement('a')
  a.className = "user__email h6 text-primary d-block"
  a.textContent = data[i].email

  const p = document.createElement('p')
  p.className = "user__gender h6"
  p.textContent = data[i].gender

  const b = document. createElement('b')
  b.className = "user__address text-bg-info rounded text-white ps-2"
  b.textContent = data[i].ip_address
  b.style.fontWeight='400'
  b.style.display='block'

  div.append(img, h3, a, p, b)
  li.append(div)
  ul.append(li)
}