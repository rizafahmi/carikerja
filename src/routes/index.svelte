<script>
  import people from '../data/people.js';
</script>

<style>
  .terminal-card {
    margin: 1em;
  }
  ul {
    margin-left: 1em;
  }
</style>

<svelte:head>
  <title>PHK.id - Situs daftar developer yang terkena dampak COVID-19</title>
</svelte:head>

<h4>Daftar developer keren yang terkena dampak COVID-19.</h4>

<div>
  {#each people as p}
    <div class="terminal-card">
      <header>{p.name}</header>
      <ul>
        <li>⏲️ {p.status}</li>
        <li>💻 {p.role}</li>
        <li>📍 {p.location}</li>
        <li>
          <span>🔗</span>
          <a href={p.social_media} target="_blank">Linkedin</a>
        </li>
      </ul>
    </div>
  {/each}
</div>
