<script lang="ts">
	import NotesSidebar from './sidebar.svelte';
	import Layout from '$lib/components/notes/layout.svelte';
</script>

<svelte:head>
	<title>Typyst | Daily</title>
</svelte:head>

<Layout sidebar={NotesSidebar}>
	<slot />
</Layout>
