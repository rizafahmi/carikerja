<script>
  import { onMount } from 'svelte';
  import people from "../data/people.js";

  let sortedPeople = []
  let getAllLocation = people.map(person => person.location)
  getAllLocation = [...new Set(getAllLocation)].sort((a, b) => a.localeCompare(b)) // get unique location and filter by alphabetically

  function getSortedPeople() {
    sortedPeople = people.sort((a, b) => a.name > b.name);
    sortedPeople = sortedPeople.sort((a, b) => a.hired - b.hired);
  }

  // handle filter location
  function handleLocationChange(e) {
    const value = e.target.value
    if (!value) getSortedPeople()
    else {
      getSortedPeople()
      sortedPeople = sortedPeople.filter(people => people.location === value)
    }
  }

  let badges = [];
  function getBadgeStyle(text) {
    const existingBadge = badges.find((badge) => badge.text === text.toLowerCase());
    if (existingBadge) {
      return existingBadge.style;
    }

    const red = (Math.random() * 256) | 0;
    const green = (Math.random() * 256) | 0;
    const blue = (Math.random() * 256) | 0;

    const yiq = (red * 299 + green * 587 + blue * 114) / 1000;
    const textColor = yiq >= 128 ? "#000" : "#fff";

    const style = `background-color: rgb(${red}, ${green}, ${blue}); color: ${textColor}`;

    badges.push({text: text.toLowerCase(), style});

    return style;
  }

  onMount(() => {
    getSortedPeople()
  })
</script>

<style>
  .terminal-card {
    margin: 1em;
  }
  ul {
    margin-left: 1em;
  }
  li {
    margin-bottom: 0.5em;
  }
  .badge {
    margin-right: 0.5em;
    padding: 0.25em;
    padding-left: 0.5em;
    padding-right: 0.5em;
    border-radius: 0.5em;
    margin-bottom: 0.25em;
    display: inline-block;
  }
  .hired {
    background-color: rgba(21, 21, 21, 0.75);
    z-index: 999;
    position: absolute;
    display: inline-block;
    color: #D20862;
    font-size: 2em;
    font-weight: 870;
  }

  .filter-location-wrapper {
    display: grid;
    justify-content: flex-end;
    align-items: center;
    grid-template-columns: repeat(2, max-content);
    grid-column-gap: 8px;
  }

  .filter-location-wrapper select {
    padding: 3px 40px 3px 0;
  }
</style>

<svelte:head>
  <title>
    Daftar engineer keren yang terkena dampak pemutusan hubungan kerja karena
    pandemi.
  </title>
</svelte:head>

<h4>Kata siapa cari software engineer yang berpengalaman itu susah?</h4>
<p>
  Sekarang, kami buat jadi mudah! Berikut adalah daftar engineer keren yang
  terkena dampak pemutusan hubungan kerja karena pandemi.
</p>
<div class="filter-location-wrapper">
  <span>Cari Berdasarkan Lokasi</span>
  <select on:change={handleLocationChange}>
    <option value="">Semua Lokasi</option>
    {#each getAllLocation as location}
      <option value={location}>{location}</option>
    {/each}
  </select>
</div>
<div>
  {#each sortedPeople as p}
    <div class="terminal-card">
      <header>{p.name}</header>
      <ul>
        <li>⏲️ {p.status}</li>
        <li>💻 {p.role}</li>
        <li>📍 {p.location}</li>
        {#if p.tech_stack.length > 0}
          <li>
            ⚙️
            {#each p.tech_stack as tech}
              <span class="badge" style={getBadgeStyle(tech)}>{tech}</span>
            {/each}
          </li>
        {/if}
        <li>
          {#if p.hired}
            <div class="hired">
              HIRED!
            </div>
          {/if}

          {#if typeof p.social_media == 'string'}
            <span>🔗</span>
            <a href={p.social_media} target="_blank">Linkedin</a>
          {/if}

          {#if typeof p.social_media === 'object'}
            {#each Object.keys(p.social_media).sort() as key}
              <span>🔗</span>
              <a href={p.social_media[key]} target="_blank">{key}</a>
            {/each}
          {/if}

        </li>
      </ul>
    </div>
  {/each}
  <hr />

</div>
<div>
  <h4>Mau menambahkan seseorang?</h4>

  <a href="https://github.com/rizafahmi/carikerja" target="_blank">
    Clone repositori ini
  </a>
  dan tambahkan data baru di
  <code>src/data/people.js</code>
  . Bisa juga edit langsung melalui
  <a
    href="https://github.com/rizafahmi/carikerja/edit/master/src/data/people.js"
    target="_blank">
    Github
  </a>
  .
</div>
