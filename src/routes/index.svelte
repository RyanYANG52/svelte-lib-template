<script lang="ts">
	import { capitalize, Add } from 'svelte-lib';
	export let name = 'svelte';
</script>

<h1>{capitalize(name)}</h1>
<Add a={2} b={3} />
