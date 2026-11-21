/* NSGL Season 1 data, from the official rules and schedule document (29 Oct 2026).
   To record a result, add a line to RESULTS: match number, then [Team A games, Team B games].
   The next match, results list and league table all update from it. */
const RESULTS = {
  // Week 1
  1: [0, 2], // NS Delta 0-2 The OTC
  2: [0, 2], // NS Echo 0-2 Vortex V
  3: [2, 0], // NS Chaos 2-0 NS Havoc
  4: [0, 2], // NS Bravo 0-2 NS Gamma
  5: [2, 0], // NS Foxtrot 2-0 ESC
  6: [0, 2], // NS Delta 0-2 Vortex V
  7: [2, 0], // The OTC 2-0 NS Havoc
  8: [1, 2], // NS Echo 1-2 NS Gamma
  // Week 2
  9: [2, 0], // NS Chaos 2-0 ESC
  10: [1, 2], // NS Bravo 1-2 NS Foxtrot
};

const FIXTURES = [
  // [match no, date, time (24h MYT), team A, team B]
  { week: 1, label: "13-15 Nov 2026", note: "", matches: [
    [1, "2026-11-13", "21:00", "NS Delta", "The OTC"],
    [2, "2026-11-13", "22:15", "NS Echo", "Vortex V"],
    [3, "2026-11-14", "20:30", "NS Chaos", "NS Havoc"],
    [4, "2026-11-14", "21:45", "NS Bravo", "NS Gamma"],
    [5, "2026-11-14", "23:00", "NS Foxtrot", "ESC"],
    [6, "2026-11-15", "20:30", "NS Delta", "Vortex V"],
    [7, "2026-11-15", "21:45", "The OTC", "NS Havoc"],
    [8, "2026-11-15", "23:00", "NS Echo", "NS Gamma"]
  ]},
  { week: 2, label: "20-22 Nov 2026", note: "Transfer Window 1: 20 Nov 12:00 AM to 22 Nov 11:59 PM", matches: [
    [9, "2026-11-20", "21:00", "NS Chaos", "ESC"],
    [10, "2026-11-20", "22:15", "NS Bravo", "NS Foxtrot"],
    [11, "2026-11-21", "20:30", "NS Delta", "NS Havoc"],
    [12, "2026-11-21", "21:45", "Vortex V", "NS Gamma"],
    [13, "2026-11-21", "23:00", "The OTC", "ESC"],
    [14, "2026-11-22", "20:30", "NS Echo", "NS Foxtrot"],
    [15, "2026-11-22", "21:45", "NS Chaos", "NS Bravo"],
    [16, "2026-11-22", "23:00", "NS Delta", "NS Gamma"]
  ]},
  { week: 3, label: "27-29 Nov 2026", note: "", matches: [
    [17, "2026-11-27", "21:00", "NS Havoc", "ESC"],
    [18, "2026-11-27", "22:15", "Vortex V", "NS Foxtrot"],
    [19, "2026-11-28", "20:30", "The OTC", "NS Bravo"],
    [20, "2026-11-28", "21:45", "NS Echo", "NS Chaos"],
    [21, "2026-11-28", "23:00", "NS Delta", "ESC"],
    [22, "2026-11-29", "20:30", "NS Havoc", "NS Bravo"],
    [23, "2026-11-29", "21:45", "NS Gamma", "NS Foxtrot"],
    [24, "2026-11-29", "23:00", "Vortex V", "NS Chaos"]
  ]},
  { week: 4, label: "4-6 Dec 2026", note: "Transfer Window 2: 4 Dec 12:00 AM to 6 Dec 11:59 PM", matches: [
    [25, "2026-12-04", "21:00", "The OTC", "NS Echo"],
    [26, "2026-12-04", "22:15", "NS Delta", "NS Foxtrot"],
    [27, "2026-12-05", "20:30", "ESC", "NS Bravo"],
    [28, "2026-12-05", "21:45", "NS Gamma", "NS Chaos"],
    [29, "2026-12-05", "23:00", "NS Havoc", "NS Echo"],
    [30, "2026-12-06", "20:30", "Vortex V", "The OTC"],
    [31, "2026-12-06", "21:45", "NS Delta", "NS Bravo"],
    [32, "2026-12-06", "23:00", "NS Foxtrot", "NS Chaos"]
  ]},
  { week: 5, label: "18-20 Dec 2026", note: "No matches on 11-13 Dec (public holiday)", matches: [
    [33, "2026-12-18", "21:00", "ESC", "NS Echo"],
    [34, "2026-12-18", "22:15", "NS Delta", "NS Chaos"],
    [35, "2026-12-19", "20:30", "NS Havoc", "Vortex V"],
    [36, "2026-12-19", "21:45", "NS Gamma", "The OTC"],
    [37, "2026-12-19", "23:00", "NS Bravo", "NS Echo"],
    [38, "2026-12-20", "20:30", "NS Foxtrot", "The OTC"],
    [39, "2026-12-20", "21:45", "ESC", "Vortex V"],
    [40, "2026-12-20", "23:00", "NS Gamma", "NS Havoc"]
  ]},
  { week: 6, label: "8-9 Jan 2027", note: "Break before this week for the late December and early January public holidays", matches: [
    [41, "2027-01-08", "21:00", "NS Delta", "NS Echo"],
    [42, "2027-01-08", "22:15", "NS Chaos", "The OTC"],
    [43, "2027-01-09", "20:30", "NS Bravo", "Vortex V"],
    [44, "2027-01-09", "21:45", "NS Foxtrot", "NS Havoc"],
    [45, "2027-01-09", "23:00", "ESC", "NS Gamma"]
  ]}
];

