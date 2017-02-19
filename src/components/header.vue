<template>
<div>
	<header>
      <h1>
        Note Book
        <span>
          <icon name="bandcamp"></icon>
        </span>
      </h1>
    </header>
</div>
	
</template>

<script>
	export default {
		name: 'header'
	}
</script>

<style scoped>
header h1 {
  margin: 0;
  background-color: #AED6F1;
  text-align: center;
  line-height: 70px;
  width: 100%;
  position: relative;
  color: white;
  font-size: 24px;
  position: relative;
}

header h1 span {
  width: 48px;
  height: 48px;
  display: inline-block;
  position: absolute;
  right: 0;
  cursor: pointer;
}

</style>