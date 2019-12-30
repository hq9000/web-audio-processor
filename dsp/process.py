import argparse
import sndhdr
import os


def fail_with_error(error_message):
    print(error_message)
    exit(1)


parser = argparse.ArgumentParser()

parser.add_argument('source_file', type=str)
parser.add_argument('destination_file', type=str)
parser.add_argument('api_root', type=str)

args = parser.parse_args()

source_file = args.source_file
destination_file = args.destination_file
api_root = args.api_root

if not os.path.isfile(source_file):
    fail_with_error('source file ' + source_file + ' does not exist')

source_file_info = sndhdr.what(source_file)

if source_file_info is None:
    fail_with_error('unrecognizable sound file format')

if source_file_info.filetype != 'wav':
    fail_with_error('only wav files are supported. Provided: ' + source_file_info.filetype)