const PLAYOFFS = [
  { round: "Play-In", note: "Losers are eliminated", games: [
    ["M1", "BO5", "Seed #3", "Seed #6"],
    ["M2", "BO5", "Seed #4", "Seed #5"]
  ]},
  { round: "Upper bracket", note: "Losers of M3 and M4 drop to M6", games: [
    ["M3", "BO5", "Seed #1", "Winner M2"],
    ["M4", "BO5", "Seed #2", "Winner M1"],
    ["M5", "BO5", "Winner M3", "Winner M4"]
  ]},
  { round: "Lower bracket", note: "M7: 30 Jan, 8:00 PM", games: [
    ["M6", "BO5", "Loser M3", "Loser M4"],
    ["M7", "BO7", "Winner M6", "Loser M5"]
  ]},
  { round: "Grand Final", note: "31 Jan, 8:00 PM. No bracket reset", games: [
    ["M8", "BO7", "Winner M5", "Winner M7"]
  ], final: true }
];

const FINALS = [
  { stage: "NSGL Playoffs · M7 Lower Final", a: "Winner M6", b: "Loser M5", start: "2027-01-30T20:00:00+08:00", format: "Best of 7" },
  { stage: "NSGL Playoffs · M8 Grand Final", a: "Winner M5", b: "Winner M7", start: "2027-01-31T20:00:00+08:00", format: "Best of 7" }
];

const KEY_DATES = [
  ["6 Nov 2026", "Roster deadline: 8 players and 2 coaches per team"],
  ["12 Nov 2026", "RM30 team registration fee due"],
  ["13 Nov 2026", "Regular Season starts"],
  ["20-22 Nov 2026", "Transfer Window 1"],
  ["4-6 Dec 2026", "Transfer Window 2"],
  ["9 Jan 2027", "Regular Season ends"],
  ["15-17 Jan 2027", "Playoffs M1 to M6 (times to be confirmed)"],
  ["22-24 Jan 2027", "Playoff rest days"],
  ["30 Jan 2027", "Lower Final, 8:00 PM"],
  ["31 Jan 2027", "Grand Final, 8:00 PM"]
];

const PRIZES = [
  ["Champion", "RM500"], ["Runner-Up", "RM250"], ["Third Place", "RM150"],
  ["Grand Final MVP", "RM50"], ["Regular Season MVP", "RM50"], ["Total", "RM1,000"]
];

const POINTS = [["Win 2-0", "+2"], ["Win 2-1", "+1"], ["Lose 1-2", "-1"], ["Lose 0-2 or forfeit", "-2"]];

/* AS Trade Solution was added by the organizer after the document, which lists only Todakpay and Axora. */
const SPONSORS = [
  { name: "Todakpay", role: "Official Partner", logo: "assets/sponsor-todakpay.png" },
  { name: "Axora", role: "Official Technology Partner", logo: "assets/sponsor-axora.png" },
  { name: "AS Trade Solution", role: "League Partner", logo: "assets/sponsor-as-trade.png" }
];

/* Teams under Nightmare Syndicate. Their crests also appear in the schedule and league table. */
const NS_TEAMS = ["Alpha", "Bravo", "Chaos", "Delta", "Echo", "Foxtrot", "Gamma", "Havoc"];

