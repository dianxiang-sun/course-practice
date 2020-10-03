import webbrowser
import sys

place = ''
if len(sys.argv) > 1:
    # Get address from command line.
    place = ' '.join(sys.argv[1:])

webbrowser.open('http://google.com/maps/search/' + place)