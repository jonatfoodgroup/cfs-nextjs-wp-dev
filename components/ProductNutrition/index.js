const ProductNutrition = () => {
  return (
    <div id="nutrition-panel">
      <div class="nfp-nutrition-facts single-label">
        <table class="nfp-nutrition-facts-table">
          <thead>
            <tr>
              <td class="table-title" colspan="3">Nutrition Facts</td>
            </tr>
            <tr class="servings-per-container">
              <td colspan="3">About 6 Servings Per Container</td>
            </tr>
          </thead>
          <tbody>
            <tr class="thick-bottom-border serving-size">
              <th scope="row" colspan="2">
                <strong>Serving size</strong>
              </th>
              <td colspan="1">
                <strong>1 Cup (240mL)</strong>
              </td>
            </tr>
            <tr class="no-border servings">
              <td class="left-aligned" colspan="3">
                <strong>Amount per serving</strong>
              </td>
            </tr>
            <tr class="calories">
              <th scope="row" colspan="2">
                Calories				</th>
              <td>
                10				</td>
            </tr>
            <tr class="dv-row push-right">
              <td colspan="2"></td>
              <th scope="col">
                % Daily Value<sup>*</sup>				</th>
            </tr>
            <tr class="fat_total">
              <th scope="row">Total Fat</th>
              <td>0g</td>
              <td>0%</td>
            </tr>
            <tr class="sub-row first saturated_fat">
              <th scope="row">Saturated Fat</th>
              <td>0g</td>
              <td>0%</td>
            </tr>
            <tr class="sub-row transfat">
              <th scope="row"><em>Trans</em> Fat</th>
              <td>0g</td>
              <td></td>
            </tr>
            <tr class="cholesterol">
              <th scope="row">Cholesterol</th>
              <td>0mg</td>
              <td>0%</td>
            </tr>
            <tr class="sodium">
              <th scope="row">Sodium</th>
              <td>830mg</td>
              <td>36%</td>
            </tr>
            <tr class="carbohydrate_total">
              <th scope="row">Total Carbohydrate</th>
              <td>1g</td>
              <td>0%</td>
            </tr>
            <tr class="sub-row first dietary_fiber">
              <th scope="row">Dietary Fiber</th>
              <td>0g</td>
              <td>0%</td>
            </tr>
            <tr class="sub-row no-bottom-border sugars">
              <th scope="row">Total Sugars</th>
              <td>&lt;1g</td>
              <td></td>
            </tr>
            <tr class="sub-sub-row">
              <td colspan="2">Includes 0g Added Sugars</td>
              <td>0%</td>
            </tr>
            <tr class="thick-bottom-border protein">
              <th scope="row">Protein</th>
              <td>2g</td>
              <td></td>
            </tr>
            <tr class="nutrient-row vitamin_d">
              <th scope="row">Vitamin D</th>
              <td>0mcg</td>
              <td>0%</td>
            </tr>
            <tr class="nutrient-row calcium">
              <th scope="row">Calcium</th>
              <td>10mg</td>
              <td>0%</td>
            </tr>
            <tr class="nutrient-row iron">
              <th scope="row">Iron</th>
              <td>0.2mg</td>
              <td>0%</td>
            </tr>
            <tr class="nutrient-row potassium">
              <th scope="row">Potassium</th>
              <td>30mg</td>
              <td>0%</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colspan="3">
                <sup>*</sup>The % Daily Value (DV) tells you how much a nutrient in a serving of food contributes to a daily diet. 2,000 calories a day is used for general nutrition advice.				</td>
            </tr>
          </tfoot>
        </table>
      </div>
      <div class="nutrition-info"><p>Nutrition Facts are based on our current data. However, because the data may change from time to time, this information may not always be identical to the Nutrition Facts table found on the labels of products.</p></div>
    </div>

  );
};
export default ProductNutrition;