class Word
  include Mongoid::Document

  field :name, type: String
  field :language, type: String
  field :counter, type: Integer, :default => 0
  field :definition, type: String
end
