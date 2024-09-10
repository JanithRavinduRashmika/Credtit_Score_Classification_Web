from flask import Flask, request, jsonify
from flask_cors import CORS
import numpy as np
import pickle

app = Flask(__name__)
CORS(app)

def process_dict(d):
    processed_values = []
    
    for key, value in d.items():
        if isinstance(value, str):
            if value == 'True':
                processed_values.append(True)
            elif value == 'False':
                processed_values.append(False)
            elif value.isdigit():
                processed_values.append(int(value))
            else:
                try:
                    processed_values.append(float(value))
                except ValueError:
                    processed_values.append(value)
        else:
            processed_values.append(value)
    
    return np.array(processed_values)

def preProcessData(data):
    Credit_Mix = {"Good": '2', "Standard": '1', "Poor": '0'}
    data['Credit_Mix'] = Credit_Mix.get(data.get('Credit_Mix', ''), data.get('Credit_Mix', ''))

    data['Payment_of_Min_Amount_Yes'] = False
    data['Payment_Behaviour_High_spent_Medium_value_payments'] = False
    data['Payment_Behaviour_High_spent_Small_value_payments'] = False
    data['Payment_Behaviour_Low_spent_Large_value_payments'] = False
    data['Payment_Behaviour_Low_spent_Medium_value_payments'] = False
    data['Payment_Behaviour_Low_spent_Small_value_payments'] = False

    if data.get('Payment_of_Min_Amount') == "Yes":
        data['Payment_of_Min_Amount_Yes'] = True
    
    if data.get('Payment_Behaviour') == "High_spent_Medium_value_payments":
        data['Payment_Behaviour_High_spent_Medium_value_payments'] = True
    elif data.get('Payment_Behaviour') == "High_spent_Small_value_payments":
        data['Payment_Behaviour_High_spent_Small_value_payments'] = True
    elif data.get('Payment_Behaviour') == "Low_spent_Large_value_payments":
        data['Payment_Behaviour_Low_spent_Large_value_payments'] = True
    elif data.get('Payment_Behaviour') == "Low_spent_Medium_value_payments":
        data['Payment_Behaviour_Low_spent_Medium_value_payments'] = True
    elif data.get('Payment_Behaviour') == "Low_spent_Small_value_payments":
        data['Payment_Behaviour_Low_spent_Small_value_payments'] = True

    data['Month'] = '9'
    data['Type_of_Loan'] = '0.076445'

    del data['Payment_of_Min_Amount']
    del data['Payment_Behaviour']

    new_order = ['Month', 'Age', 'Annual_Income', 'Monthly_Inhand_Salary', 'Num_Bank_Accounts',
                 'Num_Credit_Card', 'Interest_Rate', 'Num_of_Loan', 'Type_of_Loan', 'Delay_from_due_date',
                 'Num_of_Delayed_Payment', 'Changed_Credit_Limit', 'Num_Credit_Inquiries', 'Credit_Mix', 'Outstanding_Debt',
                 'Credit_Utilization_Ratio', 'Credit_History_Age', 'Total_EMI_per_month', 'Amount_invested_monthly', 'Monthly_Balance', 
                 'Payment_of_Min_Amount_Yes', 'Payment_Behaviour_High_spent_Medium_value_payments', 
                 'Payment_Behaviour_High_spent_Small_value_payments', 'Payment_Behaviour_Low_spent_Large_value_payments', 
                 'Payment_Behaviour_Low_spent_Medium_value_payments', 'Payment_Behaviour_Low_spent_Small_value_payments']
    
    reordered_data = reorder_dict(data, new_order)

    return process_dict(reordered_data)

def reorder_dict(d, new_order):
    return {key: d[key] for key in new_order if key in d}

@app.route('/submit', methods=['POST'])
def submit():
    try:
        data = request.json
        X = preProcessData(data)
        

        with open('scaler.pkl', 'rb') as scaler_file:
            loaded_scaler = pickle.load(scaler_file)

        with open('xgb_model.pkl', 'rb') as model_file:
            loaded_model = pickle.load(model_file)

        X_new_scaled = loaded_scaler.transform([X])

        

        predictions = loaded_model.predict(X_new_scaled)
        prediction_value = predictions[0]
        
        
        if isinstance(prediction_value, np.ndarray):
            prediction_value = prediction_value.tolist()
        elif isinstance(prediction_value, np.generic):
            prediction_value = prediction_value.item()

        prediction_msg = ""

        if prediction_value == 0:
            prediction_msg = "Poor"
        elif prediction_value == 1:
            prediction_msg = "Standard"
        else:
            prediction_msg = "Good"


        return jsonify({"predictions": prediction_msg})

    except Exception as e:
        print(f"Error: {e}")
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
