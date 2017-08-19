import { Injectable } from '@angular/core';
import { BaThemeConfigProvider, colorHelper, layoutPaths } from '../../../../theme';

@Injectable()
export class HeatMapsService {

  constructor(private _baConfig: BaThemeConfigProvider) {
  }

  getData() {
    let layoutColors = this._baConfig.get().colors;

    let mapData = [
      { 'id': 'AF', 'title': 'Afghanistan', 'value': 32358260 },
      { 'id': 'AL', 'title': 'Albania', 'value': 3215988 },
      { 'id': 'DZ', 'title': 'Algeria', 'value': 35980193 },
      { 'id': 'AO', 'title': 'Angola', 'value': 19618432 },
      { 'id': 'AR', 'title': 'Argentina', 'value': 40764561 },
      { 'id': 'AM', 'title': 'Armenia', 'value': 3100236 },
      { 'id': 'AU', 'title': 'Australia', 'value': 22605732 },
      { 'id': 'AT', 'title': 'Austria', 'value': 8413429 },
      { 'id': 'AZ', 'title': 'Azerbaijan', 'value': 9306023 },
      { 'id': 'BH', 'title': 'Bahrain', 'value': 1323535 },
      { 'id': 'BD', 'title': 'Bangladesh', 'value': 150493658 },
      { 'id': 'BY', 'title': 'Belarus', 'value': 9559441 },
      { 'id': 'BE', 'title': 'Belgium', 'value': 10754056 },
      { 'id': 'BJ', 'title': 'Benin', 'value': 9099922 },
      { 'id': 'BT', 'title': 'Bhutan', 'value': 738267 },
      { 'id': 'BO', 'title': 'Bolivia', 'value': 10088108 },
      { 'id': 'BA', 'title': 'Bosnia and Herzegovina', 'value': 3752228 },
      { 'id': 'BW', 'title': 'Botswana', 'value': 2030738 },
      { 'id': 'BR', 'title': 'Brazil', 'value': 196655014 },
      { 'id': 'BN', 'title': 'Brunei', 'value': 405938 },
      { 'id': 'BG', 'title': 'Bulgaria', 'value': 7446135 },
      { 'id': 'BF', 'title': 'Burkina Faso', 'value': 16967845 },
      { 'id': 'BI', 'title': 'Burundi', 'value': 8575172 },
      { 'id': 'KH', 'title': 'Cambodia', 'value': 14305183 },
      { 'id': 'CM', 'title': 'Cameroon', 'value': 20030362 },
      { 'id': 'CA', 'title': 'Canada', 'value': 34349561 },
      { 'id': 'CV', 'title': 'Cape Verde', 'value': 500585 },
      { 'id': 'CF', 'title': 'Central African Rep.', 'value': 4486837 },
      { 'id': 'TD', 'title': 'Chad', 'value': 11525496 },
      { 'id': 'CL', 'title': 'Chile', 'value': 17269525 },
      { 'id': 'CN', 'title': 'China', 'value': 347565324 },
      { 'id': 'CO', 'title': 'Colombia', 'value': 46927125 },
      { 'id': 'KM', 'title': 'Comoros', 'value': 753943 },
      { 'id': 'CD', 'title': 'Congo, Dem. Rep.', 'value': 67757577 },
      { 'id': 'CG', 'title': 'Congo, Rep.', 'value': 4139748 },
      { 'id': 'CR', 'title': 'Costa Rica', 'value': 4726575 },
      { 'id': 'CI', 'title': 'Cote d\'Ivoire', 'value': 20152894 },
      { 'id': 'HR', 'title': 'Croatia', 'value': 4395560 },
      { 'id': 'CU', 'title': 'Cuba', 'value': 11253665 },
      { 'id': 'CY', 'title': 'Cyprus', 'value': 1116564 },
      { 'id': 'CZ', 'title': 'Czech Rep.', 'value': 10534293 },
      { 'id': 'DK', 'title': 'Denmark', 'value': 5572594 },
      { 'id': 'DJ', 'title': 'Djibouti', 'value': 905564 },
      { 'id': 'DO', 'title': 'Dominican Rep.', 'value': 10056181 },
      { 'id': 'EC', 'title': 'Ecuador', 'value': 14666055 },
      { 'id': 'EG', 'title': 'Egypt', 'value': 82536770 },
      { 'id': 'SV', 'title': 'El Salvador', 'value': 6227491 },
      { 'id': 'GQ', 'title': 'Equatorial Guinea', 'value': 720213 },
      { 'id': 'ER', 'title': 'Eritrea', 'value': 5415280 },
      { 'id': 'EE', 'title': 'Estonia', 'value': 1340537 },
      { 'id': 'ET', 'title': 'Ethiopia', 'value': 84734262 },
      { 'id': 'FJ', 'title': 'Fiji', 'value': 868406 },
      { 'id': 'FI', 'title': 'Finland', 'value': 5384770 },
      { 'id': 'FR', 'title': 'France', 'value': 63125894 },
      { 'id': 'GA', 'title': 'Gabon', 'value': 1534262 },
      { 'id': 'GM', 'title': 'Gambia', 'value': 1776103 },
      { 'id': 'GE', 'title': 'Georgia', 'value': 4329026 },
      { 'id': 'DE', 'title': 'Germany', 'value': 82162512 },
      { 'id': 'GH', 'title': 'Ghana', 'value': 24965816 },
      { 'id': 'GR', 'title': 'Greece', 'value': 11390031 },
      { 'id': 'GT', 'title': 'Guatemala', 'value': 14757316 },
      { 'id': 'GN', 'title': 'Guinea', 'value': 10221808 },
      { 'id': 'GW', 'title': 'Guinea-Bissau', 'value': 1547061 },
      { 'id': 'GY', 'title': 'Guyana', 'value': 756040 },
      { 'id': 'HT', 'title': 'Haiti', 'value': 10123787 },
      { 'id': 'HN', 'title': 'Honduras', 'value': 7754687 },
      { 'id': 'HK', 'title': 'Hong Kong, China', 'value': 7122187 },
      { 'id': 'HU', 'title': 'Hungary', 'value': 9966116 },
      { 'id': 'IS', 'title': 'Iceland', 'value': 324366 },
      { 'id': 'IN', 'title': 'India', 'value': 241491960 },
      { 'id': 'ID', 'title': 'Indonesia', 'value': 242325638 },
      { 'id': 'IR', 'title': 'Iran', 'value': 74798599 },
      { 'id': 'IQ', 'title': 'Iraq', 'value': 32664942 },
      { 'id': 'IE', 'title': 'Ireland', 'value': 4525802 },
      { 'id': 'IL', 'title': 'Israel', 'value': 7562194 },
      { 'id': 'IT', 'title': 'Italy', 'value': 60788694 },
      { 'id': 'JM', 'title': 'Jamaica', 'value': 2751273 },
      { 'id': 'JP', 'title': 'Japan', 'value': 126497241 },
      { 'id': 'JO', 'title': 'Jordan', 'value': 6330169 },
      { 'id': 'KZ', 'title': 'Kazakhstan', 'value': 16206750 },
      { 'id': 'KE', 'title': 'Kenya', 'value': 41609728 },
      { 'id': 'KP', 'title': 'Korea, Dem. Rep.', 'value': 24451285 },
      { 'id': 'KR', 'title': 'Korea, Rep.', 'value': 48391343 },
      { 'id': 'KW', 'title': 'Kuwait', 'value': 2818042 },
      { 'id': 'KG', 'title': 'Kyrgyzstan', 'value': 5392580 },
      { 'id': 'LA', 'title': 'Laos', 'value': 6288037 },
      { 'id': 'LV', 'title': 'Latvia', 'value': 2243142 },
      { 'id': 'LB', 'title': 'Lebanon', 'value': 4259405 },
      { 'id': 'LS', 'title': 'Lesotho', 'value': 2193843 },
      { 'id': 'LR', 'title': 'Liberia', 'value': 4128572 },
      { 'id': 'LY', 'title': 'Libya', 'value': 6422772 },
      { 'id': 'LT', 'title': 'Lithuania', 'value': 3307481 },
      { 'id': 'LU', 'title': 'Luxembourg', 'value': 515941 },
      { 'id': 'MK', 'title': 'Macedonia, FYR', 'value': 2063893 },
      { 'id': 'MG', 'title': 'Madagascar', 'value': 21315135 },
      { 'id': 'MW', 'title': 'Malawi', 'value': 15380888 },
      { 'id': 'MY', 'title': 'Malaysia', 'value': 28859154 },
      { 'id': 'ML', 'title': 'Mali', 'value': 15839538 },
      { 'id': 'MR', 'title': 'Mauritania', 'value': 3541540 },
      { 'id': 'MU', 'title': 'Mauritius', 'value': 1306593 },
      { 'id': 'MX', 'title': 'Mexico', 'value': 114793341 },
      { 'id': 'MD', 'title': 'Moldova', 'value': 3544864 },
      { 'id': 'MN', 'title': 'Mongolia', 'value': 2800114 },
      { 'id': 'ME', 'title': 'Montenegro', 'value': 632261 },
      { 'id': 'MA', 'title': 'Morocco', 'value': 32272974 },
      { 'id': 'MZ', 'title': 'Mozambique', 'value': 23929708 },
      { 'id': 'MM', 'title': 'Myanmar', 'value': 48336763 },
      { 'id': 'NA', 'title': 'Namibia', 'value': 2324004 },
      { 'id': 'NP', 'title': 'Nepal', 'value': 30485798 },
      { 'id': 'NL', 'title': 'Netherlands', 'value': 16664746 },
      { 'id': 'NZ', 'title': 'New Zealand', 'value': 4414509 },
      { 'id': 'NI', 'title': 'Nicaragua', 'value': 5869859 },
      { 'id': 'NE', 'title': 'Niger', 'value': 16068994 },
      { 'id': 'NG', 'title': 'Nigeria', 'value': 162470737 },
      { 'id': 'NO', 'title': 'Norway', 'value': 4924848 },
      { 'id': 'OM', 'title': 'Oman', 'value': 2846145 },
      { 'id': 'PK', 'title': 'Pakistan', 'value': 176745364 },
      { 'id': 'PA', 'title': 'Panama', 'value': 3571185 },
      { 'id': 'PG', 'title': 'Papua New Guinea', 'value': 7013829 },
      { 'id': 'PY', 'title': 'Paraguay', 'value': 6568290 },
      { 'id': 'PE', 'title': 'Peru', 'value': 29399817 },
      { 'id': 'PH', 'title': 'Philippines', 'value': 94852030 },
      { 'id': 'PL', 'title': 'Poland', 'value': 38298949 },
      { 'id': 'PT', 'title': 'Portugal', 'value': 10689663 },
      { 'id': 'PR', 'title': 'Puerto Rico', 'value': 3745526 },
      { 'id': 'QA', 'title': 'Qatar', 'value': 1870041 },
      { 'id': 'RO', 'title': 'Romania', 'value': 21436495 },
      { 'id': 'RU', 'title': 'Russia', 'value': 142835555 },
      { 'id': 'RW', 'title': 'Rwanda', 'value': 10942950 },
      { 'id': 'SA', 'title': 'Saudi Arabia', 'value': 28082541 },
      { 'id': 'SN', 'title': 'Senegal', 'value': 12767556 },
      { 'id': 'RS', 'title': 'Serbia', 'value': 9853969 },
      { 'id': 'SL', 'title': 'Sierra Leone', 'value': 5997486 },
      { 'id': 'SG', 'title': 'Singapore', 'value': 5187933 },
      { 'id': 'SK', 'title': 'Slovak Republic', 'value': 5471502 },
      { 'id': 'SI', 'title': 'Slovenia', 'value': 2035012 },
      { 'id': 'SB', 'title': 'Solomon Islands', 'value': 552267 },
      { 'id': 'SO', 'title': 'Somalia', 'value': 9556873 },
      { 'id': 'ZA', 'title': 'South Africa', 'value': 50459978 },
      { 'id': 'ES', 'title': 'Spain', 'value': 46454895 },
      { 'id': 'LK', 'title': 'Sri Lanka', 'value': 21045394 },
      { 'id': 'SD', 'title': 'Sudan', 'value': 34735288 },
      { 'id': 'SR', 'title': 'Suriname', 'value': 529419 },
      { 'id': 'SZ', 'title': 'Swaziland', 'value': 1203330 },
      { 'id': 'SE', 'title': 'Sweden', 'value': 9440747 },
      { 'id': 'CH', 'title': 'Switzerland', 'value': 7701690 },
      { 'id': 'SY', 'title': 'Syria', 'value': 20766037 },
      { 'id': 'TW', 'title': 'Taiwan', 'value': 23072000 },
      { 'id': 'TJ', 'title': 'Tajikistan', 'value': 6976958 },
      { 'id': 'TZ', 'title': 'Tanzania', 'value': 46218486 },
      { 'id': 'TH', 'title': 'Thailand', 'value': 69518555 },
      { 'id': 'TG', 'title': 'Togo', 'value': 6154813 },
      { 'id': 'TT', 'title': 'Trinidad and Tobago', 'value': 1346350 },
      { 'id': 'TN', 'title': 'Tunisia', 'value': 10594057 },
      { 'id': 'TR', 'title': 'Turkey', 'value': 73639596 },
      { 'id': 'TM', 'title': 'Turkmenistan', 'value': 5105301 },
      { 'id': 'UG', 'title': 'Uganda', 'value': 34509205 },
      { 'id': 'UA', 'title': 'Ukraine', 'value': 45190180 },
      { 'id': 'AE', 'title': 'United Arab Emirates', 'value': 7890924 },
      { 'id': 'GB', 'title': 'United Kingdom', 'value': 62417431 },
      { 'id': 'US', 'title': 'United States', 'value': 313085380 },
      { 'id': 'UY', 'title': 'Uruguay', 'value': 3380008 },
      { 'id': 'UZ', 'title': 'Uzbekistan', 'value': 27760267 },
      { 'id': 'VE', 'title': 'Venezuela', 'value': 29436891 },
      { 'id': 'PS', 'title': 'West Bank and Gaza', 'value': 4152369 },
      { 'id': 'VN', 'title': 'Vietnam', 'value': 88791996 },
      { 'id': 'YE', 'title': 'Yemen, Rep.', 'value': 24799880 },
      { 'id': 'ZM', 'title': 'Zambia', 'value': 13474959 },
      { 'id': 'ZW', 'title': 'Zimbabwe', 'value': 12754378 }
    ];

    let min = Infinity
      , max = -Infinity;

    // get min and max values
    for (let i = 0; i < mapData.length; i++) {
      var value = mapData[i].value;
      if (value < min) {
        min = value;
      }
      if (value > max) {
        max = value;
      }
    }

    let dataProvider = {
      mapVar: AmCharts.maps.worldLow,
      areas: mapData.map(function (dataItem) {
        let value = dataItem.value;
        let n = (value - min) / (max - min);
        // let r = 255 * n
        // let g = 255 * (1 - n)
        // let b = 0
        dataItem['color'] = colorHelper.mix('#ff0000', '#00ff00', n * 100);
        return dataItem;
      })
    };

    return {
      type: 'map',
      theme: 'blur',
      zoomControl: { zoomControlEnabled: true, panControlEnabled: true },
      titles: [
        { text: 'Cost of selection, across the globe', size: 14 },
      ],
      dataProvider: dataProvider,

      areasSettings: {
        rollOverOutlineColor: layoutColors.border,
        rollOverColor: layoutColors.primaryDark,
        alpha: 0.8,
        unlistedAreasAlpha: 0.2,
        unlistedAreasColor: layoutColors.defaultText,
        balloonText: '[[title]]: [[value]] dollars'
      },

      export: {
        enabled: true
      },
      pathToImages: layoutPaths.images.amChart
    };
  }
}
