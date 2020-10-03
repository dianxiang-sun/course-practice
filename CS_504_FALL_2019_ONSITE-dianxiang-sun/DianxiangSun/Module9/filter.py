from PIL import Image, ImageFilter

img=Image.open('bulldog2.png')
img_blur=img.filter(filter=ImageFilter.BLUR)
img_blur.save('blur.jpg')

img_gray=img.convert('L')
img_gray.save('grayscale.png')