/* NS management. To add a photo, put the file in assets/people/ and set photo, e.g. photo: "assets/people/levi.png". */
const PEOPLE = [
  { name: "Kuro_Neko", role: "Owner and Founder", size: "lead", photo: "assets/people/kuro-neko.jpg" },
  { name: "Mr.Ai", role: "Co-Founder", size: "lead", photo: "assets/people/mr-ai.jpg" },
  { name: "Rhaegar", role: "Community Leader", photo: "assets/people/rhaegar.jpg" },
  { name: "Levi", role: "Admin Community", photo: "assets/people/levi.jpg" },
  { name: "Zrnie", role: "Admin Player Development", photo: "assets/people/zrnie.jpg" },
  { name: "Arien", role: "Admin Livestreamer", photo: "assets/people/arien.jpg" },
  { name: "Rexxx", role: "Community Advisor", size: "wide", photo: "assets/people/rexxx.jpg" }
];

/* Official wording, kept in Bahasa Melayu so it isn't changed by translation. */
const RULES = [
  [1, "Peraturan Am", ["NSGL ialah kejohanan Mobile Legends: Bang Bang (MLBB) secara dalam talian untuk komuniti dan pemain amatur.", "Semua pasukan, pemain, coach dan petugas wajib mematuhi arahan rasmi penganjur, referee dan Tournament Manager.", "Yuran pendaftaran pasukan ialah RM30, dibayar sekali sahaja sepanjang musim."]],
  [2, "Kelayakan Pemain", ["Pemain aktif atau bekas profesional MPL/MDL serta pemain semi-profesional tidak dibenarkan menyertai liga.", "Pemain amatur yang pernah menyertai kejohanan komuniti biasa masih layak bertanding.", "Setiap pemain wajib menggunakan akaun MLBB sendiri yang didaftarkan; account sharing dan pemain tidak berdaftar dilarang.", "Penganjur boleh menyemak IGN, User ID, Server ID dan rekod pertandingan bagi mengesahkan kelayakan."]],
  [3, "Pendaftaran Pasukan & Roster", ["Setiap pasukan mendaftarkan maksimum 8 pemain (5 main lineup + 3 substitute) dan 2 coach.", "Maklumat pasukan wajib merangkumi Team Captain, Vice Captain, IGN, User ID dan Server ID.", "Tarikh akhir pendaftaran / kemas kini roster awal: Jumaat, 6 November 2026.", "Pemain tidak boleh mewakili lebih daripada satu pasukan dalam musim yang sama."]],
  [4, "Transfer Window", ["Transfer Window 1: 20-22 November 2026 (Minggu 2).", "Transfer Window 2: 4-6 Disember 2026 (Minggu 4).", "Penambahan, pertukaran atau perpindahan pemain hanya sah selepas diluluskan Tournament Manager; roster dikunci di luar window."]],
  [5, "Jadual Perlawanan", ["Regular Season ialah Single Round Robin: 10 pasukan, 45 perlawanan, 9 perlawanan setiap pasukan, semuanya BO3.", "Perlawanan dimainkan pada Jumaat, Sabtu dan Ahad mengikut waktu MYT yang tercatat pada jadual rasmi.", "Perlawanan pada cuti umum hujung minggu boleh tidak dijadualkan; hanya penganjur boleh meminda atau mengesahkan slot perlawanan."]],
  [6, "Lobby, Kelewatan & Game Forfeit", ["Semua pemain wajib hadir dalam lobby sekurang-kurangnya 15 minit sebelum waktu perlawanan rasmi.", "Jika sesebuah pasukan belum cukup 5 pemain berdaftar sebelum sesuatu game dijadualkan bermula, game tersebut diberikan kepada pihak lawan (Game Forfeit).", "Contoh: jika Game 1 dilepaskan, perlawanan diteruskan terus ke Game 2; pasukan masih boleh menang siri sekiranya memperoleh kemenangan game yang diperlukan.", "Jika masih tidak cukup pemain pada Game 2, Game 2 juga diberikan kepada lawan. Siri tamat apabila satu pasukan mencapai 2 menang (BO3), 3 (BO5) atau 4 (BO7).", "Emergency Substitution yang diluluskan referee dibenarkan sebelum Draft Pick; perbezaan masa akibat jadual yang dianjak hendaklah dirujuk kepada arahan referee."]],
  [7, "Technical Pause & Disconnect", ["Setiap pasukan boleh memohon maksimum 2 Technical Pause setiap game, maksimum 3 minit setiap kali, jika sistem permainan menyokong fungsi tersebut.", "Pause hanya untuk masalah teknikal yang munasabah dan perlu diluluskan referee.", "Apabila masa pause tamat, game diteruskan walaupun pemain masih disconnect; pemain boleh reconnect kemudian.", "Masalah internet/peranti individu bukan alasan automatik untuk rematch."]],
  [8, "Rematch & Game Restart", ["Rematch hanya dengan kelulusan referee atau Tournament Manager selepas semakan bukti.", "Pertimbangan merangkumi gangguan server MLBB besar, bug kritikal, gangguan serentak berpunca daripada server, atau kesilapan teknikal penganjur.", "Jika rematch diluluskan, ban, hero pick dan side asal dikekalkan kecuali referee mengarahkan sebaliknya.", "Kalah, salah hero/ban dan strategi yang tidak menjadi bukan alasan rematch."]],
  [9, "Cheating & Unsportsmanlike Conduct", ["Cheat, map hack, script dan match fixing yang terbukti boleh menyebabkan Disqualification (DQ).", "Account sharing dan stream sniping yang terbukti dikenakan Forfeit Match.", "Bug exploitation boleh menyebabkan Forfeit atau DQ; tingkah laku toksik boleh dikenakan amaran diikuti Forfeit.", "Semua hukuman dibuat selepas siasatan dan pengesahan bukti."]],
  [10, "Match Protest & Dispute", ["Hanya Team Captain atau Team Manager boleh membuat bantahan rasmi.", "Bantahan boleh dibuat selepas match tamat dengan had maksimum 30 minit; tempoh semakan yang diperuntukkan ialah 15-30 minit.", "Screenshot, rakaman atau replay hendaklah dikemukakan sebagai bukti.", "Referee dan Tournament Manager menyiasat; keputusan akhir Tournament Manager adalah muktamad.", "Kes serius seperti cheating atau match fixing boleh disiasat walaupun selepas had masa tersebut."]],
  [11, "League Points System - BO3", ["Menang 2-0: +2 mata. Menang 2-1: +1 mata.", "Kalah 1-2: -1 mata. Kalah 0-2: -2 mata.", "Kalah siri melalui Forfeit 0-2: -2 mata; pihak lawan menang 2-0 dan menerima +2 mata.", "Playoffs BO5/BO7 tidak menggunakan mata liga; kemenangan siri menentukan kemaraan."]],
  [12, "Tiebreaker Kedudukan Liga", ["Jika mata seri, penentuan mengikut susunan: (1) Head-to-Head, (2) Total Match Wins, (3) Total Game Wins.", "Jika masih seri dan kedudukan mempengaruhi kelayakan Playoffs, satu Tiebreaker BO3 dimainkan.", "Game Difference tidak ditambah sebagai kriteria berasingan kerana sistem mata sudah mengambil kira perbezaan game."]],
  [13, "Kelayakan & Laluan Playoffs", ["Hanya Top 6 Regular Season layak ke Playoffs. Seed #1 dan #2 mendapat bye terus ke Upper Semifinal.", "Play-In: Seed #3 vs #6 (M1) dan Seed #4 vs #5 (M2). Pasukan kalah pada Play-In terus tersingkir.", "Upper Semifinal: #1 vs pemenang M2 (M3); #2 vs pemenang M1 (M4).", "Pemenang M3 dan M4 ke Upper Final (M5); pasukan kalah ke Lower Semifinal (M6).", "Pemenang M6 menentang pasukan kalah M5 dalam Lower Final (M7); pemenang M5 dan M7 ke Grand Final (M8)."]],
  [14, "Format Playoffs & Grand Final", ["Play-In, Upper Semifinal, Upper Final dan Lower Semifinal menggunakan BO5 (menang 3 game).", "Lower Final dan Grand Final menggunakan BO7 (menang 4 game).", "Single Grand Final BO7 tanpa bracket reset. Pasukan kalah Lower Final menduduki tempat ketiga.", "Format yang digunakan ialah Hybrid Elimination, bukan Double Elimination penuh dari pusingan pertama."]],
  [15, "Side Selection - Blue / Red", ["Regular Season BO3: referee membuat undian untuk hak memilih side Game 1.", "Game 2 dan Game 3: pasukan yang kalah pada game sebelumnya memilih side.", "Playoffs: seed lebih tinggi memilih side Game 1; bagi game berikutnya, pasukan yang kalah game sebelumnya memilih side."]],
  [16, "Draft Pick & Hero Selection", ["Semua game dimainkan dalam Custom Lobby - Draft Pick dengan lima pemain berdaftar setiap pihak.", "Ban/Pick mengikut sistem MLBB; kesilapan pilihan hero atau ban tidak melayakkan rematch.", "Hero Swap antara pemain pasukan yang sama dibenarkan sepanjang Draft Pick sebelum game bermula.", "Jika bug teknikal disahkan, referee boleh mulakan semula Draft Pick dan mengekalkan picks/bans/side terdahulu.", "Penganjur boleh mengumumkan larangan hero yang bermasalah sebelum perlawanan bermula."]],
  [17, "Player Substitution & Emergency Sub", ["Maksimum 2 pertukaran pemain dibenarkan sebelum setiap game, termasuk sebelum Game 1.", "Hanya substitute berdaftar boleh masuk; Team Captain mesti memaklumkan dan mendapatkan kebenaran referee sebelum Draft Pick.", "Pertukaran ketika game berlangsung dilarang; pemain asal boleh masuk semula sebelum game berikutnya tertakluk kepada had 2 pertukaran.", "Pertukaran kecemasan yang diluluskan tidak dikenakan penalti berasingan."]],
  [18, "Livestream & Broadcasting", ["Siaran utama melalui akaun rasmi TikTok Nightmare Syndicate (@nightmaresyndicate_my); restream hanya oleh pihak yang dilantik penganjur.", "Stream delay rasmi ditetapkan pada 60 saat (1 minit).", "Player POV livestream dilarang sama sekali sepanjang perlawanan NSGL; tiada pengecualian atau kelulusan untuk POV pemain.", "Stream sniping dan gangguan kepada observer/produksi dilarang.", "Penganjur boleh menggunakan rakaman, highlight, keputusan, IGN dan logo pasukan bagi promosi kejohanan."]],
  [19, "Prize Distribution & MVP", ["Champion RM500; Runner-Up RM250; Third Place RM150.", "Regular Season MVP RM50 dinilai berdasarkan prestasi sepanjang Regular Season.", "Grand Final MVP RM50 dinilai hanya berdasarkan Grand Final BO7 dan dipilih daripada pasukan juara.", "MVP mengambil kira KDA, objektif, teamfight participation dan impak pemain; keputusan penganjur dan referee.", "Semua hadiah dibayar kepada wakil rasmi dalam tempoh maksimum 14 hari selepas Grand Final tamat."]],
  [20, "Match Results & Verification", ["Team Captain menyimpan screenshot keputusan setiap game sebagai bukti sokongan.", "Referee mengambil screenshot sebagai rekod utama dan mengesahkan keputusan sebelum kedudukan liga dikemas kini.", "Sebarang kesilapan skor dilaporkan kepada Tournament Manager; bantahan rasmi tertakluk Peraturan 10.", "Keputusan rasmi diedarkan melalui saluran komunikasi NSGL."]],
  [21, "Team Withdrawal & Disqualification", ["Pasukan yang menarik diri wajib memaklumkan Tournament Manager secara rasmi.", "No-show yang menyebabkan kekalahan penuh siri BO3 direkodkan sebagai 0-2 dan -2 mata.", "Tiga (3) forfeit perlawanan sepanjang liga boleh mengakibatkan DQ selepas penilaian penganjur.", "Jika pasukan menarik diri atau DQ dalam Regular Season, semua keputusan mereka termasuk yang terdahulu diselaraskan sebagai kalah 0-2 dan setiap lawan mendapat +2 mata.", "Yuran pendaftaran RM30 tidak dipulangkan jika pasukan menarik diri atau DQ."]],
  [22, "Rescheduling & Postponement", ["Permohonan mengubah jadual perlu dihantar sekurang-kurangnya 48 jam sebelum waktu perlawanan.", "Permohonan dipertimbangkan bagi kecemasan, gangguan teknikal besar atau keadaan luar kawalan.", "Persetujuan kedua-dua pasukan dan kelulusan Tournament Manager diperlukan.", "Penganjur boleh menangguhkan match akibat gangguan besar server dan memberikan slot baharu; no-show tanpa kelulusan tertakluk forfeit."]],
  [23, "In-Game Behaviour & All Chat", ["Recall Spam dan Battle Emote biasa dibenarkan, tetapi ancaman, diskriminasi dan serangan peribadi dilarang.", "All Chat dilarang sama sekali termasuk mesej \"GG\", \"WP\", \"Well Played\" dan \"EZ\". Team Chat masih dibenarkan.", "Pelanggaran All Chat pertama: amaran rasmi; kedua: Forfeit Game; ketiga: DQ pemain, dengan denda RM100 tertakluk syarat bertulis yang dipersetujui.", "Rekod kesalahan All Chat dikumpul mengikut individu sepanjang Regular Season dan Playoffs, tanpa reset antara match.", "Pause Abuse untuk mengganggu momentum lawan juga dilarang."]],
  [24, "Team Captain & Official Communication", ["Setiap pasukan wajib melantik Team Captain dan Vice Captain; Vice Captain bertindak sebagai pengganti.", "Wakil rasmi menyertai kumpulan komunikasi NSGL, mengesahkan kesiapsiagaan pasukan dan melaporkan isu roster/teknikal.", "Semua pengumuman rasmi dan arahan referee / Tournament Manager wajib diikuti.", "Ugutan atau penghinaan terhadap pegawai kejohanan tertakluk kepada tindakan disiplin."]],
  [25, "Tournament Authority & Final Decision", ["Tournament Manager mengurus kejohanan dan membuat keputusan akhir selepas siasatan; referee mengendalikan perlawanan.", "Situasi di luar peraturan dinilai secara adil; pindaan peraturan dimaklumkan melalui saluran rasmi.", "Pegawai yang mempunyai conflict of interest tidak boleh memutuskan kes berkaitan bersendirian.", "Perubahan selepas Regular Season bermula tidak digunakan secara retroaktif untuk menghukum tindakan yang sebelumnya dibenarkan."]],
  [26, "Coach & Draft Pick", ["Setiap pasukan boleh mendaftarkan 2 coach. Coach hanya membantu strategi dan arahan sepanjang Draft Pick.", "Apabila gameplay bermula, coach dilarang menyampaikan arahan kepada pemain melalui Discord, voice chat atau platform lain sehingga game tamat.", "Coach tidak mendapat slot Spectator rasmi. Pelanggaran tertakluk siasatan dan tindakan disiplin."]],
  [27, "Referee, Spectator & Discord Assistance", ["Slot Spectator rasmi terdiri daripada 2 Referee, 1 Tournament Manager dan 1 akaun Stream/Observer, tertakluk kepada kapasiti sistem lobby.", "Seorang referee ditugaskan kepada setiap pasukan dan boleh memasuki voice channel Discord pasukan tersebut apabila ada masalah.", "Referee membantu perkara teknikal atau pematuhan peraturan sahaja, bukan coaching, dan dilarang membocorkan maklumat pasukan lawan.", "Isu yang tidak dapat diselesaikan dirujuk kepada Tournament Manager."]],
  [28, "Social Media & Sponsor Acknowledgement", ["Setiap posting berkaitan NSGL oleh pasukan atau penganjur wajib menyebut atau memaparkan sponsor rasmi serta tag akaun Nightmare Syndicate (@nightmaresyndicate_my).", "Terpakai kepada poster, hasil perlawanan, pengumuman, foto, video, klip dan highlights.", "Sponsor kejohanan: Todakpay (Official Sponsor) dan Axora (Official Technology Partner).", "Gunakan nama/logo rasmi yang dibekalkan penganjur; posting yang tidak patuh perlu diperbetulkan apabila diarahkan."]],
  [29, "Player Disqualification & RM100 Fine", ["Pemain yang menerima Disqualification (DQ) selepas proses siasatan dikenakan denda RM100 bagi setiap pemain yang di-DQ.", "Bayaran denda tidak membatalkan hukuman DQ. Pasukan dan pemain mesti dimaklumkan syarat ini sebelum pertandingan.", "Pelaksanaan dan kutipan denda tertakluk persetujuan bertulis peserta serta undang-undang yang terpakai.", "Tanggungjawab pembayar dan proses kutipan terperinci perlu dinyatakan dalam borang penerimaan syarat penyertaan."]]
];

