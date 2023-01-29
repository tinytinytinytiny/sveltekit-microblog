<script>
	export let className = null;
	export let id = null;
	export let color = 'primary';
	export let variant = 'primary';
	export let disabled = null;
	export let form = null;
	export let type = 'button';
</script>

<button
	class={className ? `button ${className}` : 'button'}
	data-color={color}
	data-variant={variant}
	{id}
	{disabled}
	{form}
	{type}
	on:click
>
	<slot />
</button>
