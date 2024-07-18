const sections = [
  {
    title: "Acara",
    links: [
      { id: 1, text: "Pasarkan Acaramu", href: "/pasarkan-acaramu" },
      { id: 2, text: "Syarat dan Ketentuan", href: "/syarat-ketentuan" },
      { id: 3, text: "Produk Kami", href: "/produk-kami" },
    ],
  },
  {
    title: "Bantuan",
    links: [
      { id: 4, text: "Hubungi Kami", href: "#" },
      { id: 5, text: "Resell Tiket", href: "/resell-tiket" },
      { id: 6, text: "FAQ", href: "/FAQ" },
    ],
  },
];

export default function FooterLinks() {
  return (
    <>
      {sections.map((elm, i) => (
        <div key={i} className="col-lg-auto">
          <h4 className="text-20 text-gold-2 fw-500">{elm.title}</h4>

          <div className="y-gap-10 mt-20">
            {elm.links.map((elm2, i2) => (
              <a key={i2} className="d-block fw-500 hover-gold" href={elm2.href}>
                {elm2.text}
              </a>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}
