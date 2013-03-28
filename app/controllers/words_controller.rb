class WordsController < ApplicationController
  def index
    
  end

  def create
    @word = Word.new
    @word.name = params['name']
    @word.language = 'kz'
    @word.definition = params['definition']
    @check = Word.where(name: @word.name).all.to_a
    if (@check.count == 0)
      @word.save
    end
  end

  def word_exist
    name = params['name']
    n = Word.where(name: name).all.to_a.count
    if (n>0)
      @ans = true
    else
      @ans = false
    end
  end
end