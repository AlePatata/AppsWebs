import re


def validate_comment(nombre, texto):
    if not validate_nombre(nombre):
        return False
    if not validate_texto(texto):
        return False
    return True

def validate_nombre(nombre):
    if not nombre:
        return False
    regex = r'^[a-zA-Z ]+$'
    return bool(re.match(regex,nombre)) and (3 <= len(nombre) <= 80)


def validate_texto(texto):
    if texto:
        for texto in texto:
            if texto and not (5 <= len(texto.strip()) <= 200):
                return False
    return True