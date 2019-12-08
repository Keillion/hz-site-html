<template>
  <footer>
    <p>
        Keillion Wang, full stack engineer.
    </p>
    <p>
        Main focus on js, .NET Core.
    </p>
    <p>
        Hobby reading, hiking, games.
    </p>
    <p>
        email: <a href="mailto:keillionv@gmail.com">keillionv@gmail.com</a>
    </p>
    <p>
        github: <a href="https://github.com/Keillion">github.com/Keillion</a>
    </p>
    <p>
        <img class="white-icon" src="img/icons/favicon-white-16x16.png"><a href="https://www.keillion.site">www.keillion.site</a>
    </p>
  </footer>
</template>

<script>
export default {
  name: 'KFooter',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
footer {
    padding: 30px;
    background: #83af9b;
    color: #f0f0f0;
}
.white-icon {
    vertical-align: middle;
    margin-right: 8px;
}
a {
    color: #f0f0f0;
}
</style>
