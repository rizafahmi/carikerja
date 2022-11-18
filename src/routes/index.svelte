<script>
  import Select from "svelte-select";
  import { onMount } from "svelte";
  import people from "../data/people.js";

  let sortedPeople = [];
  let getAllLocation = people.map(person => person.location);
  getAllLocation = [...new Set(getAllLocation)].sort((a, b) => a.localeCompare(b)); // get unique location and filter by alphabetically
  let getAllTechStack = [...new Set(people.filter(person => !person.hired).map(person => person.tech_stack.map(tech => tech.toUpperCase())).flat())].sort();

  function getSortedPeople() {
    // previous sorting doesn't work as expected
    sortedPeople = people.sort((a, b) => {
      let firstPersonName = a.name.replace(/\s/, "").toLowerCase();
      let secondPersonName = b.name.replace(/\s/, "").toLowerCase();

      if (firstPersonName < secondPersonName) {
        return -1;
      } else if (firstPersonName > secondPersonName) {
        return 1;
      } else {
        return 0;
      }
    });
    
    // remove duplicate data and filter only unhired job seeker
    sortedPeople = sortedPeople.filter((person, index, self) => {
      // temporarily filtering duplicate data using name and Linkedin (since it's unique)
      return (self.findIndex(predicateVariable => {
        return (
          (predicateVariable.name.replace(/\s/, "").toLowerCase() == person.name.replace(/\s/, "").toLowerCase()) && 
          (predicateVariable.social_media["Linkedin"] == person.social_media["Linkedin"])
        );
      }) == index) && !person.hired;
    });
  }

  // Store filter data to implement multiple filtering
  const filter = {
    location: "",
    techStacks: []
  };

  // Filter function triggered by any filter changes
  function filterPeople() {
    getSortedPeople();

    if (filter.location) {
      sortedPeople = sortedPeople.filter(person => person.location === filter.location);
    }

    if (filter.techStacks.length) {
      sortedPeople = sortedPeople.filter(person => {
        let isExist = false;
        filter.techStacks.some(techStack => {
          if (person.tech_stack.map(stack => stack.toUpperCase()).includes(techStack)) {
            isExist = true;
            return true;
          }
        });
        return isExist;
      });
    }
  }

  function handleLocationChange(e) {
    const location = e.detail ? e.detail.value : null;
    filter.location = location;

    filterPeople();
  }

  function handleStackChange(e) {
    const techStacks = e.detail ? e.detail.map(value => value.value) : [];
    filter.techStacks = techStacks;

    filterPeople();
  }


  let badges = [];
  function getBadgeStyle(text) {
    if (!text) return;
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
    getSortedPeople();
  });
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

  .filter {
    display: flex;
    gap: 2rem;
  }

  .filter > div {
    flex: 1 1 0%;
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
<div class="filter">
  <div>
    <span>Cari Berdasarkan Tech Stack</span>
    <Select on:select={handleStackChange} items={getAllTechStack} isMulti={true} />
  </div>
  <div>
    <span>Cari Berdasarkan Lokasi</span>
    <Select on:select={handleLocationChange} on:clear={handleLocationChange} items={getAllLocation} />
  </div>
</div>
<div>
  {#each sortedPeople as p}
    <div class="terminal-card">
      <header>{p.name}</header>
      <ul>
        <li>⏲️ {p.status}</li>
        <li>💻 {p.role}</li>
        <li>📍 {p.location}</li>
        {#if p.tech_stack.length != 0}
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

          {#if typeof p.social_media == "string"}
            <span>🔗</span>
            <a href={p.social_media} target="_blank">Linkedin</a>
          {/if}

          {#if typeof p.social_media === "object"}
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
