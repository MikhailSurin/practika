<template>
  <div class="company-info">
    <div class="company-info__inner">
      <ul class="company-info_links-list">
        <li class="company-info__links-item">
          <a class="company-info__link" href="#">License Agreement</a>
        </li>
        <li class="company-info__links-item">
          <a class="company-info__link" href="#">Privacy Policy</a>
        </li>
        <li class="company-info__links-item">
          <a class="company-info__link" href="#">Practico Website</a>
        </li>
        <li class="company-info__links-item">
          <a class="company-info__link" href="#">Contact Us</a>
        </li>
      </ul>
      <b class="company-info__copyright">
        PRAKTIKA, INC. EIN 87-3267429, 7900 Oak Lane, Suite 400, Miami Lakes, FL, 33016
      </b>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppLinksList"
}
</script>

<style>
.company-info {
  padding: 0;
}

.company-info__inner {
  margin: 0 auto;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

.company-info_links-list {
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  list-style: none;
}
.company-info__links-item {
  margin: 0;
  padding: 0;
}
.company-info__links-item:not(:first-child) {
  margin-top: 20px;
}

.company-info__link {
  margin: 0;
  padding: 0;

  font-weight: 400;
  font-style: normal;
  font-size: 15px;
  line-height: 20px;
  color: #000000;
  text-decoration: none;
}
.company-info__copyright {
  margin: 30px 0 0;
  padding: 0;

  font-weight: 400;
  font-style: normal;
  font-size: 15px;
  line-height: 20px;
  color: #A3A3A3;
}

@media screen and (min-width: 748px) {
  .company-info_links-list {
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: center;
  }

  .company-info__links-item:not(:first-child) {
    margin-top: 0;
    margin-left: 60px;
  }
}
</style>