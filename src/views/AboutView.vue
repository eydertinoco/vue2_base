<template>
  <div class="about">
    <div class="about__info">
      <img alt="Vue logo" src="../assets/fotoInicial.jpeg">
      <p>
        Lorem ipsum quis netus etiam cursus donec erat ligula eros vitae, bibendum tincidunt vulputate mollis nibh a
        dolor id sed, odio quam adipiscing feugiat mauris varius dictumst laoreet congue. nunc vel eu iaculis fringilla
        dictum nisi ac libero venenatis etiam, condimentum sociosqu donec dictum aliquam facilisis suspendisse iaculis
        accumsan inceptos, condimentum proin quam vel aptent imperdiet consequat ut aliquet. ut gravida velit
        condimentum nisl tincidunt venenatis tempus donec cras lacinia diam, vitae donec felis tortor neque non et
        felis vulputate purus. viverra turpis inceptos imperdiet ornare nulla euismod venenatis luctus orci, diam in
        lorem curabitur donec auctor aptent vel felis vehicula, purus vivamus mauris ut commodo curabitur nec faucibus.
      </p>
    </div>
    <div class="about__info">
      <p>
        Lorem ipsum quis netus etiam cursus donec erat ligula eros vitae, bibendum tincidunt vulputate mollis nibh a
        dolor id sed, odio quam adipiscing feugiat mauris varius dictumst laoreet congue. nunc vel eu iaculis fringilla
        dictum nisi ac libero venenatis etiam, condimentum sociosqu donec dictum aliquam facilisis suspendisse iaculis
        accumsan inceptos, condimentum proin quam vel aptent imperdiet consequat ut aliquet. ut gravida velit
        condimentum nisl tincidunt venenatis tempus donec cras lacinia diam, vitae donec felis tortor neque non et
        felis vulputate purus. viverra turpis inceptos imperdiet ornare nulla euismod venenatis luctus orci, diam in
        lorem curabitur donec auctor aptent vel felis vehicula, purus vivamus mauris ut commodo curabitur nec faucibus.
      </p>
      <img alt="Vue logo" src="../assets/fotoInicial.jpeg">
    </div>
  </div>
</template>

<script>

</script>

<style scoped lang="scss">
.about {
  &__info {
    background: blue;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    & img {
      background: white;
      border: 1px solid blue;
      border-radius: 10px;
      width: 350px;
      height: 210px;
    }
    & p {
      color: white;
      max-width: 600px;
      font-size: 18px;
      text-align: justify;
    }
  }
}
</style>