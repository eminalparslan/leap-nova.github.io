(function () {
  const L = window.LEAP;
  const hues = ["indigo", "saffron", "teal", "rose", "olive"];
  const hue = i => hues[i % hues.length];
  const $ = id => document.getElementById(id);
  const el = (tag, cls, html) => {
    const n = document.createElement(tag);
    if (cls) n.className = cls;
    if (html != null) n.innerHTML = html;
    return n;
  };

  /* ---------- links: interest form (falls back to email) ---------- */
  const mail = `mailto:${L.email}`;
  const interestHref = L.interestForm || `${mail}?subject=${encodeURIComponent("I'm interested in LEAP")}`;
  const wireInterest = root => root.querySelectorAll("[data-interest]").forEach(a => {
    a.href = interestHref;
    if (L.interestForm) { a.target = "_blank"; a.rel = "noopener"; }
  });
  document.querySelectorAll("[data-email]").forEach(a => { a.href = mail; a.textContent = L.email; });

  /* ---------- home: flow (values -> everyone) ---------- */
  const flow = $("flow");
  if (flow) L.flow.forEach((s, i) => {
    flow.append(el("li", hue(i), `<span class="step">${i + 1}</span><h4>${s.name}</h4><p>${s.text}</p>`));
  });

  /* ---------- home: values ---------- */
  const values = $("values-list");
  if (values) {
    L.values.forEach((v, i) => {
      values.append(el("li", hue(i), `<h4>${v.name}</h4><p>${v.text}</p>`));
    });
    // the list is open-ended: invite more common ground
    values.append(el("li", "values-more",
      `<a data-interest href="#"><span class="plus" aria-hidden="true">+</span><h4>What does your community hold?</h4><p>Help us find the next value we all share.</p></a>`));
  }

  /* ---------- home: leaders at the table, everyone in the work ---------- */
  const dl = $("dots-leaders");
  if (dl) hues.forEach(h => dl.append(el("span", h)));
  const de = $("dots-everyone");
  if (de) for (let i = 0; i < 60; i++) de.append(el("span", hue(i * 3 + Math.floor(i / 5))));

  /* ---------- home: connect / grow / serve ---------- */
  const triad = $("triad-list");
  if (triad) L.triad.forEach((t, i) => {
    triad.append(el("li", hue(i), `<h2>${t.word}.</h2><p>${t.text}</p>`)); // indigo, saffron, teal, as in the hero
  });

  /* ---------- home: committees ---------- */
  const grid = $("committee-grid");
  if (grid) L.committees.forEach(c => {
    grid.append(el("article", `committee ${c.hue}`, `
      <h3>${c.name}</h3>
      <p class="rooted"><span>Rooted in</span> ${c.value}</p>
      <div class="problem"><h4>The shared problem</h4><p>${c.problem}</p></div>
      <div><h4>What it could do</h4><ul>${c.does.map(d => `<li>${d}</li>`).join("")}</ul></div>`));
  });

  const future = $("future-grid");
  if (future) {
    L.futureCommittees.forEach(c => {
      future.append(el("div", `future-tile ${c.hue}`, `<span class="tag">Could be next</span><h3>${c.name}</h3>`));
    });
    future.append(el("a", "future-tile propose", `<span class="plus" aria-hidden="true">+</span><h3>Propose a committee</h3><p>What problem does your community want to solve with others?</p>`));
    future.lastChild.setAttribute("data-interest", "");
  }

  /* ---------- home: ways in ---------- */
  const paths = $("paths");
  if (paths) L.paths.forEach((p, i) => {
    const link = p.form ? `<a class="path-link" data-interest href="#">${p.linkText} →</a>`
      : p.link ? `<a class="path-link" href="${p.link}">${p.linkText} →</a>` : "";
    paths.append(el("li", hue(i), `<h3>${p.name}</h3><p>${p.text}</p>${link}`));
  });

  /* ---------- about: round table ---------- */
  const table = $("round-table");
  if (table) {
    const NS = "http://www.w3.org/2000/svg";
    const svg = (tag, attrs, text) => {
      const n = document.createElementNS(NS, tag);
      Object.entries(attrs).forEach(([k, v]) => n.setAttribute(k, v));
      if (text) n.textContent = text;
      table.append(n);
      return n;
    };
    svg("circle", { class: "table-top", cx: 0, cy: 0, r: 70 });
    svg("text", { class: "table-label", x: 0, y: 8 }, "LEAP");
    const n = L.boardSeats;
    for (let i = 0; i < n; i++) {
      const a = (-90 + (360 / n) * i) * Math.PI / 180;
      const x = (118 * Math.cos(a)).toFixed(2), y = (118 * Math.sin(a)).toFixed(2);
      const filled = i < L.board.length;
      svg("circle", { class: filled ? `seat filled ${hue(i)}` : "seat open", cx: x, cy: y, r: 24 });
      if (!filled) svg("text", { class: "seat-plus", x, y: (+y + 7).toFixed(2) }, "+");
    }
  }

  /* ---------- about: seat cards ---------- */
  const seats = $("seats-list");
  if (seats) {
    const initials = name => /^\[/.test(name) ? "" :
      name.split(/\s+/).map(w => w[0]).slice(0, 2).join("").toUpperCase();
    const silhouette = `<svg viewBox="0 0 40 40" aria-hidden="true"><circle cx="20" cy="15" r="7"/><path d="M6 38c0-8 6-13 14-13s14 5 14 13z"/></svg>`;

    L.board.forEach((m, i) => {
      const photo = m.photo
        ? `<img src="${m.photo}" alt="">`
        : (initials(m.name) ? `<span class="initials">${initials(m.name)}</span>` : silhouette);
      seats.append(el("li", `seat-card filled ${hue(i)}`, `
        <div class="photo">${photo}</div>
        <h3>${m.name}</h3>
        <p class="role">${m.role}</p>
        ${m.community ? `<p class="community">${m.community}</p>` : ""}
        <p class="bio">${m.bio}</p>`));
    });
    for (let i = L.board.length; i < L.boardSeats; i++) {
      seats.append(el("li", "seat-card open", `
        <div class="photo"><span class="plus" aria-hidden="true">+</span></div>
        <h3>Open seat</h3>
        <p class="role">For a leader from your community</p>
        <a class="path-link" data-interest href="#">Take this seat →</a>`));
    }
  }

  wireInterest(document);
})();
