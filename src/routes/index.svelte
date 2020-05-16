<script>
  import people from '../data/people.js';

  const sortedPeople = people.sort((a, b) => a.name > b.name);
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
  }
  .react {
    background-color: #61dafb;
  }
  .react-native {
    background-color: #282c34;
    color: #61dafb;
  }
  .typescript {
    background-color: #027acc;
    color: #fff;
  }
  .devops {
    background-color: #f8981d;
  }
  .golang {
    background-color: #000;
    color: #fff;
  }
  .nodejs {
    background-color: #7ab361;
  }
  .php {
    background-color: #777bb3;
  }
</style>

<svelte:head>
  <title>Carikerja - Situs daftar developer yang terkena dampak COVID-19</title>
</svelte:head>

<h4>Daftar developer keren yang terkena dampak COVID-19.</h4>

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
              <span class="badge {tech}">{tech}</span>
            {/each}
          </li>
        {/if}
        <li>
          <span>🔗</span>
          <a href={p.social_media} target="_blank">Linkedin</a>
        </li>
      </ul>
    </div>
  {/each}
  <hr />

  <p>
    Ingin menambahkan seseorang kedalam list?
    <a href="https://github.com/rizafahmi/carikerja" target="_blank">
      Clone repositori ini
    </a>
    dan tambahkan data baru di
    <code>src/data/people.js</code>
    . Atau edit langsung via
    <a
      href="https://github.com/rizafahmi/carikerja/edit/master/src/data/people.js"
      target="_blank">
      Github
    </a>
    .
  </p>
</div>
