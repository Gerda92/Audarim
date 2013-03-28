class Definition
  include Mongoid::Document
  include Mongoid::Timestamp

  field :meaning, type: String
  field :language, type: String
  field :likes, type: Integer

  belongs_to :word, :class_name=>'Word'
end
