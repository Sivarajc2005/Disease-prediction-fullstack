from flask import Flask , render_template , jsonify ,request
import disease_predict as ds
app=Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/symptom',methods=['GET'])

@app.route ('/sym', methods=['GET','POST'])
def symptom():
    data = request.get_json()
    feel = data.get('symptoms', [])
    print(feel)
    sol=result(feel)
    return jsonify({'msg': sol})
5
def result(x):
    my_list = x
    string = str(",".join(my_list))
    sol=ds.predictDisease(string)
    return sol
    

if __name__ == ('__main__'):
   app.run(debug=True)