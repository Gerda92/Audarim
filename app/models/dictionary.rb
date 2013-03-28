class Dictionary
  include Mongoid::Document
  include Mongoid::Timestamp

  field :counter, type: Integer
  field :name, type: String 
  
  has_many :words, :class_name => 'Word' 
end

def findWord(word)
  
end

def findCompletes(part)
  
end
