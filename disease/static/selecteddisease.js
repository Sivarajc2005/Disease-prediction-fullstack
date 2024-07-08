function start(){
  const selecteddisease = ['Itching', 'Skin Rash', 'Nodal Skin Eruptions', 'Continuous Sneezing', 'Shivering', 'Chills', 'Joint Pain', 'Stomach Pain', 'Acidity', 'Ulcers On Tongue', 'Muscle Wasting', 'Vomiting', 'Burning Micturition', 'Spotting  urination', 'Fatigue', 'Weight Gain', 'Anxiety', 'Cold Hands And Feets', 'Mood Swings', 'Weight Loss', 'Restlessness', 'Lethargy', 'Patches In Throat', 'Irregular Sugar Level', 'Cough', 'High Fever', 'Sunken Eyes', 'Breathlessness', 'Sweating', 'Dehydration', 'Indigestion', 'Headache', 'Yellowish Skin', 'Dark Urine', 'Nausea', 'Loss Of Appetite', 'Pain Behind The Eyes', 'Back Pain', 'Constipation', 'Abdominal Pain', 'Diarrhoea', 'Mild Fever', 'Yellow Urine', 'Yellowing Of Eyes', 'Acute Liver Failure', 'Fluid Overload', 'Swelling Of Stomach', 'Swelled Lymph Nodes', 'Malaise', 'Blurred And Distorted Vision', 'Phlegm', 'Throat Irritation', 'Redness Of Eyes', 'Sinus Pressure', 'Runny Nose', 'Congestion', 'Chest Pain', 'Weakness In Limbs', 'Fast Heart Rate', 'Pain During Bowel Movements', 'Pain In Anal Region', 'Bloody Stool', 'Irritation In Anus', 'Neck Pain', 'Dizziness', 'Cramps', 'Bruising', 'Obesity', 'Swollen Legs', 'Swollen Blood Vessels', 'Puffy Face And Eyes', 'Enlarged Thyroid', 'Brittle Nails', 'Swollen Extremeties', 'Excessive Hunger', 'Extra Marital Contacts', 'Drying And Tingling Lips', 'Slurred Speech', 'Knee Pain', 'Hip Joint Pain', 'Muscle Weakness', 'Stiff Neck', 'Swelling Joints', 'Movement Stiffness', 'Spinning Movements', 'Loss Of Balance', 'Unsteadiness', 'Weakness Of One Body Side', 'Loss Of Smell', 'Bladder Discomfort', 'Foul Smell Of urine', 'Continuous Feel Of Urine', 'Passage Of Gases', 'Internal Itching', 'Toxic Look (typhos)', 'Depression', 'Irritability', 'Muscle Pain', 'Altered Sensorium', 'Red Spots Over Body', 'Belly Pain', 'Abnormal Menstruation', 'Dischromic  Patches', 'Watering From Eyes', 'Increased Appetite', 'Polyuria', 'Family History', 'Mucoid Sputum', 'Rusty Sputum', 'Lack Of Concentration', 'Visual Disturbances', 'Receiving Blood Transfusion', 'Receiving Unsterile Injections', 'Coma', 'Stomach Bleeding', 'Distention Of Abdomen', 'History Of Alcohol Consumption', 'Fluid Overload.1', 'Blood In Sputum', 'Prominent Veins On Calf', 'Palpitations', 'Painful Walking', 'Pus Filled Pimples', 'Blackheads', 'Scurring', 'Skin Peeling', 'Silver Like Dusting', 'Small Dents In Nails', 'Inflammatory Nails', 'Blister', 'Red Sore Around Nose', 'Yellow Crust Ooze'];

  let top = `<h2 > Select The Symptoms You Facing </h2>`;
  $("#sym").append(top);
  for (var i = 0; i <selecteddisease.length; i++) {
    item=selecteddisease[i];
    let html = `<div class="check" id="check">
    <input type="checkbox" name="disease" value="${item}"> ${item}</div><br>`
    $('#symptoms').append(html)}
  
}
function hideme(x){
  x.style.display = 'none';
  let end = `<button onclick="process()" class="button-86" id="end_but" > Found The Disease </button>`;
  $("#end").append(end)
}

function process() { 
  const checkboxes = document.querySelectorAll('input[name="disease"]:checked');
  const values = Array.from(checkboxes).map(checkbox => checkbox.value);
  console.log(values);
  let sent={'symptoms': values};
  console.log(sent);

  $.ajax({
    type: "POST",
    url:'/sym',
    data: JSON.stringify(sent),
    contentType: 'application/json',
    success:function(response){
      alert(response['msg'])
   }
  })
}

function how(){
  const items = document.getElementById("symptoms")
  const end = document.getElementById("end_but")
  document.getElementById("sym").classList.add("top_styling");
  items.classList.add("item_styling");
  end.classList.add("complete");
  document.getElementById("open").style.display = "none";

};
