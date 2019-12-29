import argparse

parser = argparse.ArgumentParser()

parser.add_argument('source_file', type=str)
parser.add_argument('destination_file', type=str)
parser.add_argument('api_root', type=str)

args = parser.parse_args()

source_file = args.source_file
destination_file = args.destination_file
api_root = args.api_root