/* ---------- Rendering ----------
   Each page only has some of these elements, so every part checks its element exists first. */
(function () {
  const el = id => document.getElementById(id);
  const set = (id, html) => { const n = el(id); if (n) n.innerHTML = html; };
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const TZ = "Asia/Kuala_Lumpur";
  const dayFmt = new Intl.DateTimeFormat("en-GB", { weekday: "short", day: "numeric", month: "short", timeZone: TZ });
  const timeFmt = new Intl.DateTimeFormat("en-US", { hour: "numeric", minute: "2-digit", timeZone: TZ });
  const dateText = d => `${dayFmt.format(d).replace(",", "")}, ${timeFmt.format(d)} MYT`;
  const crestPath = short => `assets/teams/ns-${short.toLowerCase()}.png`;
  const OTHER_CRESTS = { "Vortex V": "assets/teams/vortex-v.png", "The OTC": "assets/teams/the-otc.png", "ESC": "assets/teams/esc.png" };
  const crest = name => {
    const short = name.replace(/^NS /, "");
    const src = OTHER_CRESTS[name] || (name !== short && NS_TEAMS.includes(short) ? crestPath(short) : "");
    return src ? `<img class="crest" src="${src}" alt="" loading="lazy">` : "";
  };

  /* logo | team name VS team name | logo */
  const versus = (a, b) => `
    <span class="vs-row">
      <span class="vs-team">${crest(a)}<b>${esc(a)}</b></span>
      <span class="vs">VS</span>
      <span class="vs-team vs-away"><b>${esc(b)}</b>${crest(b)}</span>
    </span>`;

  set("people", PEOPLE.map(p => `
    <li class="person ${p.size === "lead" ? "person-lead" : ""} ${p.size === "wide" ? "person-wide" : ""}">
      ${p.photo
        ? `<img class="person-photo" src="${esc(p.photo)}" alt="${esc(p.name)}" loading="lazy">`
        : `<svg class="smoke" aria-hidden="true"><rect width="100%" height="100%" filter="url(#red-smoke)"/></svg><img class="person-mark" src="assets/ns-mark.png" alt="">`}
      <span class="person-slash" aria-hidden="true"></span>
      <span class="person-name">${esc(p.name)}</span>
      <span class="person-role">${esc(p.role)}</span>
    </li>`).join(""));

  set("team-grid", NS_TEAMS.map(t => `
    <li class="team">
      <img src="${crestPath(t)}" alt="NS ${esc(t)} crest" loading="lazy">
      <p class="team-name">NS ${esc(t)}</p>
    </li>`).join(""));

  const all = FIXTURES.flatMap(w => w.matches.map(([no, date, time, a, b]) => ({
    no, a, b, week: w.week, start: new Date(`${date}T${time}:00+08:00`), score: RESULTS[no]
  })));
  const now = Date.now();
  const next = all.find(m => !m.score && m.start > now);

  /* Next match and countdown */
  const fin = next ? null : FINALS.find(f => new Date(f.start) > now);
  const ticket = next
    ? { stage: `Regular Season · Week ${next.week} · Match ${String(next.no).padStart(2, "0")}`, a: next.a, b: next.b, start: next.start, format: "Best of 3" }
    : fin && { stage: fin.stage, a: fin.a, b: fin.b, start: new Date(fin.start), format: fin.format };

  /* The red strip on the home page */
  if (el("strip-text")) el("strip-text").textContent = ticket ? `${ticket.a} vs ${ticket.b} · ${dateText(ticket.start)}` : "Season 1 is complete";

  /* The ticket and countdown on the NSGL page */
  if (ticket && el("ticket")) {
    el("ticket").innerHTML = `
      <div class="ticket-main">
        <p class="eyebrow gold">${esc(ticket.stage)}</p>
        <div class="display versus">${versus(ticket.a, ticket.b)}</div>
        <p class="muted">${esc(dateText(ticket.start))} · ${esc(ticket.format)} · Online · Live on TikTok <a class="text-link" href="https://www.tiktok.com/@nightmaresyndicate_my">@nightmaresyndicate_my</a></p>
      </div>
      <div class="ticket-side">
        <p class="eyebrow" id="count-label">Starts in</p>
        <div class="count" id="count"></div>
      </div>`;
    const tick = () => {
      const left = ticket.start - Date.now();
      if (left <= 0) { el("count-label").textContent = "Match started"; el("count").innerHTML = ""; clearInterval(timer); return; }
      const s = Math.floor(left / 1000);
      el("count").innerHTML = [[Math.floor(s / 86400), "days"], [Math.floor(s / 3600) % 24, "hrs"], [Math.floor(s / 60) % 60, "min"], [s % 60, "sec"]]
        .map(([n, l]) => `<div><b>${String(n).padStart(2, "0")}</b><small>${l}</small></div>`).join("");
    };
    const timer = setInterval(tick, 1000);
    tick();
  } else if (el("ticket")) {
    el("ticket").innerHTML = `<div class="ticket-main"><p class="display versus">Season 1 is complete</p></div>`;
  }

  /* Schedule, one week at a time */
  const scoreText = m => m.score ? `${m.score[0]} - ${m.score[1]}` : "BO3";
  function showWeek(n) {
    const w = FIXTURES.find(f => f.week === n);
    el("week-note").textContent = w.note;
    el("week-note").hidden = !w.note;
    el("fixtures").innerHTML = all.filter(m => m.week === n).map(m => `
      <li class="fixture">
        <span class="fixture-no">${String(m.no).padStart(2, "0")}</span>
        <span class="muted">${esc(dayFmt.format(m.start).replace(",", ""))}, ${esc(timeFmt.format(m.start))}</span>
        <span class="fixture-teams">${versus(m.a, m.b)}</span>
        <span class="score">${scoreText(m)}</span>
      </li>`).join("");
    document.querySelectorAll(".week-tab").forEach(b => b.setAttribute("aria-pressed", String(+b.dataset.week === n)));
  }
  if (el("week-tabs")) {
    el("week-tabs").innerHTML = FIXTURES.map(w => `<button class="week-tab" data-week="${w.week}" aria-pressed="false">Week ${w.week}<small>${esc(w.label)}</small></button>`).join("");
    el("week-tabs").addEventListener("click", e => {
      const b = e.target.closest(".week-tab");
      if (b) showWeek(+b.dataset.week);
    });
    showWeek(next ? next.week : FIXTURES[FIXTURES.length - 1].week);
  }

  /* Results and table, worked out from RESULTS using rules 11 and 12 */
  const played = all.filter(m => m.score);
  set("results", played.length
    ? played.slice(-5).reverse().map(m => `
        <li class="result">
          <span class="pill win">${String(m.no).padStart(2, "0")}</span>
          ${versus(m.a, m.b)}
          <span class="score">${m.score[0]}-${m.score[1]}</span>
        </li>`).join("")
    : `<li class="muted empty">No results yet. The season starts on 13 November.</li>`);

  const teams = {};
  all.forEach(m => [m.a, m.b].forEach(t => { teams[t] = teams[t] || { name: t, mw: 0, ml: 0, gw: 0, gl: 0, pts: 0, beat: [] }; }));
  played.forEach(m => {
    const [ga, gb] = m.score, A = teams[m.a], B = teams[m.b];
    const win = ga > gb ? A : B, lose = ga > gb ? B : A;
    const margin = Math.abs(ga - gb) >= 2 ? 2 : 1;
    win.mw++; lose.ml++; win.pts += margin; lose.pts -= margin; win.beat.push(lose.name);
    A.gw += ga; A.gl += gb; B.gw += gb; B.gl += ga;
  });
  const rows = Object.values(teams);
  rows.forEach(t => { t.h2h = t.beat.filter(n => teams[n].pts === t.pts).length; });
  rows.sort((a, b) => b.pts - a.pts || b.h2h - a.h2h || b.mw - a.mw || b.gw - a.gw || a.name.localeCompare(b.name));
  const started = played.length > 0;
  const signed = n => (n > 0 ? "+" + n : String(n));
  set("standings", rows.map((t, i) => `
    <tr class="${started && i === 5 ? "cut" : ""}">
      <td>${started ? i + 1 : "-"}</td><td>${crest(t.name)}${esc(t.name)}</td><td>${t.mw}-${t.ml}</td><td>${t.gw}-${t.gl}</td><td>${signed(t.pts)}</td>
    </tr>`).join(""));
  if (el("table-note")) el("table-note").textContent = started
    ? "Top 6 reach the playoffs. Ties use head-to-head, match wins, then game wins; a tiebreaker BO3 may follow. The Tournament Manager confirms final seeding."
    : "Teams are listed alphabetically until results come in. Top 6 reach the playoffs, and Seeds #1 and #2 go straight to the Upper Semifinal.";

  /* Playoffs, key dates, prizes, points, sponsors, rules */
  set("bracket", PLAYOFFS.map(r => `
    <div class="round ${r.final ? "round-final" : ""}">
      <h4 class="eyebrow gold">${esc(r.round)}</h4>
      ${r.games.map(g => `
        <div class="game">
          <p class="game-head"><span>${g[0]}</span><span>${g[1]}</span></p>
          <p>${esc(g[2])}</p><p>${esc(g[3])}</p>
        </div>`).join("")}
      <p class="muted round-note">${esc(r.note)}</p>
    </div>`).join(""));

  const pairs = list => list.map(([a, b]) => `<li><span>${esc(a)}</span><b>${esc(b)}</b></li>`).join("");
  set("key-dates", KEY_DATES.map(([d, t]) => `<li><b>${esc(d)}</b><span class="muted">${esc(t)}</span></li>`).join(""));
  set("prizes", pairs(PRIZES));
  set("points", pairs(POINTS));

  const sponsorHtml = SPONSORS.map(s => `
    <li class="sponsor">
      <img src="${esc(s.logo)}" alt="${esc(s.name)}">
      <span><b>${esc(s.name)}</b><br><span class="muted">${esc(s.role)}</span></span>
    </li>`).join("");
  document.querySelectorAll(".sponsor-row").forEach(u => { u.innerHTML = sponsorHtml; });

  set("rules-list", RULES.map(([n, title, items]) => `
    <details class="rule">
      <summary><span class="rule-no">${String(n).padStart(2, "0")}</span>${esc(title)}</summary>
      <ul>${items.map(t => `<li>${esc(t)}</li>`).join("")}</ul>
    </details>`).join(""));
})();
