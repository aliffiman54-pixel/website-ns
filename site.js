/* ---------- Shop and news content. League data is in league.js. Used on every page. Products are sample data. ---------- */
const SITE = {
  products: [
    { name: "NS Home Jersey", price: 149, base: "#A50E2B", trim: "#0B0B0D", num: "01", label: "#FFFFFF" },
    { name: "NS Away Jersey", price: 149, base: "#FFFFFF", trim: "#A50E2B", num: "01", label: "#0B0B0D" },
    { name: "NS Black Edition Jersey", price: 169, base: "#0B0B0D", trim: "#E5132F", num: "13", label: "#FFFFFF" },
    { name: "NSGL Gold Edition Jersey", price: 169, base: "#0B0B0D", trim: "#FFC53D", num: "GL", label: "#FFC53D" },
    { name: "NS Training Top", price: 89, base: "#6B6B6B", trim: "#0B0B0D", num: "NS", label: "#FFFFFF" }
  ],
  news: [
    { date: "13 Nov 2026", title: "NSGL Season 1 starts on 13 November", text: "Ten teams play 45 best-of-three matches over six weeks, and the top six go through to the playoffs. NS Delta and The OTC open the season at 9:00 PM MYT, live on TikTok @nightmaresyndicate_my." },
    { date: "6 Nov 2026", title: "Roster deadline: Friday, 6 November", text: "Teams can register up to 8 players and 2 coaches. Changes after that wait for the transfer windows." },
    { date: "12 Nov 2026", title: "Team registration fee due 12 November", text: "RM30 per team, paid once for the whole season." },
    { date: "31 Jan 2027", title: "RM1,000 prize pool, decided on 31 January", text: "The Champion takes RM500. The Grand Final is a best-of-seven with no bracket reset." }
  ]
};

/* ---------- Rendering ---------- */
const $ = id => document.getElementById(id);
const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

function jersey(p, id) {
  const shape = "M84 28 40 48 14 96l32 18 14-22v126h120V92l14 22 32-18-26-48-44-20q-36 24-72 0z";
  return `<svg viewBox="0 0 240 240" role="img" aria-label="${esc(p.name)}">
    <clipPath id="clip-${id}"><path d="${shape}"/></clipPath>
    <g clip-path="url(#clip-${id})">
      <rect width="240" height="240" fill="${p.base}"/>
      <path d="M0 200 240 66v22L0 222zM0 228 240 94v9L0 237z" fill="${p.trim}"/>
      <path d="M0 30h60L40 130 0 110zM240 30h-60l20 100 40-20z" fill="${p.trim}"/>
    </g>
    <path d="${shape}" fill="none" stroke="#6B6B6B" stroke-width="1.5"/>
    <path d="M84 28q36 24 72 0" fill="none" stroke="${p.trim}" stroke-width="6"/>
    <text x="120" y="172" text-anchor="middle" font-family="Bebas Neue, Impact, sans-serif" font-size="62" font-style="italic" fill="${p.label}" stroke="${p.base}" stroke-width="5" paint-order="stroke">${esc(p.num)}</text>
  </svg>`;
}

if ($("products")) $("products").innerHTML = SITE.products.map((p, i) => `
  <li class="product">
    <div class="product-art">${jersey(p, i)}</div>
    <h3>${esc(p.name)}</h3>
    <div class="product-row">
      <span class="price">RM${p.price.toFixed(2)}</span>
      <button class="btn-quiet" data-add="${esc(p.name)}">Add to bag</button>
    </div>
  </li>`).join("");

const [lead, ...rest] = SITE.news;
if ($("lead-story")) $("lead-story").innerHTML = `
  <p class="eyebrow muted">${esc(lead.date)}</p>
  <h3>${esc(lead.title)}</h3>
  <p>${esc(lead.text)}</p>`;
if ($("news-list")) $("news-list").innerHTML = rest.map(n => `
  <li>
    <p class="eyebrow muted">${esc(n.date)}</p>
    <h3>${esc(n.title)}</h3>
    <p class="muted">${esc(n.text)}</p>
  </li>`).join("");

/* ---------- Interactions ---------- */
let bag = 0, toastTimer;
document.addEventListener("click", e => {
  const name = e.target.dataset && e.target.dataset.add;
  if (!name || !$("bag-count")) return;
  $("bag-count").textContent = ++bag;
  const toast = $("toast");
  toast.textContent = `${name} added. Checkout isn't connected in this preview.`;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 3000);
});

const toggle = $("menu-toggle"), nav = $("nav");
toggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  toggle.setAttribute("aria-expanded", open);
});
nav.addEventListener("click", e => {
  if (e.target.tagName === "A") { nav.classList.remove("open"); toggle.setAttribute("aria-expanded", "false"); }
});
