<template>
    <div class="wrapper">
      <div class="field-group">
        <input type="text" :placeholder="defaultWishTitle" size="30">
        <div class="line"></div>
      </div>
    </div>
</template>

<script>
export default {
    name: 'BannerLabel',
    data() {
        return {
            currentWish: 'Everbloom Violet',
            defaultWishTitle: 'Adrift in the Harbor'
        }
    },
}
</script>

<style scoped>

.wrapper {
    display: flex;
    justify-content: center;
}

.wrapper input[type=text] {
    width: 100%;
    background: inherit;
    border: none;
    background-color: inherit;
    display: block;
    font-size: 2em;
    text-align: center;
    color: #fff;
}

.wrapper input[type=text]:focus {
  outline: none;
}

.field-group {
  text-align: center;
}

.field-group .line {
  height: 2px;
  width: 0px;
  position: absolute;
  background-color: #fff;
  display: inline-block;
  transition: .3s width ease-in-out;
  position: relative;
  top: -14px;
}

.wrapper input[type=text]:focus + .line {
    width: 100%;
    background-color: #fff;
}

</style>