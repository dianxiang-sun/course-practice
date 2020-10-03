import hashlib

while True:
    passwd = input('Please enter a password (letters, and numbers only): ')
    if passwd.isalnum():
        print("You've just created your password.")
        if len(passwd) < 8:
            print('Your password is too short.\n')
        else:
            hpasswrd = hashlib.sha256(passwd.encode())
            print('This is your hashed password: ' + hpasswrd.hexdigest())
            break
    else:
        print('Sorry, password can contain only letters and numbers.')