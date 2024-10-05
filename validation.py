import re

def validate_nombre(nombre):
    if not nombre:
        return False
    return 3 <= len(nombre.strip()) <= 80

def validate_email(email):
    if not email:
        return False
    length_valid = len(email) > 15
    format_valid = re.match(r'^[\w.]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$', email)
    return length_valid and format_valid

def validate_phone_number(phone_number):
    if not phone_number:
        return False
    length_valid = len(phone_number) >= 8
    format_valid = re.match(r'^[0-9]+$', phone_number)
    return length_valid and format_valid

def validate_select(select):
    return bool(select)

def validate_device_nombre(dnombre):
    if not dnombre:
        return False
    return 3 <= len(dnombre.strip()) <= 80

def validate_files(files):
    if not files or len(files) == 0:
        return False
    length_valid = 1 <= len(files) <= 3
    type_valid = all(
        file.mimetype.startswith("image/") or file.mimetype == "application/pdf"
        for file in files
    )
    return length_valid and type_valid

def validate_years_of_use(years_of_use):
    if not years_of_use:
        return False
    try:
        years = int(years_of_use)
        return 1 <= years <= 99
    except ValueError:
        return False

    
def validate_comment(text):
    if not text:
        return False
    return (3 < text.length and text.length < 80)

'''
def validate_form(data):
    invalid_inputs = []
    is_valid = True

    def set_invalid_input(input_nombre):
        nonlocal is_valid
        invalid_inputs.append(input_nombre)
        is_valid = False

    # Extract form data
    nombre = data.get("nombre")
    email = data.get("email")
    phone_number = data.get("phone")
    region = data.get("region")
    comuna = data.get("comuna")
    devices = data.getlist("devices")  # Assuming device data is in a list of dictionaries

    # Validate form fields
    if not validate_nombre(nombre):
        set_invalid_input("Nombre")

    if not validate_email(email):
        set_invalid_input("Email")

    if phone_number and not validate_phone_number(phone_number):
        set_invalid_input("Número")

    if not validate_select(region):
        set_invalid_input("Región")

    if not validate_select(comuna):
        set_invalid_input("Comuna")

    # Validate each device
    for index, device in enumerate(devices):
        dnombre = device.get("dnombre")
        tipo = device.get("tipo")
        years_of_use = device.get("years_of_use")
        state = device.get("state")
        files = device.get("files")

        device_number = f"Dispositivo {index + 1}"

        if not validate_device_nombre(dnombre):
            set_invalid_input(f"{device_number}: Nombre del dispositivo")

        if not validate_select(tipo):
            set_invalid_input(f"{device_number}: Tipo de dispositivo")

        if not validate_years_of_use(years_of_use):
            set_invalid_input(f"{device_number}: Años de uso")

        if not validate_select(state):
            set_invalid_input(f"{device_number}: Estado de Funcionamiento")

        if not validate_files(files):
            set_invalid_input(f"{device_number}: Fotos")

    if not is_valid:
        return False, invalid_inputs

    return True, []
'''